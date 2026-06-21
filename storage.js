/**
 * Storage Module - AppStorage
 * Handles incoming materials, adding new materials, edits, deletes, and archiving.
 */
const AppStorage = {
    addMaterial(data) {
        const materials = AppDB.getMaterials();
        
        // Auto-calculate total price
        const quantity = parseFloat(data.quantity) || 0;
        const unitPrice = parseFloat(data.unitPrice) || 0;
        const deliveryCost = parseFloat(data.deliveryCost) || 0;
        const totalPrice = quantity * unitPrice;
        
        let resolvedUnit = "";
        if (data.unit_select !== undefined) {
            resolvedUnit = data.unit_select === "custom" ? (data.unit_custom ? data.unit_custom.trim() : "") : data.unit_select.trim();
        } else if (data.unit !== undefined) {
            resolvedUnit = data.unit.trim();
        }

        const newMaterial = {
            id: "mat_" + Math.random().toString(36).substr(2, 9) + "_" + Date.now(),
            buyerName: data.buyerName ? data.buyerName.trim() : "",
            receiverName: data.receiverName ? data.receiverName.trim() : "",
            companyName: data.companyName ? data.companyName.trim() : "",
            category: data.category, // e.g. 'electrical', 'plumbing', etc.
            name: data.name ? data.name.trim() : "",
            quantity: quantity,
            initialQuantity: quantity,
            unit: resolvedUnit,
            unitPrice: unitPrice,
            totalPrice: totalPrice,
            invoiceNumber: data.invoiceNumber ? data.invoiceNumber.trim() : "",
            deliveryCost: deliveryCost,
            alertLimit: parseFloat(data.alertLimit) || 0,
            entryDate: data.entryDate || new Date().toISOString().split('T')[0],
            notes: data.notes ? data.notes.trim() : "",
            archived: false,
            lastUsed: new Date().toISOString()
        };

        materials.push(newMaterial);
        AppDB.saveMaterials(materials);

        // Add an incoming transaction record
        const transactions = AppDB.getTransactions();
        const incomingTransaction = {
            id: "tx_" + Math.random().toString(36).substr(2, 9) + "_" + Date.now(),
            type: "in",
            materialId: newMaterial.id,
            materialName: newMaterial.name,
            category: newMaterial.category,
            quantity: quantity,
            unit: newMaterial.unit,
            unitPrice: unitPrice,
            totalPrice: totalPrice,
            operatorName: newMaterial.buyerName, // buyer
            delivererName: newMaterial.receiverName, // receiver
            reason: "إدخال شحنة مواد جديدة إلى المخزن",
            companyName: newMaterial.companyName,
            deliveryCost: deliveryCost,
            returnInvoiceNumber: "",
            date: new Date().toISOString()
        };
        transactions.push(incomingTransaction);
        AppDB.saveTransactions(transactions);

        // Log general activity
        AppDB.addActivityLog(`تم إضافة مادة جديدة [${newMaterial.name}] بالكمية (${newMaterial.quantity} ${newMaterial.unit}) في قسم [${AppDB.CATEGORIES[newMaterial.category] || newMaterial.category}]`);

        return newMaterial;
    },

    updateMaterial(id, data) {
        const materials = AppDB.getMaterials();
        const index = materials.findIndex(m => m.id === id);
        
        if (index === -1) return false;

        const oldMaterial = materials[index];
        const quantity = parseFloat(data.quantity) || 0;
        const unitPrice = parseFloat(data.unitPrice) || 0;
        const deliveryCost = parseFloat(data.deliveryCost) || 0;
        const totalPrice = quantity * unitPrice;

        // Keep the old initialQuantity or update if desired, we keep it but check if quantity was manually increased
        let initialQuantity = oldMaterial.initialQuantity;
        if (quantity > oldMaterial.quantity) {
            // If quantity increased, we adjust initial quantity proportionally
            initialQuantity += (quantity - oldMaterial.quantity);
        }

        let resolvedUnit = oldMaterial.unit;
        if (data.unit_select !== undefined) {
            resolvedUnit = data.unit_select === "custom" ? (data.unit_custom ? data.unit_custom.trim() : "") : data.unit_select.trim();
        } else if (data.unit !== undefined) {
            resolvedUnit = data.unit.trim();
        }

        materials[index] = {
            ...oldMaterial,
            buyerName: data.buyerName ? data.buyerName.trim() : oldMaterial.buyerName,
            receiverName: data.receiverName ? data.receiverName.trim() : oldMaterial.receiverName,
            companyName: data.companyName ? data.companyName.trim() : oldMaterial.companyName,
            category: data.category || oldMaterial.category,
            name: data.name ? data.name.trim() : oldMaterial.name,
            quantity: quantity,
            initialQuantity: initialQuantity,
            unit: resolvedUnit,
            unitPrice: unitPrice,
            totalPrice: totalPrice,
            invoiceNumber: data.invoiceNumber ? data.invoiceNumber.trim() : oldMaterial.invoiceNumber,
            deliveryCost: deliveryCost,
            alertLimit: parseFloat(data.alertLimit) || 0,
            entryDate: data.entryDate || oldMaterial.entryDate,
            notes: data.notes ? data.notes.trim() : oldMaterial.notes,
            lastUsed: new Date().toISOString()
        };

        AppDB.saveMaterials(materials);
        AppDB.addActivityLog(`تم تعديل بيانات المادة [${materials[index].name}] في قسم [${AppDB.CATEGORIES[materials[index].category]}]`);
        return true;
    },

    deleteMaterial(id) {
        const materials = AppDB.getMaterials();
        const material = materials.find(m => m.id === id);
        if (!material) return false;

        const updatedMaterials = materials.filter(m => m.id !== id);
        AppDB.saveMaterials(updatedMaterials);
        AppDB.addActivityLog(`تم حذف المادة [${material.name}] نهائياً من النظام`);
        return true;
    },

    archiveMaterial(id) {
        const materials = AppDB.getMaterials();
        const material = materials.find(m => m.id === id);
        if (!material) return false;

        material.archived = true;
        material.lastUsed = new Date().toISOString();
        
        AppDB.saveMaterials(materials);
        AppDB.addActivityLog(`تم أرشفة المادة [${material.name}]`);
        return true;
    },

    unarchiveMaterial(id) {
        const materials = AppDB.getMaterials();
        const material = materials.find(m => m.id === id);
        if (!material) return false;

        material.archived = false;
        material.lastUsed = new Date().toISOString();
        
        AppDB.saveMaterials(materials);
        AppDB.addActivityLog(`تم إلغاء أرشفة المادة [${material.name}] وإعادتها للمخزون النشط`);
        return true;
    }
};
