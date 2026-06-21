/**
 * Alerts Module - AppAlerts
 * Scans active stock to generate warnings for out-of-stock, low-stock, and long-term unused items.
 */
const AppAlerts = {
    // Threshold for considering a material "unused for a long time" in days
    UNUSED_THRESHOLD_DAYS: 45,

    checkAlerts() {
        const materials = AppDB.getMaterials().filter(m => !m.archived);
        const alertsList = [];
        const now = new Date();

        materials.forEach(mat => {
            // 1. Out of stock (نفاد المواد) - Red
            if (mat.quantity === 0) {
                alertsList.push({
                    materialId: mat.id,
                    name: mat.name,
                    category: mat.category,
                    quantity: 0,
                    unit: mat.unit,
                    alertLimit: mat.alertLimit,
                    type: "out_of_stock",
                    typeText: "نفدت المادة تماماً من المخزن",
                    color: "danger", // Red
                    badgeColor: "#dc3545",
                    icon: "fa-circle-xmark",
                    date: mat.lastUsed
                });
                return; // An out of stock item doesn't need to trigger low stock or unused alerts
            }

            // 2. Near empty / Low stock (قرب نفاد المواد) - Orange
            if (mat.quantity <= mat.alertLimit) {
                alertsList.push({
                    materialId: mat.id,
                    name: mat.name,
                    category: mat.category,
                    quantity: mat.quantity,
                    unit: mat.unit,
                    alertLimit: mat.alertLimit,
                    type: "low_stock",
                    typeText: "الكمية المتبقية قاربت على النفاد",
                    color: "warning", // Orange
                    badgeColor: "#fd7e14", // Construction safety orange
                    icon: "fa-triangle-exclamation",
                    date: mat.lastUsed
                });
            }

            // 3. Unused for a long time (عدم استخدام مادة لفترة طويلة) - Green
            const lastUsedDate = new Date(mat.lastUsed || mat.entryDate);
            const diffTime = Math.abs(now - lastUsedDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays >= this.UNUSED_THRESHOLD_DAYS) {
                alertsList.push({
                    materialId: mat.id,
                    name: mat.name,
                    category: mat.category,
                    quantity: mat.quantity,
                    unit: mat.unit,
                    alertLimit: mat.alertLimit,
                    type: "unused_long_time",
                    typeText: `لم يتم إجراء أي حركة على المادة منذ ${diffDays} يوماً`,
                    color: "success", // Green
                    badgeColor: "#198754",
                    icon: "fa-clock",
                    daysUnused: diffDays,
                    date: mat.lastUsed || mat.entryDate
                });
            }
        });

        return alertsList;
    },

    getAlertStats() {
        const alerts = this.checkAlerts();
        return {
            total: alerts.length,
            outOfStock: alerts.filter(a => a.type === "out_of_stock").length,
            lowStock: alerts.filter(a => a.type === "low_stock").length,
            unused: alerts.filter(a => a.type === "unused_long_time").length
        };
    }
};
