/**
 * Statistics Module - AppStatistics
 * Aggregates logs, transactions, and inventory lists to calculate KPI metrics and structure Chart.js datasets.
 */
const AppStatistics = {
    calculate(category = "all") {
        const materials = AppDB.getMaterials();
        const transactions = AppDB.getTransactions();
        
        // Filter materials and transactions based on category
        const filteredMaterials = category === "all" 
            ? materials 
            : materials.filter(m => m.category === category);
            
        const filteredTransactions = category === "all"
            ? transactions
            : transactions.filter(t => t.category === category);

        // 1. Total Active Materials (excluding archived)
        const activeMaterials = filteredMaterials.filter(m => !m.archived);
        const totalMaterialsCount = activeMaterials.length;

        // 2. Total Current Quantities
        const totalCurrentQuantity = activeMaterials.reduce((sum, m) => sum + m.quantity, 0);

        // 3. Total Inventory Value (Current stock value)
        const totalInventoryValue = activeMaterials.reduce((sum, m) => sum + (m.quantity * m.unitPrice), 0);

        // 4. Total Expenses (Sum of total prices of all 'in' transactions + their delivery costs)
        const inTransactions = filteredTransactions.filter(t => t.type === "in");
        const totalExpenses = inTransactions.reduce((sum, t) => sum + t.totalPrice + (t.deliveryCost || 0), 0);

        // 5. Total Issued Materials (Sum of quantities of 'out' and 'return' transactions)
        const outTransactions = filteredTransactions.filter(t => t.type === "out" || t.type === "return");
        const totalIssuedCount = outTransactions.length;
        const totalIssuedQuantity = outTransactions.reduce((sum, t) => sum + t.quantity, 0);
        const totalIssuedValue = outTransactions.filter(t => t.type === "out").reduce((sum, t) => sum + t.totalPrice, 0);

        // 6. Total Delivery Costs (Delivery costs for all 'in' + 'return' transactions)
        const returnTransactions = filteredTransactions.filter(t => t.type === "return");
        const totalDeliveryCosts = inTransactions.reduce((sum, t) => sum + (t.deliveryCost || 0), 0) + 
                                   returnTransactions.reduce((sum, t) => sum + (t.deliveryCost || 0), 0);

        // 7. Most and Least Used Materials
        // Aggregate issued quantities by material name
        const usageMap = {};
        // Initialize all active materials with 0 usage to catch unused ones as least used
        activeMaterials.forEach(m => {
            usageMap[m.name] = 0;
        });
        outTransactions.forEach(t => {
            if (usageMap[t.materialName] !== undefined) {
                usageMap[t.materialName] += t.quantity;
            } else {
                usageMap[t.materialName] = t.quantity;
            }
        });

        const usageArray = Object.keys(usageMap).map(name => ({
            name,
            quantity: usageMap[name]
        }));

        let mostUsedMaterial = "لا يوجد";
        let mostUsedQty = 0;
        let leastUsedMaterial = "لا يوجد";
        let leastUsedQty = Infinity;

        if (usageArray.length > 0) {
            // Sort by usage
            usageArray.sort((a, b) => b.quantity - a.quantity);
            mostUsedMaterial = usageArray[0].name;
            mostUsedQty = usageArray[0].quantity;
            
            // For least used, we get the last element
            const leastElement = usageArray[usageArray.length - 1];
            leastUsedMaterial = leastElement.name;
            leastUsedQty = leastElement.quantity;
        }

        if (leastUsedQty === Infinity) {
            leastUsedQty = 0;
        }

        // 8. Top Suppliers (Most bought from)
        const supplierMap = {};
        inTransactions.forEach(t => {
            if (t.companyName) {
                supplierMap[t.companyName] = (supplierMap[t.companyName] || 0) + t.totalPrice;
            }
        });
        const supplierArray = Object.keys(supplierMap).map(name => ({
            name,
            totalValue: supplierMap[name]
        })).sort((a, b) => b.totalValue - a.totalValue);

        const topSupplier = supplierArray.length > 0 ? supplierArray[0].name : "لا يوجد";

        return {
            totalMaterialsCount,
            totalCurrentQuantity,
            totalInventoryValue,
            totalExpenses,
            totalIssuedCount,
            totalIssuedQuantity,
            totalIssuedValue,
            totalDeliveryCosts,
            mostUsedMaterial: mostUsedQty > 0 ? `${mostUsedMaterial} (${mostUsedQty})` : "لا يوجد",
            leastUsedMaterial: usageArray.length > 0 ? `${leastUsedMaterial} (${leastUsedQty})` : "لا يوجد",
            topSupplier: topSupplier !== "لا يوجد" ? `${topSupplier} (${supplierArray[0].totalValue.toLocaleString()} د.ع)` : "لا يوجد",
            usageArray,
            supplierArray
        };
    },

    getCategoryShareData(category = "all") {
        const materials = AppDB.getMaterials().filter(m => !m.archived);
        const shares = {};

        if (category === "all") {
            const categories = AppDB.CATEGORIES;
            // Initialize categories
            Object.keys(categories).forEach(catKey => {
                shares[categories[catKey]] = 0;
            });
            materials.forEach(m => {
                const categoryName = categories[m.category] || m.category;
                shares[categoryName] = (shares[categoryName] || 0) + (m.quantity * m.unitPrice);
            });
        } else {
            // Filter materials of the chosen category and share by individual material name
            const filtered = materials.filter(m => m.category === category);
            filtered.forEach(m => {
                shares[m.name] = (shares[m.name] || 0) + (m.quantity * m.unitPrice);
            });
        }

        return {
            labels: Object.keys(shares).filter(key => shares[key] > 0),
            values: Object.values(shares).filter(val => val > 0)
        };
    },

    getTransactionMonthlyData(category = "all") {
        const transactions = AppDB.getTransactions();
        const filteredTransactions = category === "all"
            ? transactions
            : transactions.filter(t => t.category === category);
        
        // Let's get the last 6 months
        const monthNames = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        
        const now = new Date();
        const last6Months = [];
        for (let i = 5; i >= 0; i--) {
            const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const label = `${monthNames[d.getMonth()]} ${d.getFullYear()}`;
            last6Months.push({
                label: label,
                year: d.getFullYear(),
                month: d.getMonth(),
                expenses: 0,
                outputs: 0
            });
        }

        filteredTransactions.forEach(t => {
            const tDate = new Date(t.date);
            const tYear = tDate.getFullYear();
            const tMonth = tDate.getMonth();

            // Find matching month in our last 6 months
            const match = last6Months.find(m => m.year === tYear && m.month === tMonth);
            if (match) {
                if (t.type === "in") {
                    match.expenses += t.totalPrice + (t.deliveryCost || 0);
                } else if (t.type === "out") {
                    match.outputs += t.totalPrice;
                } else if (t.type === "return") {
                    match.outputs += t.totalPrice;
                }
            }
        });

        return {
            labels: last6Months.map(m => m.label),
            expenses: last6Months.map(m => m.expenses),
            outputs: last6Months.map(m => m.outputs)
        };
    }
};
