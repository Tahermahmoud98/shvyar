/**
 * Database Module - AppDB
 * Handles LocalStorage data schemas, initialization, CRUD helpers, backups, and operation logs.
 */
const AppDB = {
    // Default categories requested
    CATEGORIES: {
        electrical: "مواد كهربائية",
        plumbing: "مواد مجاري",
        steel: "مواد حديد",
        tiles: "مواد بلاط وكاشي وسيراميك",
        gypsum: "مواد جبسن بورد",
        cement: "مواد إسمنت",
        paint: "مواد دهان",
        interior: "مواد داخلية (أبواب ونوافذ)",
        supplies: "مواد مستلزمات يومية"
    },

    init() {
        if (!localStorage.getItem("warehouse_materials")) {
            const seedMaterials = [
                {
                    id: "mat_seed_1",
                    buyerName: "م. محمد علي",
                    receiverName: "أحمد الساعدي",
                    companyName: "شركة حديد العراق",
                    category: "steel",
                    name: "حديد تسليح 16 ملم حديد تركي",
                    quantity: 45,
                    initialQuantity: 50,
                    unit: "طن",
                    unitPrice: 850000,
                    totalPrice: 38250000,
                    invoiceNumber: "INV-1092",
                    deliveryCost: 250000,
                    alertLimit: 10,
                    entryDate: "2026-05-10",
                    notes: "شحنة ممتازة مطابقة للمواصفات الفنية العراقية",
                    archived: false,
                    lastUsed: "2026-06-15T09:30:00.000Z"
                },
                {
                    id: "mat_seed_2",
                    buyerName: "م. محمد علي",
                    receiverName: "أحمد الساعدي",
                    companyName: "معمل إسمنت كربلاء",
                    category: "cement",
                    name: "إسمنت بورتلاند مقاوم للأملاح",
                    quantity: 1200,
                    initialQuantity: 1500,
                    unit: "كيس",
                    unitPrice: 6500,
                    totalPrice: 7800000,
                    invoiceNumber: "INV-1093",
                    deliveryCost: 150000,
                    alertLimit: 300,
                    entryDate: "2026-05-12",
                    notes: "تخزين مغطى بالكامل لحمايته من الرطوبة",
                    archived: false,
                    lastUsed: "2026-06-12T13:45:00.000Z"
                },
                {
                    id: "mat_seed_3",
                    buyerName: "م. يوسف الخفاجي",
                    receiverName: "حسين الموسوي",
                    companyName: "دهانات جوتن العراق",
                    category: "paint",
                    name: "طلاء جوتن داخلي أبيض نصف لمعة",
                    quantity: 8,
                    initialQuantity: 10,
                    unit: "سطل",
                    unitPrice: 45000,
                    totalPrice: 360000,
                    invoiceNumber: "INV-1096",
                    deliveryCost: 20000,
                    alertLimit: 10,
                    entryDate: "2026-05-20",
                    notes: "للاستخدام في طلاء جدران المجمع السكني B",
                    archived: false,
                    lastUsed: "2026-06-18T16:00:00.000Z"
                },
                {
                    id: "mat_seed_4",
                    buyerName: "م. يوسف الخفاجي",
                    receiverName: "حسين الموسوي",
                    companyName: "مكتب الكهرباء الوطني",
                    category: "electrical",
                    name: "أسلاك كهرباء 2.5 ملم نحاس مفرش",
                    quantity: 0,
                    initialQuantity: 50,
                    unit: "لفة",
                    unitPrice: 28000,
                    totalPrice: 0,
                    invoiceNumber: "INV-1095",
                    deliveryCost: 15000,
                    alertLimit: 15,
                    entryDate: "2026-04-15",
                    notes: "تم استخدام كامل الشحنة لتسليك العمارة رقم 3",
                    archived: false,
                    lastUsed: "2026-05-20T10:00:00.000Z"
                },
                {
                    id: "mat_seed_5",
                    buyerName: "م. محمد علي",
                    receiverName: "أحمد الساعدي",
                    companyName: "شركة سيراميكا",
                    category: "tiles",
                    name: "سيراميك أرضيات 60*60 نخب أول إسباني",
                    quantity: 250,
                    initialQuantity: 250,
                    unit: "متر مربع",
                    unitPrice: 12000,
                    totalPrice: 3000000,
                    invoiceNumber: "INV-1094",
                    deliveryCost: 80000,
                    alertLimit: 50,
                    entryDate: "2026-04-01",
                    notes: "مخزن في الساحة المفتوحة المغطاة",
                    archived: false,
                    lastUsed: "2026-04-01T14:20:00.000Z"
                }
            ];
            localStorage.setItem("warehouse_materials", JSON.stringify(seedMaterials));
        }
        if (!localStorage.getItem("warehouse_transactions")) {
            const seedTransactions = [
                {
                    id: "tx_seed_1",
                    type: "in",
                    materialId: "mat_seed_1",
                    materialName: "حديد تسليح 16 ملم حديد تركي",
                    category: "steel",
                    quantity: 50,
                    unit: "طن",
                    unitPrice: 850000,
                    totalPrice: 42500000,
                    operatorName: "م. محمد علي",
                    delivererName: "أحمد الساعدي",
                    reason: "إدخال شحنة مواد جديدة إلى المخزن",
                    companyName: "شركة حديد العراق",
                    deliveryCost: 250000,
                    returnInvoiceNumber: "",
                    date: "2026-05-10T09:00:00.000Z"
                },
                {
                    id: "tx_seed_2",
                    type: "in",
                    materialId: "mat_seed_2",
                    materialName: "إسمنت بورتلاند مقاوم للأملاح",
                    category: "cement",
                    quantity: 1500,
                    unit: "كيس",
                    unitPrice: 6500,
                    totalPrice: 9750000,
                    operatorName: "م. محمد علي",
                    delivererName: "أحمد الساعدي",
                    reason: "إدخال شحنة مواد جديدة إلى المخزن",
                    companyName: "معمل إسمنت كربلاء",
                    deliveryCost: 150000,
                    returnInvoiceNumber: "",
                    date: "2026-05-12T10:15:00.000Z"
                },
                {
                    id: "tx_seed_3",
                    type: "in",
                    materialId: "mat_seed_3",
                    materialName: "طلاء جوتن داخلي أبيض نصف لمعة",
                    category: "paint",
                    quantity: 10,
                    unit: "سطل",
                    unitPrice: 45000,
                    totalPrice: 450000,
                    operatorName: "م. يوسف الخفاجي",
                    delivererName: "حسين الموسوي",
                    reason: "إدخال شحنة مواد جديدة إلى المخزن",
                    companyName: "دهانات جوتن العراق",
                    deliveryCost: 20000,
                    returnInvoiceNumber: "",
                    date: "2026-05-20T11:30:00.000Z"
                },
                {
                    id: "tx_seed_4",
                    type: "in",
                    materialId: "mat_seed_4",
                    materialName: "أسلاك كهرباء 2.5 ملم نحاس مفرش",
                    category: "electrical",
                    quantity: 50,
                    unit: "لفة",
                    unitPrice: 28000,
                    totalPrice: 1400000,
                    operatorName: "م. يوسف الخفاجي",
                    delivererName: "حسين الموسوي",
                    reason: "إدخال شحنة مواد جديدة إلى المخزن",
                    companyName: "مكتب الكهرباء الوطني",
                    deliveryCost: 15000,
                    returnInvoiceNumber: "",
                    date: "2026-04-15T08:00:00.000Z"
                },
                {
                    id: "tx_seed_5",
                    type: "in",
                    materialId: "mat_seed_5",
                    materialName: "سيراميك أرضيات 60*60 نخب أول إسباني",
                    category: "tiles",
                    quantity: 250,
                    unit: "متر مربع",
                    unitPrice: 12000,
                    totalPrice: 3000000,
                    operatorName: "م. محمد علي",
                    delivererName: "أحمد الساعدي",
                    reason: "إدخال شحنة مواد جديدة إلى المخزن",
                    companyName: "شركة سيراميكا",
                    deliveryCost: 80000,
                    returnInvoiceNumber: "",
                    date: "2026-04-01T14:20:00.000Z"
                },
                {
                    id: "tx_seed_6",
                    type: "out",
                    materialId: "mat_seed_1",
                    materialName: "حديد تسليح 16 ملم حديد تركي",
                    category: "steel",
                    quantity: 5,
                    unit: "طن",
                    unitPrice: 850000,
                    totalPrice: 4250000,
                    operatorName: "م. يوسف الخفاجي",
                    delivererName: "أمين المخزن",
                    reason: "استخدام في صب أعمدة الطابق الأول للمجمع A",
                    companyName: "",
                    deliveryCost: 0,
                    returnInvoiceNumber: "",
                    date: "2026-06-15T09:30:00.000Z"
                },
                {
                    id: "tx_seed_7",
                    type: "out",
                    materialId: "mat_seed_2",
                    materialName: "إسمنت بورتلاند مقاوم للأملاح",
                    category: "cement",
                    quantity: 300,
                    unit: "كيس",
                    unitPrice: 6500,
                    totalPrice: 1950000,
                    operatorName: "م. محمد علي",
                    delivererName: "أمين المخزن",
                    reason: "استخدام في صب الأساس الشريطي للمجمع B",
                    companyName: "",
                    deliveryCost: 0,
                    returnInvoiceNumber: "",
                    date: "2026-06-12T13:45:00.000Z"
                },
                {
                    id: "tx_seed_8",
                    type: "out",
                    materialId: "mat_seed_4",
                    materialName: "أسلاك كهرباء 2.5 ملم نحاس مفرش",
                    category: "electrical",
                    quantity: 50,
                    unit: "لفة",
                    unitPrice: 28000,
                    totalPrice: 1400000,
                    operatorName: "م. يوسف الخفاجي",
                    delivererName: "أمين المخزن",
                    reason: "استخدام في تسليك جدران العمارة رقم 3",
                    companyName: "",
                    deliveryCost: 0,
                    returnInvoiceNumber: "",
                    date: "2026-05-20T10:00:00.000Z"
                },
                {
                    id: "tx_seed_9",
                    type: "return",
                    materialId: "mat_seed_3",
                    materialName: "طلاء جوتن داخلي أبيض نصف لمعة",
                    category: "paint",
                    quantity: 2,
                    unit: "سطل",
                    unitPrice: 45000,
                    totalPrice: 90000,
                    operatorName: "م. محمد علي",
                    delivererName: "أمين المخزن",
                    reason: "استرجاع للشركة",
                    companyName: "دهانات جوتن العراق",
                    deliveryCost: 10000,
                    returnInvoiceNumber: "RET-901",
                    date: "2026-06-18T16:00:00.000Z"
                }
            ];
            localStorage.setItem("warehouse_transactions", JSON.stringify(seedTransactions));
        }
        if (!localStorage.getItem("warehouse_users")) {
            localStorage.setItem("warehouse_users", JSON.stringify(["مدير المستودع", "مهندس الموقع", "أمين المخزن"]));
        }
        if (!localStorage.getItem("warehouse_current_user")) {
            localStorage.setItem("warehouse_current_user", "مدير المستودع");
        }
        if (!localStorage.getItem("warehouse_logs")) {
            localStorage.setItem("warehouse_logs", JSON.stringify([
                {
                    id: "log_" + Date.now(),
                    user: "النظام",
                    action: "تم تهيئة قاعدة البيانات المحلية للمستودع وتنزيل البيانات التجريبية للمشروع بنجاح.",
                    date: new Date().toISOString()
                }
            ]));
        }
    },

    // Materials Core CRUD
    getMaterials() {
        try {
            return JSON.parse(localStorage.getItem("warehouse_materials")) || [];
        } catch (e) {
            console.error("Error reading materials", e);
            return [];
        }
    },

    saveMaterials(materials) {
        localStorage.setItem("warehouse_materials", JSON.stringify(materials));
        // Dispatch custom event to notify other modules of stock updates
        window.dispatchEvent(new CustomEvent("warehouseDataChanged"));
    },

    // Transactions Core CRUD (Output & Incoming records)
    getTransactions() {
        try {
            return JSON.parse(localStorage.getItem("warehouse_transactions")) || [];
        } catch (e) {
            console.error("Error reading transactions", e);
            return [];
        }
    },

    saveTransactions(transactions) {
        localStorage.setItem("warehouse_transactions", JSON.stringify(transactions));
        window.dispatchEvent(new CustomEvent("warehouseDataChanged"));
    },

    // Users Management
    getUsers() {
        try {
            return JSON.parse(localStorage.getItem("warehouse_users")) || ["مدير المستودع", "مهندس الموقع", "أمين المخزن"];
        } catch (e) {
            return ["مدير المستودع", "مهندس الموقع", "أمين المخزن"];
        }
    },

    saveUsers(users) {
        localStorage.setItem("warehouse_users", JSON.stringify(users));
    },

    getCurrentUser() {
        return localStorage.getItem("warehouse_current_user") || "مدير المستودع";
    },

    setCurrentUser(user) {
        localStorage.setItem("warehouse_current_user", user);
        this.addActivityLog(`تم تغيير المستخدم النشط إلى: ${user}`);
        window.dispatchEvent(new CustomEvent("currentUserChanged", { detail: { user } }));
    },

    addUser(username) {
        if (!username || username.trim() === "") return false;
        const users = this.getUsers();
        if (users.includes(username.trim())) return false;
        users.push(username.trim());
        this.saveUsers(users);
        this.addActivityLog(`تم إضافة مستخدم جديد للنظام: ${username}`);
        return true;
    },

    // Activity Log
    getActivityLogs() {
        try {
            return JSON.parse(localStorage.getItem("warehouse_logs")) || [];
        } catch (e) {
            return [];
        }
    },

    addActivityLog(action) {
        const logs = this.getActivityLogs();
        const newLog = {
            id: "log_" + Math.random().toString(36).substr(2, 9) + "_" + Date.now(),
            user: this.getCurrentUser(),
            action: action,
            date: new Date().toISOString()
        };
        logs.unshift(newLog); // Newest first
        // Limit logs size to 1000 items
        if (logs.length > 1000) {
            logs.pop();
        }
        localStorage.setItem("warehouse_logs", JSON.stringify(logs));
        window.dispatchEvent(new CustomEvent("warehouseLogsChanged"));
    },

    // Backup & Restore
    exportBackup() {
        const backupData = {
            materials: this.getMaterials(),
            transactions: this.getTransactions(),
            users: this.getUsers(),
            currentUser: this.getCurrentUser(),
            logs: this.getActivityLogs(),
            exportDate: new Date().toISOString(),
            version: "1.0.0"
        };
        return JSON.stringify(backupData, null, 2);
    },

    importBackup(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            if (!data.materials || !Array.isArray(data.materials)) {
                throw new Error("تنسيق ملف النسخ الاحتياطي غير صالح (المواد مفقودة).");
            }
            localStorage.setItem("warehouse_materials", JSON.stringify(data.materials));
            localStorage.setItem("warehouse_transactions", JSON.stringify(data.transactions || []));
            localStorage.setItem("warehouse_users", JSON.stringify(data.users || ["مدير المستودع"]));
            localStorage.setItem("warehouse_current_user", data.currentUser || "مدير المستودع");
            localStorage.setItem("warehouse_logs", JSON.stringify(data.logs || []));
            
            this.addActivityLog("تم استعادة النسخة الاحتياطية بنجاح وتحديث كافة البيانات.");
            window.dispatchEvent(new CustomEvent("warehouseDataChanged"));
            return { success: true };
        } catch (e) {
            return { success: false, error: e.message };
        }
    },

    resetDatabase() {
        localStorage.removeItem("warehouse_materials");
        localStorage.removeItem("warehouse_transactions");
        localStorage.removeItem("warehouse_users");
        localStorage.removeItem("warehouse_current_user");
        localStorage.removeItem("warehouse_logs");
        this.init();
        window.dispatchEvent(new CustomEvent("warehouseDataChanged"));
    }
};

// Initialize DB immediately
AppDB.init();
