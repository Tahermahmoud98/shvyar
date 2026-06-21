/**
 * Output Module - AppOutput
 * Handles issuing materials, validating stock levels, project routing, and returns to supplier.
 */
const AppOutput = {
    issueMaterial(data) {
        const materials = AppDB.getMaterials();
        const material = materials.find(m => m.id === data.materialId);

        if (!material) {
            return { success: false, error: "المادة المحددة غير موجودة في المخزن." };
        }

        if (material.archived) {
            return { success: false, error: "لا يمكن سحب كميات من مادة مؤرشفة." };
        }

        const quantityToIssue = parseFloat(data.quantity) || 0;
        if (quantityToIssue <= 0) {
            return { success: false, error: "يرجى إدخال كمية صحية أكبر من الصفر." };
        }

        if (material.quantity < quantityToIssue) {
            return { 
                success: false, 
                error: `الكمية المطلوبة (${quantityToIssue} ${material.unit}) أكبر من الكمية المتوفرة حالياً في المخزن (${material.quantity} ${material.unit}).` 
            };
        }

        // Deduct from stock
        material.quantity -= quantityToIssue;
        material.totalPrice = material.quantity * material.unitPrice;
        material.lastUsed = new Date().toISOString();

        // Save updated materials
        AppDB.saveMaterials(materials);

        // Prepare transaction
        const transactions = AppDB.getTransactions();
        const reasonText = data.reason === "return" ? "استرجاع للشركة" : "استخدام بالمشروع";
        
        const outgoingTransaction = {
            id: "tx_" + Math.random().toString(36).substr(2, 9) + "_" + Date.now(),
            type: data.reason === "return" ? "return" : "out",
            materialId: material.id,
            materialName: material.name,
            category: material.category,
            quantity: quantityToIssue,
            unit: material.unit,
            unitPrice: material.unitPrice,
            totalPrice: quantityToIssue * material.unitPrice,
            operatorName: data.operatorName ? data.operatorName.trim() : "",
            delivererName: data.delivererName ? data.delivererName.trim() : "",
            reason: reasonText,
            companyName: data.reason === "return" ? (data.companyName ? data.companyName.trim() : "") : "",
            deliveryCost: data.reason === "return" ? (parseFloat(data.deliveryCost) || 0) : 0,
            returnInvoiceNumber: data.reason === "return" ? (data.returnInvoiceNumber ? data.returnInvoiceNumber.trim() : "") : "",
            date: new Date().toISOString()
        };

        transactions.push(outgoingTransaction);
        AppDB.saveTransactions(transactions);

        // Log general activity
        let activityMsg = `تم إخراج (${quantityToIssue} ${material.unit}) من مادة [${material.name}]`;
        if (data.reason === "return") {
            activityMsg += ` بغرض الاسترجاع لشركة [${outgoingTransaction.companyName}] برقم وصل [${outgoingTransaction.returnInvoiceNumber}] وتكلفة توصيل (${outgoingTransaction.deliveryCost})`;
        } else {
            activityMsg += ` للاستخدام بالمشروع بواسطة [${outgoingTransaction.operatorName}] وتم تسليمها من قِبل [${outgoingTransaction.delivererName}]`;
        }
        
        AppDB.addActivityLog(activityMsg);

        return { success: true, transaction: outgoingTransaction };
    }
};
