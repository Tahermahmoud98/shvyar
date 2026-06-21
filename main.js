/**
 * Main Application Orchestrator - App
 * Binds UI components, handles event listeners, search/sort algorithms, and manages state updates.
 */
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => App.init());
} else {
    App.init();
}

const App = {
    // Chart instances
    charts: {
        categoryShare: null,
        monthlyFinance: null
    },

    state: {
        currentTab: "portal", // portal, dashboard, storage, output, alerts, config
        storageView: "portal",   // portal, table
        storageCategory: "all",  // all or specific category key
        dashboardView: "portal", // portal, details
        dashboardCategory: "all",
        outputView: "portal",    // portal, table
        outputCategory: "all",
        searchQuery: "",
        sortBy: "date-desc",     // name-asc, name-desc, qty-asc, qty-desc, value-asc, value-desc, date-asc, date-desc
        filterStatus: "all",     // all, active, archived
        editingMaterialId: null
    },

    init() {
        // Initialize DB, storage & triggers
        this.bindEvents();
        this.loadUsers();
        this.updateThemeUI();
        
        // Render initial data
        this.renderAll();
        
        // Display portal or initial active tab
        this.switchTab(this.state.currentTab);
        
        // Display initial welcome log if new
        console.log("Building materials management system initialized.");
    },

    bindEvents() {
        // Sidebar Toggles & Navigation
        document.querySelectorAll("[data-tab]").forEach(el => {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                const tab = el.getAttribute("data-tab");
                this.switchTab(tab);
            });
        });

        const sidebarToggleBtn = document.getElementById("sidebar-toggle");
        if (sidebarToggleBtn) {
            sidebarToggleBtn.addEventListener("click", () => {
                document.getElementById("sidebar").classList.toggle("collapsed");
                document.getElementById("main-content").classList.toggle("expanded");
            });
        }

        // Theme Toggle
        document.getElementById("theme-toggle").addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("warehouse_theme", newTheme);
            this.updateThemeUI();
            
            // Re-render charts for theme compatibility
            this.renderCharts();
        });

        // Global DB updates listener
        window.addEventListener("warehouseDataChanged", () => {
            this.renderAll();
        });
        window.addEventListener("warehouseLogsChanged", () => {
            this.renderLogs();
        });
        window.addEventListener("languageChanged", () => {
            this.renderAll();
        });
        window.addEventListener("currentUserChanged", (e) => {
            // User display removed
            document.getElementById("user-select").value = e.detail.user;
        });

        // Category tab selector in Storage
        document.querySelectorAll("[data-storage-cat]").forEach(el => {
            el.addEventListener("click", (e) => {
                e.preventDefault();
                document.querySelectorAll("[data-storage-cat]").forEach(btn => btn.classList.remove("active"));
                el.classList.add("active");
                this.state.storageCategory = el.getAttribute("data-storage-cat");
                this.renderMaterialsTable();
            });
        });

        // Transaction Type Filter toggle
        document.querySelectorAll('input[name="txTypeFilter"]').forEach(el => {
            el.addEventListener("change", () => {
                this.renderTransactionsTable();
            });
        });

        // Search & Sorters in Storage
        document.getElementById("search-input").addEventListener("input", (e) => {
            this.state.searchQuery = e.target.value.toLowerCase();
            this.renderMaterialsTable();
        });

        document.getElementById("sort-select").addEventListener("change", (e) => {
            this.state.sortBy = e.target.value;
            this.renderMaterialsTable();
        });

        document.getElementById("archive-filter").addEventListener("change", (e) => {
            this.state.filterStatus = e.target.value;
            this.renderMaterialsTable();
        });

        // Forms Actions
        // 1. Add Material Form
        const addMaterialForm = document.getElementById("add-material-form");
        if (addMaterialForm) {
            addMaterialForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const formData = new FormData(addMaterialForm);
                const data = Object.fromEntries(formData.entries());
                
                AppStorage.addMaterial(data);
                
                // Hide modal and reset form
                const modalEl = document.getElementById("addMaterialModal");
                const modal = bootstrap.Modal.getInstance(modalEl);
                modal.hide();
                addMaterialForm.reset();
                this.showToast(typeof t === 'function' ? t('success') : "تمت إضافة المادة بنجاح للمخزون!", "success");
            });
            
            // Auto sum helper in add form
            const qtyInput = document.getElementById("add_quantity");
            const priceInput = document.getElementById("add_unitPrice");
            const totalDisplay = document.getElementById("add_totalPrice_display");
            
            const updateAddTotal = () => {
                const qty = parseFloat(qtyInput.value) || 0;
                const price = parseFloat(priceInput.value) || 0;
                totalDisplay.value = (qty * price).toLocaleString() + " د.ع";
            };
            qtyInput.addEventListener("input", updateAddTotal);
            priceInput.addEventListener("input", updateAddTotal);
            
            // Auto-select category based on current storage category view
            const addMaterialModalEl = document.getElementById("addMaterialModal");
            if (addMaterialModalEl) {
                addMaterialModalEl.addEventListener("show.bs.modal", () => {
                    const addCategorySelect = document.getElementById("add_category");
                    if (App.state.storageCategory && App.state.storageCategory !== "all") {
                        addCategorySelect.value = App.state.storageCategory;
                    } else {
                        addCategorySelect.value = "";
                    }
                });
            }
        }

        // 2. Edit Material Form
        const editMaterialForm = document.getElementById("edit-material-form");
        if (editMaterialForm) {
            editMaterialForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const formData = new FormData(editMaterialForm);
                const data = Object.fromEntries(formData.entries());
                
                if (this.state.editingMaterialId) {
                    AppStorage.updateMaterial(this.state.editingMaterialId, data);
                    
                    const modalEl = document.getElementById("editMaterialModal");
                    const modal = bootstrap.Modal.getInstance(modalEl);
                    modal.hide();
                    editMaterialForm.reset();
                    this.state.editingMaterialId = null;
                    this.showToast(typeof t === 'function' ? t('success') : "تم تعديل بيانات المادة بنجاح!", "success");
                }
            });

            // Auto sum helper in edit form
            const qtyInput = document.getElementById("edit_quantity");
            const priceInput = document.getElementById("edit_unitPrice");
            const totalDisplay = document.getElementById("edit_totalPrice_display");
            
            const updateEditTotal = () => {
                const qty = parseFloat(qtyInput.value) || 0;
                const price = parseFloat(priceInput.value) || 0;
                totalDisplay.value = (qty * price).toLocaleString() + " د.ع";
            };
            qtyInput.addEventListener("input", updateEditTotal);
            priceInput.addEventListener("input", updateEditTotal);
        }

        // 3. Issue Material Form
        const issueMaterialForm = document.getElementById("issue-material-form");
        if (issueMaterialForm) {
            issueMaterialForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const formData = new FormData(issueMaterialForm);
                const data = Object.fromEntries(formData.entries());
                
                const result = AppOutput.issueMaterial({
                    materialId: data.materialId,
                    quantity: data.quantity,
                    operatorName: data.operatorName,
                    delivererName: data.delivererName,
                    reason: data.reason,
                    companyName: data.companyName,
                    deliveryCost: data.deliveryCost,
                    returnInvoiceNumber: data.returnInvoiceNumber
                });

                if (result.success) {
                    const modalEl = document.getElementById("issueMaterialModal");
                    const modal = bootstrap.Modal.getInstance(modalEl);
                    modal.hide();
                    issueMaterialForm.reset();
                    this.showToast(typeof t === 'function' ? t('success') : "تم تسجيل حركة صرف المادة بنجاح وتحديث المخزون!", "success");
                } else {
                    alert(result.error);
                }
            });

            // Toggle return fields based on reason dropdown
            const reasonSelect = document.getElementById("issue_reason");
            const returnFields = document.getElementById("return-only-fields");
            reasonSelect.addEventListener("change", (e) => {
                if (e.target.value === "return") {
                    returnFields.classList.remove("d-none");
                    document.getElementById("issue_companyName").required = true;
                    document.getElementById("issue_returnInvoice").required = true;
                } else {
                    returnFields.classList.add("d-none");
                    document.getElementById("issue_companyName").required = false;
                    document.getElementById("issue_returnInvoice").required = false;
                }
            });

            // Dynamic unit and stock warnings helper in issue modal
            const matSelect = document.getElementById("issue_materialId");
            const issueMaxLabel = document.getElementById("issue_max_available");
            const issueQtyInput = document.getElementById("issue_quantity");

            matSelect.addEventListener("change", (e) => {
                const materials = AppDB.getMaterials();
                const mat = materials.find(m => m.id === e.target.value);
                if (mat) {
                    issueMaxLabel.textContent = `الكمية المتوفرة: ${mat.quantity} ${mat.unit} | السعر للوحدة: ${mat.unitPrice.toLocaleString()} د.ع`;
                    issueQtyInput.max = mat.quantity;
                } else {
                    issueMaxLabel.textContent = "";
                }
            });
        }

        // Multi-User triggers
        document.getElementById("user-select").addEventListener("change", (e) => {
            AppDB.setCurrentUser(e.target.value);
            this.showToast(`مرحباً ${e.target.value}! تم تفعيل الجلسة.`, "info");
        });

        document.getElementById("add-user-btn").addEventListener("click", () => {
            const input = document.getElementById("new-user-input");
            const name = input.value.trim();
            if (name) {
                if (AppDB.addUser(name)) {
                    this.loadUsers();
                    input.value = "";
                    this.showToast(`تمت إضافة المستخدم [${name}] للمنظومة`, "success");
                } else {
                    alert("المستخدم موجود بالفعل أو الاسم غير صالح!");
                }
            }
        });

        // Backup and Restore triggers
        document.getElementById("export-backup-btn").addEventListener("click", () => {
            const dataStr = AppDB.exportBackup();
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            
            const exportFileDefaultName = `نسخة_احتياطية_مخزن_شريكة_شڤیار_${new Date().toISOString().split('T')[0]}.json`;
            
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
            this.showToast("تم تصدير ملف النسخة الاحتياطية بنجاح!", "success");
        });

        document.getElementById("import-backup-file").addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (evt) => {
                const result = AppDB.importBackup(evt.target.result);
                if (result.success) {
                    this.showToast("تمت استعادة البيانات بنجاح تام!", "success");
                    e.target.value = ""; // Reset
                } else {
                    alert("خطأ في استعادة النسخة الاحتياطية: " + result.error);
                }
            };
            reader.readAsText(file);
        });

        document.getElementById("reset-db-btn").addEventListener("click", () => {
            if (confirm("تحذير: هل أنت متأكد من رغبتك في حذف كافة البيانات وتصفير قاعدة البيانات؟ لا يمكن التراجع عن هذا الإجراء.")) {
                AppDB.resetDatabase();
                this.showToast("تم مسح كافة البيانات وإعادة ضبط المصنع بنجاح.", "warning");
            }
        });

        // Excel overall downloads
        document.getElementById("excel-export-all").addEventListener("click", () => {
            AppPrint.exportExcel("all");
        });

        document.getElementById("excel-export-tx").addEventListener("click", () => {
            AppPrint.exportTransactionsExcel();
        });

        // Print and PDF overall
        document.getElementById("print-all-btn").addEventListener("click", () => {
            AppPrint.printAllCategories();
        });

        document.getElementById("print-all-individual-btn").addEventListener("click", () => {
            AppPrint.printAllMaterialInvoices("all");
        });

        document.getElementById("print-tx-btn").addEventListener("click", () => {
            AppPrint.printTransactions();
        });

        // Storage Sub-portal card clicks
        document.querySelectorAll("[data-storage-cat-card]").forEach(el => {
            el.addEventListener("click", () => {
                const cat = el.getAttribute("data-storage-cat-card");
                this.state.storageCategory = cat;
                
                // Update active tab styling in table view quick selector
                document.querySelectorAll("[data-storage-cat]").forEach(btn => {
                    if (btn.getAttribute("data-storage-cat") === cat) {
                        btn.classList.add("active");
                    } else {
                        btn.classList.remove("active");
                    }
                });
                
                this.switchStorageView("table");
            });
        });

        // Storage Sub-portal back button click
        const backToCatBtn = document.getElementById("back-to-categories-btn");
        if (backToCatBtn) {
            backToCatBtn.addEventListener("click", () => {
                this.switchStorageView("portal");
            });
        }

        // Dashboard Sub-portal card clicks
        document.querySelectorAll("[data-dashboard-cat-card]").forEach(el => {
            el.addEventListener("click", () => {
                const cat = el.getAttribute("data-dashboard-cat-card");
                this.state.dashboardCategory = cat;
                this.switchDashboardView("details");
            });
        });

        // Dashboard Sub-portal back button click
        const backToDashCatBtn = document.getElementById("back-to-dashboard-categories-btn");
        if (backToDashCatBtn) {
            backToDashCatBtn.addEventListener("click", () => {
                this.switchDashboardView("portal");
            });
        }

        // Output Sub-portal card clicks
        document.querySelectorAll("[data-output-cat-card]").forEach(el => {
            el.addEventListener("click", () => {
                const cat = el.getAttribute("data-output-cat-card");
                this.state.outputCategory = cat;
                this.switchOutputView("table");
            });
        });

        // Output Sub-portal back button click
        const backToOutCatBtn = document.getElementById("back-to-output-categories-btn");
        if (backToOutCatBtn) {
            backToOutCatBtn.addEventListener("click", () => {
                this.switchOutputView("portal");
            });
        }

        // Custom unit selection toggles
        const setupCustomUnitToggle = (selectId, customInputId) => {
            const selectEl = document.getElementById(selectId);
            const customInputEl = document.getElementById(customInputId);
            if (!selectEl || !customInputEl) return;

            selectEl.addEventListener("change", () => {
                if (selectEl.value === "custom") {
                    customInputEl.classList.remove("d-none");
                    customInputEl.required = true;
                    customInputEl.focus();
                } else {
                    customInputEl.classList.add("d-none");
                    customInputEl.required = false;
                    customInputEl.value = "";
                }
            });
        };
        setupCustomUnitToggle("add_unit", "add_unit_custom");
        setupCustomUnitToggle("edit_unit", "edit_unit_custom");

        // Handle form resets to hide custom fields
        const addForm = document.getElementById("add-material-form");
        if (addForm) {
            addForm.addEventListener("reset", () => {
                const customInputEl = document.getElementById("add_unit_custom");
                if (customInputEl) {
                    customInputEl.classList.add("d-none");
                    customInputEl.required = false;
                }
            });
        }
        const editForm = document.getElementById("edit-material-form");
        if (editForm) {
            editForm.addEventListener("reset", () => {
                const customInputEl = document.getElementById("edit_unit_custom");
                if (customInputEl) {
                    customInputEl.classList.add("d-none");
                    customInputEl.required = false;
                }
            });
        }
    },

    switchTab(tab) {
        this.state.currentTab = tab;
        
        // 1. Hide all sections, and show only the active one
        const sections = ["portal", "dashboard", "storage", "output", "alerts", "config"];
        sections.forEach(s => {
            const secEl = document.getElementById(`section-${s}`);
            if (secEl) {
                if (s === tab) {
                    secEl.classList.remove("d-none");
                } else {
                    secEl.classList.add("d-none");
                }
            }
        });

        // 2. Toggle active state in the navigation links
        document.querySelectorAll("[data-tab]").forEach(el => {
            if (el.getAttribute("data-tab") === tab) {
                el.classList.add("active");
            } else {
                el.classList.remove("active");
            }
        });

        // 3. Handle navbar visibility & back button
        const headerNav = document.querySelector(".header-nav-scroll");
        const backBtn = document.getElementById("back-to-portal-btn");
        if (tab === "portal") {
            if (headerNav) {
                headerNav.classList.remove("d-flex");
                headerNav.classList.add("d-none");
            }
            if (backBtn) backBtn.classList.add("d-none");
        } else {
            if (headerNav) {
                headerNav.classList.remove("d-none");
                headerNav.classList.add("d-flex");
            }
            if (backBtn) backBtn.classList.remove("d-none");
        }

        // 4. Force rendering for specific visible sections and reset view to portals
        if (tab === "dashboard") {
            this.switchDashboardView("portal");
        } else if (tab === "storage") {
            this.switchStorageView("portal");
        } else if (tab === "output") {
            this.switchOutputView("portal");
        } else if (tab === "alerts") {
            this.renderAlerts();
        } else if (tab === "config") {
            this.renderLogs();
        }

        // Scroll to top of window on tab switch
        window.scrollTo(0, 0);
    },

    initScrollSpy() {
        // Redundant with visibility toggling, disabled.
    },

    switchStorageView(view) {
        this.state.storageView = view;
        const portalEl = document.getElementById("storage-categories-portal");
        const tableContainerEl = document.getElementById("storage-table-container");
        const backBtn = document.getElementById("back-to-categories-btn");
        const printCategoryBtn = document.getElementById("print-category-btn");
        const excelCategoryBtn = document.getElementById("excel-category-btn");
        const printCategoryIndBtn = document.getElementById("print-category-individual-btn");
        const printDivider = document.getElementById("print-category-divider");

        if (view === "portal") {
            if (portalEl) portalEl.classList.remove("d-none");
            if (tableContainerEl) tableContainerEl.classList.add("d-none");
            if (backBtn) backBtn.classList.add("d-none");
            
            if (printCategoryBtn) printCategoryBtn.classList.add("d-none");
            if (excelCategoryBtn) excelCategoryBtn.classList.add("d-none");
            if (printCategoryIndBtn) printCategoryIndBtn.classList.add("d-none");
            if (printDivider) printDivider.classList.add("d-none");
            
            this.state.storageCategory = "all";
            this.renderStoragePortalCounters();
        } else {
            if (portalEl) portalEl.classList.add("d-none");
            if (tableContainerEl) tableContainerEl.classList.remove("d-none");
            if (backBtn) backBtn.classList.remove("d-none");
            
            if (printCategoryBtn) printCategoryBtn.classList.remove("d-none");
            if (excelCategoryBtn) excelCategoryBtn.classList.remove("d-none");
            if (printCategoryIndBtn) printCategoryIndBtn.classList.remove("d-none");
            if (printDivider) printDivider.classList.remove("d-none");
            
            this.renderMaterialsTable();
        }
    },

    switchDashboardView(view) {
        this.state.dashboardView = view;
        const portalEl = document.getElementById("dashboard-categories-portal");
        const detailsContainerEl = document.getElementById("dashboard-details-container");
        const summaryTableEl = document.getElementById("dashboard-summary-table-container");
        const backBtn = document.getElementById("back-to-dashboard-categories-btn");
        const printBtn = document.getElementById("print-dashboard-cat-btn");
        const excelBtn = document.getElementById("excel-dashboard-cat-btn");

        if (view === "portal") {
            if (portalEl) portalEl.classList.remove("d-none");
            if (summaryTableEl) summaryTableEl.classList.remove("d-none");
            if (detailsContainerEl) detailsContainerEl.classList.add("d-none");
            if (backBtn) backBtn.classList.add("d-none");
            if (printBtn) printBtn.classList.add("d-none");
            if (excelBtn) excelBtn.classList.add("d-none");
            
            this.state.dashboardCategory = "all";
            this.renderDashboardPortalCounters();
            this.renderDashboardSummaryTable();
        } else {
            if (portalEl) portalEl.classList.add("d-none");
            if (summaryTableEl) summaryTableEl.classList.add("d-none");
            if (detailsContainerEl) detailsContainerEl.classList.remove("d-none");
            if (backBtn) backBtn.classList.remove("d-none");
            if (printBtn) printBtn.classList.remove("d-none");
            if (excelBtn) excelBtn.classList.remove("d-none");
            
            this.renderCategoryDetailTable(this.state.dashboardCategory);
        }
    },

    switchOutputView(view) {
        this.state.outputView = view;
        const portalEl = document.getElementById("output-categories-portal");
        const tableContainerEl = document.getElementById("output-table-container");
        const backBtn = document.getElementById("back-to-output-categories-btn");

        if (view === "portal") {
            if (portalEl) portalEl.classList.remove("d-none");
            if (tableContainerEl) tableContainerEl.classList.add("d-none");
            if (backBtn) backBtn.classList.add("d-none");
            
            this.state.outputCategory = "all";
            this.renderOutputPortalCounters();
        } else {
            if (portalEl) portalEl.classList.add("d-none");
            if (tableContainerEl) tableContainerEl.classList.remove("d-none");
            if (backBtn) backBtn.classList.remove("d-none");
            
            this.renderTransactionsTable();
        }
    },

    // Render the per-category detail table in dashboard
    renderCategoryDetailTable(category) {
        const categoryMeta = {
            electrical: { name: "مواد كهربائية",       icon: "fa-bolt-lightning",  colorClass: "sp-icon-yellow" },
            plumbing:   { name: "مواد مجاري",          icon: "fa-faucet-drip",    colorClass: "sp-icon-blue"   },
            steel:      { name: "مواد حديد",           icon: "fa-cubes",          colorClass: "sp-icon-orange" },
            tiles:      { name: "بلاط وكاشي وسيراميك",icon: "fa-table-cells",    colorClass: "sp-icon-cyan"   },
            gypsum:     { name: "جبسن بورد",           icon: "fa-border-all",     colorClass: "sp-icon-purple" },
            cement:     { name: "إسمنت",               icon: "fa-fill-drip",     colorClass: "sp-icon-bronze" },
            paint:      { name: "دهان وطلاء",          icon: "fa-paint-roller",  colorClass: "sp-icon-pink"   },
            interior:   { name: "أبواب ونوافذ",        icon: "fa-door-open",     colorClass: "sp-icon-green"  },
            supplies:   { name: "مستلزمات يومية",      icon: "fa-toolbox",       colorClass: "sp-icon-gray"   }
        };

        const meta = categoryMeta[category] || { name: category, icon: "fa-boxes-stacked", colorClass: "sp-icon-gray" };
        const materials = AppDB.getMaterials().filter(m => m.category === category);
        const transactions = AppDB.getTransactions().filter(t => t.category === category);

        // Update title bar
        const iconWrap = document.getElementById("dash-cat-icon-wrap");
        if (iconWrap) {
            iconWrap.className = `storage-portal-icon ${meta.colorClass}`;
            iconWrap.style.cssText = "width:46px;height:46px;font-size:1.2rem;flex-shrink:0;";
            iconWrap.innerHTML = `<i class="fa-solid ${meta.icon}"></i>`;
        }
        const titleEl = document.getElementById("dash-cat-title");
        if (titleEl) titleEl.textContent = `إحصائيات قسم: ${meta.name}`;

        // Compute per-material issued qty
        const issuedMap = {};
        transactions
            .filter(t => t.type === "out" || t.type === "return")
            .forEach(t => {
                issuedMap[t.materialId] = (issuedMap[t.materialId] || 0) + t.quantity;
            });

        // Compute per-material total purchases
        const purchaseMap = {};
        transactions
            .filter(t => t.type === "in")
            .forEach(t => {
                purchaseMap[t.materialId] = (purchaseMap[t.materialId] || 0) + t.totalPrice + (t.deliveryCost || 0);
            });

        // Totals
        const activeMaterials = materials.filter(m => !m.archived);
        const totalCount   = activeMaterials.length;
        const totalValue   = activeMaterials.reduce((s, m) => s + m.quantity * m.unitPrice, 0);
        const totalIssued  = activeMaterials.reduce((s, m) => s + (issuedMap[m.id] || 0), 0);
        const totalPurchase = materials.reduce((s, m) => s + (purchaseMap[m.id] || 0), 0);

        // Update summary badges
        const countEl  = document.getElementById("dash-cat-count");
        const valueEl  = document.getElementById("dash-cat-value");
        const issuedEl = document.getElementById("dash-cat-issued");
        if (countEl)  countEl.textContent  = totalCount;
        if (valueEl)  valueEl.textContent  = totalValue.toLocaleString();
        if (issuedEl) issuedEl.textContent = totalIssued.toLocaleString();

        // Build table rows
        const tbody = document.getElementById("dashboard-cat-detail-tbody");
        const tfoot = document.getElementById("dashboard-cat-detail-tfoot");
        if (!tbody || !tfoot) return;

        tbody.innerHTML = "";

        if (materials.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="10" class="text-center py-5 text-muted">
                        <i class="fa-solid fa-box-open fs-2 mb-3 d-block text-secondary"></i>
                        لا توجد مواد مسجلة في هذا القسم بعد.
                    </td>
                </tr>`;
            tfoot.innerHTML = "";
            return;
        }

        materials.forEach((mat, idx) => {
            const currentValue = mat.quantity * mat.unitPrice;
            const issued       = issuedMap[mat.id] || 0;
            const purchased    = purchaseMap[mat.id] || 0;
            const statusBadge  = mat.archived
                ? `<span class="badge bg-secondary">مؤرشف</span>`
                : (mat.quantity === 0
                    ? `<span class="badge bg-danger">نفذت</span>`
                    : (mat.quantity <= mat.alertLimit
                        ? `<span class="badge bg-warning text-dark">شحيحة</span>`
                        : `<span class="badge bg-success">نشط</span>`));

            const tr = document.createElement("tr");
            if (mat.archived) tr.classList.add("table-secondary", "opacity-75");

            // Build print button using data attributes (safe with Arabic/special chars)
            const printBtn = document.createElement("button");
            printBtn.className = "btn btn-outline-dark btn-sm px-2 py-1";
            printBtn.title = "طباعة بيانات هذه المادة";
            printBtn.innerHTML = '<i class="fa-solid fa-print"></i>';
            printBtn.addEventListener("click", () => {
                App.printSingleMaterial({
                    name: mat.name, qty: mat.quantity, unit: mat.unit,
                    unitPrice: mat.unitPrice, currentValue,
                    purchased, issued,
                    status: mat.archived ? "مؤرشف" : (mat.quantity === 0 ? "نفذت" : (mat.quantity <= mat.alertLimit ? "شحيحة" : "نشط")),
                    category: meta.name
                });
            });

            tr.innerHTML = `
                <td class="text-muted small">${idx + 1}</td>
                <td class="text-start fw-semibold">${mat.name}</td>
                <td class="fw-bold text-secondary">${mat.initialQuantity.toLocaleString()}</td>
                <td class="fw-bold">${mat.quantity.toLocaleString()}</td>
                <td class="text-muted">${mat.unit}</td>
                <td>${mat.unitPrice.toLocaleString()} د.ع</td>
                <td class="fw-bold text-success">${currentValue.toLocaleString()} د.ع</td>
                <td class="text-primary">${purchased.toLocaleString()} د.ع</td>
                <td class="text-warning-emphasis fw-semibold">${issued.toLocaleString()}</td>
                <td>${statusBadge}</td>
                <td></td>
            `;
            tr.querySelector("td:last-child").appendChild(printBtn);
            tbody.appendChild(tr);
        });

        // Footer totals row
        tfoot.innerHTML = `
            <tr>
                <td></td>
                <td class="text-start">المجموع الإجمالي</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
                <td class="text-success">${totalValue.toLocaleString()} د.ع</td>
                <td class="text-primary">${totalPurchase.toLocaleString()} د.ع</td>
                <td class="text-warning-emphasis">${totalIssued.toLocaleString()}</td>
                <td><span class="badge bg-dark">${totalCount} صنف نشط</span></td>
                <td></td>
            </tr>`;
    },

    // --- Print & Export for Category Stats ---

    printSingleMaterial(mat) {
        const printDate = new Date().toLocaleDateString('ar-EG', { year:'numeric', month:'long', day:'numeric' });
        const win = window.open("", "_blank");
        win.document.write(`
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="UTF-8">
    <title>بطاقة مادة: ${mat.name}</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Segoe UI', Tahoma, Arial, sans-serif; direction: rtl; color: #1e293b; padding: 30px; font-size: 14px; max-width: 800px; margin: 0 auto; }
        .unified-invoice-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; text-align: center; direction: rtl; }
        .unified-invoice-table th, .unified-invoice-table td { border: 1px solid #cbd5e1; padding: 12px; vertical-align: middle; }
        .unified-invoice-table th { background-color: #0f172a !important; color: #ffffff !important; font-weight: 700; }
        .unified-invoice-table td { background-color: #ffffff; color: #1e293b; font-weight: 600; }
        
        .vertical-info-table { width: 100%; border-collapse: separate; border-spacing: 0; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 25px; direction: rtl; }
        .vertical-info-table tr:not(:last-child) th, .vertical-info-table tr:not(:last-child) td { border-bottom: 1px solid #e2e8f0; }
        .vertical-info-table th { background-color: #f8fafc !important; color: #64748b !important; font-weight: 600; padding: 16px 24px; text-align: right; width: 35%; border-left: 1px solid #e2e8f0; font-size: 15px; }
        .vertical-info-table td { background-color: #ffffff; color: #0f172a; font-weight: 700; padding: 16px 24px; text-align: right; width: 65%; font-size: 16px; }
        .vertical-info-table .highlight-row th { background-color: #eff6ff !important; color: #1d4ed8 !important; }
        .vertical-info-table .highlight-row td { background-color: #f8fafc; color: #1d4ed8; font-size: 20px; font-weight: 800; }
        .header { text-align: center; margin-bottom: 28px; padding-bottom: 16px; border-bottom: 3px solid #0f172a; }
        .header h1 { font-size: 22px; color: #0f172a; margin-bottom: 6px; }
        .header .cat { color: #f97316; font-weight: 700; font-size: 14px; }
        .header .date { color: #94a3b8; font-size: 12px; margin-top: 4px; }
        .footer { text-align: center; color: #94a3b8; font-size: 11px; margin-top: 20px; }
        .signature-area { display: flex; justify-content: space-between; margin-top: 50px; }
        .signature-box { flex: 1; text-align: center; border-top: 1px dashed #cbd5e1; margin: 0 20px; padding-top: 10px; font-weight: 700; }
        @media print {
            body { padding: 10px; padding-bottom: 120px !important; }
            .signature-area { position: fixed; bottom: 20px; left: 0; right: 0; width: 100%; page-break-inside: avoid; }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>${mat.name}</h1>
        <div class="cat">القسم: ${mat.category}</div>
        <div class="date">تاريخ الطباعة: ${printDate}</div>
    </div>
    <table class="vertical-info-table">
        <tbody>
            <tr><th>الكمية الحالية</th><td>${Number(mat.qty).toLocaleString()} <span style="color:#64748b;font-weight:600;font-size:14px">${mat.unit}</span></td></tr>
            <tr><th>سعر الوحدة</th><td>${Number(mat.unitPrice).toLocaleString()} <span style="color:#64748b;font-weight:600;font-size:14px">د.ع</span></td></tr>
            <tr class="highlight-row"><th>قيمة المخزون الحالي</th><td>${Number(mat.currentValue).toLocaleString()} <span style="font-size:16px">د.ع</span></td></tr>
            <tr><th>إجمالي المشتريات</th><td>${Number(mat.purchased).toLocaleString()} <span style="color:#64748b;font-weight:600;font-size:14px">د.ع</span></td></tr>
            <tr><th>الكمية المصروفة</th><td>${Number(mat.issued).toLocaleString()} <span style="color:#64748b;font-weight:600;font-size:14px">${mat.unit}</span></td></tr>
            <tr><th>الحالة</th><td><span style="padding:4px 10px; border-radius:6px; background:${mat.status === 'مؤرشفة' ? '#fef2f2' : '#f0fdf4'}; color:${mat.status === 'مؤرشفة' ? '#ef4444' : '#16a34a'}; font-size:13px;">${mat.status}</span></td></tr>
        </tbody>
    </table>
    <div class="signature-area">
        <div class="signature-box">المستلم الفني</div>
        <div class="signature-box">أمين المخزن</div>
        <div class="signature-box">مدير المشروع</div>
    </div>
    <div class="footer">نظام شريكة شڤیار • إدارة مخازن مواد البناء والمشاريع الإنشائية</div>
    <script>setTimeout(() => window.print(), 300);</script>
</body>
</html>`);
        win.document.close();
    },

    // Print all 9 categories in one comprehensive report
    printAllCategoriesStats() {
        const categoryKeys = ["electrical","plumbing","steel","tiles","gypsum","cement","paint","interior","supplies"];
        const categoryNames = {
            electrical: "مواد كهربائية", plumbing: "مواد مجاري",
            steel: "مواد حديد", tiles: "بلاط وكاشي وسيراميك",
            gypsum: "جبسن بورد", cement: "إسمنت",
            paint: "دهان وطلاء", interior: "أبواب ونوافذ",
            supplies: "مستلزمات يومية"
        };
        const allMaterials    = AppDB.getMaterials();
        const allTransactions = AppDB.getTransactions();
        const printDate = new Date().toLocaleDateString('ar-EG', { year:'numeric', month:'long', day:'numeric' });

        let sectionsHTML = "";
        let grandTotalValue = 0, grandTotalPurchase = 0, grandTotalIssued = 0, grandTotalCount = 0;

        categoryKeys.forEach(cat => {
            const materials    = allMaterials.filter(m => m.category === cat);
            const transactions = allTransactions.filter(t => t.category === cat);
            if (materials.length === 0) return;

            const issuedMap = {}, purchaseMap = {};
            transactions.filter(t => t.type === "out" || t.type === "return")
                .forEach(t => { issuedMap[t.materialId] = (issuedMap[t.materialId] || 0) + t.quantity; });
            transactions.filter(t => t.type === "in")
                .forEach(t => { purchaseMap[t.materialId] = (purchaseMap[t.materialId] || 0) + t.totalPrice + (t.deliveryCost || 0); });

            const active = materials.filter(m => !m.archived);
            const secValue    = active.reduce((s, m) => s + m.quantity * m.unitPrice, 0);
            const secIssued   = active.reduce((s, m) => s + (issuedMap[m.id] || 0), 0);
            const secPurchase = materials.reduce((s, m) => s + (purchaseMap[m.id] || 0), 0);
            grandTotalValue += secValue; grandTotalPurchase += secPurchase;
            grandTotalIssued += secIssued; grandTotalCount += active.length;

            let rows = "";
            materials.forEach((mat, i) => {
                const val = mat.quantity * mat.unitPrice;
                const issued = issuedMap[mat.id] || 0;
                const purchased = purchaseMap[mat.id] || 0;
                const st = mat.archived ? "مؤرشف" : (mat.quantity === 0 ? "نفذت" : (mat.quantity <= mat.alertLimit ? "شحيحة" : "نشط"));
                rows += `<tr><td>${i+1}</td><td style="text-align:right">${mat.name}</td><td>${mat.quantity.toLocaleString()}</td><td>${mat.unit}</td><td>${mat.unitPrice.toLocaleString()}</td><td>${val.toLocaleString()}</td><td>${purchased.toLocaleString()}</td><td>${issued.toLocaleString()}</td><td>${st}</td></tr>`;
            });

            sectionsHTML += `
                <div class="section">
                    <div class="section-title">${categoryNames[cat]}
                        <span class="section-summary">${active.length} صنف نشط &nbsp;|&nbsp; قيمة المخزون: ${secValue.toLocaleString()} د.ع</span>
                    </div>
                    <table class="unified-invoice-table">
                        <thead><tr class="sub-header"><th>#</th><th style="width: 25%;">اسم المادة</th><th>الكمية</th><th>الوحدة</th><th>سعر الوحدة</th><th>قيمة المخزون</th><th>المشتريات (د.ع)</th><th>المصروف</th><th>الحالة</th></tr></thead>
                        <tbody>${rows}</tbody>
                        <tfoot><tr class="footer-row"><td></td><td class="text-left-align" style="font-size: 1.1rem;">المجموع</td><td>—</td><td>—</td><td>—</td><td class="text-primary">${secValue.toLocaleString()} د.ع</td><td>${secPurchase.toLocaleString()} د.ع</td><td>${secIssued.toLocaleString()}</td><td>${active.length} صنف</td></tr></tfoot>
                    </table>
                </div>`;
        });

        const win = window.open("", "_blank");
        win.document.write(`
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="UTF-8">
    <title>تقرير إحصائيات جميع الأقسام - بناءتك</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Segoe UI', Tahoma, Arial, sans-serif; direction: rtl; color: #1e293b; padding: 20px; font-size: 12px; }
        .main-header { text-align: center; margin-bottom: 24px; padding-bottom: 14px; border-bottom: 3px solid #0f172a; }
        .main-header h1 { font-size: 20px; color: #0f172a; margin-bottom: 4px; }
        .main-header .sub { color: #64748b; font-size: 11px; }
        
        .unified-invoice-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; text-align: center; direction: rtl; }
        .unified-invoice-table th, .unified-invoice-table td { border: 1px solid #cbd5e1; padding: 10px; vertical-align: middle; }
        .unified-invoice-table th { background-color: #0f172a !important; color: #ffffff !important; font-weight: 700; }
        .unified-invoice-table td { background-color: #ffffff; color: #1e293b; font-weight: 600; }
        .unified-invoice-table .sub-header th { background-color: #0f172a !important; padding: 12px; }
        .unified-invoice-table .footer-row td { background-color: #f8fafc; font-weight: 700; }
        .text-left-align { text-align: left !important; padding-left: 20px !important; }

        .section { margin-bottom: 24px; page-break-inside: avoid; }
        .section-title { background: #f97316; color: #fff; padding: 8px 12px; font-size: 14px; font-weight: 700; border-radius: 6px 6px 0 0; display: flex; justify-content: space-between; align-items: center; }
        .section-summary { font-size: 12px; font-weight: 700; color: #fff; }
        .footer { margin-top: 16px; text-align: center; color: #94a3b8; font-size: 10px; }
        .signature-area { display: flex; justify-content: space-between; margin-top: 50px; }
        .signature-box { flex: 1; text-align: center; border-top: 1px dashed #cbd5e1; margin: 0 20px; padding-top: 10px; font-weight: 700; }
        @media print {
            body { padding: 8px; padding-bottom: 120px !important; }
            .section { page-break-inside: avoid; }
            .signature-area { position: fixed; bottom: 20px; left: 0; right: 0; width: 100%; page-break-inside: avoid; }
        }
    </style>
</head>
<body>
    <div class="main-header">
        <h1>تقرير إحصائيات جميع الأقسام</h1>
        <div class="sub">تاريخ الطباعة: ${printDate} &nbsp;|&nbsp; نظام شريكة شڤیار لإدارة مخازن مواد البناء</div>
    </div>
    
    <table class="unified-invoice-table mb-4">
        <tbody>
            <tr>
                <th style="width: 25%;">إجمالي الأصناف النشطة</th>
                <td style="width: 25%;">${grandTotalCount} صنف</td>
                <th style="width: 25%;">إجمالي قيمة المخزون</th>
                <td style="width: 25%; color: #16a34a;">${grandTotalValue.toLocaleString()} د.ع</td>
            </tr>
            <tr>
                <th>إجمالي المشتريات</th>
                <td style="color: #2563eb;">${grandTotalPurchase.toLocaleString()} د.ع</td>
                <th>إجمالي الكميات المصروفة</th>
                <td style="color: #ea580c;">${grandTotalIssued.toLocaleString()}</td>
            </tr>
        </tbody>
    </table>
    ${sectionsHTML}
    <div class="signature-area">
        <div class="signature-box">المستلم الفني</div>
        <div class="signature-box">أمين المخزن</div>
        <div class="signature-box">مدير المشروع</div>
    </div>
    <div class="footer">نظام شريكة شڤیار • إدارة مخازن مواد البناء والمشاريع الإنشائية</div>
    <script>setTimeout(() => window.print(), 300);</script>
</body>
</html>`);
        win.document.close();
    },

    printCategoryStats() {
        const cat = this.state.dashboardCategory;
        const categoryMeta = {
            electrical: "مواد كهربائية",
            plumbing:   "مواد مجاري",
            steel:      "مواد حديد",
            tiles:      "بلاط وكاشي وسيراميك",
            gypsum:     "جبسن بورد",
            cement:     "إسمنت",
            paint:      "دهان وطلاء",
            interior:   "أبواب ونوافذ",
            supplies:   "مستلزمات يومية"
        };
        const catName = categoryMeta[cat] || cat;
        const materials = AppDB.getMaterials().filter(m => m.category === cat);
        const transactions = AppDB.getTransactions().filter(t => t.category === cat);

        const issuedMap = {};
        const purchaseMap = {};
        transactions.filter(t => t.type === "out" || t.type === "return")
            .forEach(t => { issuedMap[t.materialId] = (issuedMap[t.materialId] || 0) + t.quantity; });
        transactions.filter(t => t.type === "in")
            .forEach(t => { purchaseMap[t.materialId] = (purchaseMap[t.materialId] || 0) + t.totalPrice + (t.deliveryCost || 0); });

        const activeMaterials = materials.filter(m => !m.archived);
        const totalValue    = activeMaterials.reduce((s, m) => s + m.quantity * m.unitPrice, 0);
        const totalIssued   = activeMaterials.reduce((s, m) => s + (issuedMap[m.id] || 0), 0);
        const totalPurchase = materials.reduce((s, m) => s + (purchaseMap[m.id] || 0), 0);

        let rows = "";
        materials.forEach((mat, i) => {
            const val      = mat.quantity * mat.unitPrice;
            const issued   = issuedMap[mat.id] || 0;
            const purchased = purchaseMap[mat.id] || 0;
            const statusTxt = mat.archived ? "مؤرشف" : (mat.quantity === 0 ? "نفذت" : (mat.quantity <= mat.alertLimit ? "شحيحة" : "نشط"));
            rows += `
                <tr>
                    <td>${i + 1}</td>
                    <td style="text-align:right">${mat.name}</td>
                    <td>${mat.quantity.toLocaleString()}</td>
                    <td>${mat.unit}</td>
                    <td>${mat.unitPrice.toLocaleString()} د.ع</td>
                    <td>${val.toLocaleString()} د.ع</td>
                    <td>${purchased.toLocaleString()} د.ع</td>
                    <td>${issued.toLocaleString()}</td>
                    <td>${statusTxt}</td>
                </tr>`;
        });

        const printDate = new Date().toLocaleDateString('ar-EG', { year:'numeric', month:'long', day:'numeric' });

        const win = window.open("", "_blank");
        win.document.write(`
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="UTF-8">
    <title>تقرير إحصائيات قسم: ${catName}</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Segoe UI', Tahoma, Arial, sans-serif; direction: rtl; color: #1e293b; padding: 24px; font-size: 13px; }
        .header { text-align: center; margin-bottom: 28px; padding-bottom: 16px; border-bottom: 3px solid #0f172a; }
        .header h1 { font-size: 20px; color: #0f172a; margin-bottom: 4px; }
        .header .sub { color: #64748b; font-size: 12px; }
        
        .unified-invoice-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; text-align: center; direction: rtl; }
        .unified-invoice-table th, .unified-invoice-table td { border: 1px solid #cbd5e1; padding: 12px; vertical-align: middle; }
        .unified-invoice-table th { background-color: #0f172a !important; color: #ffffff !important; font-weight: 700; }
        .unified-invoice-table td { background-color: #ffffff; color: #1e293b; font-weight: 600; }
        .unified-invoice-table .sub-header th { background-color: #0f172a !important; padding: 14px; }
        .unified-invoice-table .footer-row td { background-color: #f8fafc; font-weight: 700; }
        .text-left-align { text-align: left !important; padding-left: 20px !important; }

        .footer { margin-top: 20px; text-align: center; color: #94a3b8; font-size: 11px; }
        .signature-area { display: flex; justify-content: space-between; margin-top: 50px; }
        .signature-box { flex: 1; text-align: center; border-top: 1px dashed #cbd5e1; margin: 0 20px; padding-top: 10px; font-weight: 700; }
        @media print {
            body { padding: 10px; padding-bottom: 120px !important; }
            .signature-area { position: fixed; bottom: 20px; left: 0; right: 0; width: 100%; page-break-inside: avoid; }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>تقرير إحصائيات قسم: ${catName}</h1>
        <div class="sub">تاريخ الطباعة: ${printDate} &nbsp;|&nbsp; نظام شريكة شڤیار لإدارة مخازن مواد البناء</div>
    </div>
    
    <table class="unified-invoice-table mb-4">
        <tbody>
            <tr>
                <th style="width: 25%;">عدد الأصناف النشطة</th>
                <td style="width: 25%;">${activeMaterials.length} صنف</td>
                <th style="width: 25%;">قيمة المخزون الحالي</th>
                <td style="width: 25%; color: #16a34a;">${totalValue.toLocaleString()} د.ع</td>
            </tr>
            <tr>
                <th>إجمالي المشتريات</th>
                <td style="color: #2563eb;">${totalPurchase.toLocaleString()} د.ع</td>
                <th>إجمالي الكميات المصروفة</th>
                <td style="color: #ea580c;">${totalIssued.toLocaleString()}</td>
            </tr>
        </tbody>
    </table>

    <table class="unified-invoice-table">
        <thead>
            <tr class="sub-header">
                <th style="width:4%">#</th>
                <th style="width:23%;text-align:right">اسم المادة</th>
                <th style="width:10%">الكمية الحالية</th>
                <th style="width:7%">الوحدة</th>
                <th style="width:12%">سعر الوحدة</th>
                <th style="width:13%">قيمة المخزون</th>
                <th style="width:13%">إجمالي المشتريات</th>
                <th style="width:10%">كمية المصروف</th>
                <th style="width:8%">الحالة</th>
            </tr>
        </thead>
        <tbody>${rows}</tbody>
        <tfoot>
            <tr class="footer-row">
                <td colspan="5" class="text-left-align" style="font-size: 1.2rem;">المجموع</td>
                <td class="text-primary">${totalValue.toLocaleString()} د.ع</td>
                <td class="text-primary">${totalPurchase.toLocaleString()} د.ع</td>
                <td>${totalIssued.toLocaleString()}</td>
                <td>${activeMaterials.length} صنف</td>
            </tr>
        </tfoot>
    </table>
    <div class="signature-area">
        <div class="signature-box">المستلم الفني</div>
        <div class="signature-box">أمين المخزن</div>
        <div class="signature-box">مدير المشروع</div>
    </div>
    <div class="footer">نظام شريكة شڤیار • إدارة مخازن مواد البناء والمشاريع الإنشائية</div>
    <script>setTimeout(() => window.print(), 300);</script>
</body>
</html>`);
        win.document.close();
    },

    exportCategoryStatsExcel() {
        const cat = this.state.dashboardCategory;
        const categoryMeta = {
            electrical: "مواد كهربائية", plumbing: "مواد مجاري",
            steel: "مواد حديد", tiles: "بلاط وكاشي",
            gypsum: "جبسن بورد", cement: "إسمنت",
            paint: "دهان وطلاء", interior: "أبواب ونوافذ",
            supplies: "مستلزمات يومية"
        };
        const catName = categoryMeta[cat] || cat;
        const materials = AppDB.getMaterials().filter(m => m.category === cat);
        const transactions = AppDB.getTransactions().filter(t => t.category === cat);

        const issuedMap = {};
        const purchaseMap = {};
        transactions.filter(t => t.type === "out" || t.type === "return")
            .forEach(t => { issuedMap[t.materialId] = (issuedMap[t.materialId] || 0) + t.quantity; });
        transactions.filter(t => t.type === "in")
            .forEach(t => { purchaseMap[t.materialId] = (purchaseMap[t.materialId] || 0) + t.totalPrice + (t.deliveryCost || 0); });

        const BOM = "\uFEFF";
        const headers = ["رقم", "اسم المادة", "الكمية الحالية", "الوحدة", "سعر الوحدة", "قيمة المخزون (د.ع)", "إجمالي المشتريات (د.ع)", "كمية المصروف", "الحالة"];
        const rows = materials.map((mat, i) => {
            const val      = mat.quantity * mat.unitPrice;
            const issued   = issuedMap[mat.id] || 0;
            const purchased = purchaseMap[mat.id] || 0;
            const statusTxt = mat.archived ? "مؤرشف" : (mat.quantity === 0 ? "نفذت" : (mat.quantity <= mat.alertLimit ? "شحيحة" : "نشط"));
            return [i + 1, mat.name, mat.quantity, mat.unit, mat.unitPrice, val, purchased, issued, statusTxt];
        });

        const csvContent = BOM + [headers, ...rows].map(r => r.map(c => `"${c}"`).join(",")).join("\n");
        const link = document.createElement("a");
        link.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csvContent);
        link.download = `إحصائيات_قسم_${catName}_${new Date().toISOString().split('T')[0]}.csv`;
        link.click();
        this.showToast(`تم تصدير إحصائيات قسم ${catName} بنجاح!`, "success");
    },

    updateThemeUI() {
        const theme = document.documentElement.getAttribute("data-theme") || "light";
        const icon = document.querySelector("#theme-toggle i");
        if (theme === "dark") {
            icon.className = "fa-solid fa-sun fs-5";
        } else {
            icon.className = "fa-solid fa-moon fs-5";
        }
    },

    loadUsers() {
        const users = AppDB.getUsers();
        const select = document.getElementById("user-select");
        const currentUser = AppDB.getCurrentUser();

        select.innerHTML = "";
        users.forEach(u => {
            const opt = document.createElement("option");
            opt.value = u;
            opt.textContent = u;
            if (u === currentUser) opt.selected = true;
            select.appendChild(opt);
        });

        // User display removed
    },

    // Renders everything that needs updating on stock changes
    renderAll() {
        this.renderAlertsBadges();
        this.renderMaterialsTable();
        this.renderTransactionsTable();
        this.updateIssueModalDropdown();
        this.renderAlerts();
        this.renderLogs();
        this.renderStoragePortalCounters();
        this.renderDashboardPortalCounters();
        this.renderOutputPortalCounters();
        this.renderDashboardSummaryTable();
        
        // Auto translate after re-rendering all
        if (typeof autoTranslateDOM === 'function') {
            autoTranslateDOM(document.body);
        }
    },

    // Render item counts for Storage sub-portal categories
    renderStoragePortalCounters() {
        const materials = AppDB.getMaterials();
        const categories = ["electrical", "plumbing", "steel", "tiles", "gypsum", "cement", "paint", "interior", "supplies"];
        categories.forEach(cat => {
            const count = materials.filter(m => m.category === cat && !m.archived).length;
            const badge = document.getElementById(`count-${cat}`);
            if (badge) {
                badge.textContent = `${count} صنف نشط`;
            }
        });
    },

    // Render item counts for Dashboard sub-portal categories
    renderDashboardPortalCounters() {
        const materials = AppDB.getMaterials();
        const categories = ["electrical", "plumbing", "steel", "tiles", "gypsum", "cement", "paint", "interior", "supplies"];
        categories.forEach(cat => {
            const count = materials.filter(m => m.category === cat && !m.archived).length;
            const badge = document.getElementById(`db-count-${cat}`);
            if (badge) {
                badge.textContent = `${count} ${t('active_item_badge') || 'صنف نشط'}`;
            }
        });
    },

    // Render transaction counts for Output sub-portal categories
    renderOutputPortalCounters() {
        const transactions = AppDB.getTransactions();
        const categories = ["electrical", "plumbing", "steel", "tiles", "gypsum", "cement", "paint", "interior", "supplies"];
        categories.forEach(cat => {
            const count = transactions.filter(t => t.category === cat).length;
            const badge = document.getElementById(`output-count-${cat}`);
            if (badge) {
                badge.textContent = `${count} ${t('tx_badge') || 'حركة'}`;
            }
        });
    },

    // Render the comprehensive categories summary table in dashboard
    renderDashboardSummaryTable() {
        if (this.state.dashboardView !== "portal") return;

        const tbody = document.getElementById("dashboard-summary-table-body");
        if (!tbody) return;

        tbody.innerHTML = "";

        const categories = ["electrical", "plumbing", "steel", "tiles", "gypsum", "cement", "paint", "interior", "supplies"];
        const arabicCategoryNames = AppDB.CATEGORIES;

        // Custom icons matching style.css (sp-icon-yellow, sp-icon-blue, etc.)
        const categoryIcons = {
            electrical: "fa-bolt-lightning text-warning",
            plumbing: "fa-faucet-drip text-primary",
            steel: "fa-cubes text-danger",
            tiles: "fa-table-cells text-info",
            gypsum: "fa-border-all text-secondary",
            cement: "fa-fill-drip text-dark",
            paint: "fa-paint-roller text-success",
            interior: "fa-door-open text-success",
            supplies: "fa-toolbox text-muted"
        };

        categories.forEach(cat => {
            const stats = AppStatistics.calculate(cat);
            const arabicName = arabicCategoryNames[cat] || cat;
            const iconClass = categoryIcons[cat] || "fa-boxes-stacked";

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td class="text-start fw-bold">
                    <i class="fa-solid ${iconClass} me-2" style="font-size: 1.1rem; width: 24px; text-align: center;"></i>
                    ${arabicName}
                </td>
                <td>
                    <span class="badge bg-secondary-subtle text-secondary-emphasis px-3 py-2 fw-semibold" style="font-size: 0.85rem;">
                        ${stats.totalMaterialsCount} ${t('item_word') || 'صنف'}
                    </span>
                </td>
                <td>
                    <span class="fw-bold">${stats.totalCurrentQuantity.toLocaleString()}</span>
                </td>
                <td class="fw-bold text-success">
                    ${stats.totalInventoryValue.toLocaleString()} ${t('currency')}
                </td>
                <td class="fw-bold text-primary">
                    ${stats.totalExpenses.toLocaleString()} ${t('currency')}
                </td>
                <td class="fw-bold text-warning-emphasis">
                    ${stats.totalIssuedQuantity.toLocaleString()}
                </td>
                <td>
                    <button class="btn btn-sm btn-outline-warning font-cairo px-3" onclick="App.state.dashboardCategory='${cat}'; App.switchDashboardView('details');">
                        ${t('details_btn') || 'التفاصيل'} <i class="fa-solid fa-arrow-left ms-1 small"></i>
                    </button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    },

    // Live KPI stats rendering
    renderStatsCounters() {
        const cat = this.state.dashboardCategory || "all";
        const stats = AppStatistics.calculate(cat);
        
        // Counter widgets
        const countMatsEl = document.getElementById("stat-total-materials");
        const countValEl = document.getElementById("stat-total-value");
        const countExpEl = document.getElementById("stat-total-expenses");
        const countOutEl = document.getElementById("stat-total-issued");

        if (countMatsEl) countMatsEl.textContent = stats.totalMaterialsCount.toLocaleString();
        if (countValEl) countValEl.textContent = stats.totalInventoryValue.toLocaleString() + " د.ع";
        if (countExpEl) countExpEl.textContent = stats.totalExpenses.toLocaleString() + " د.ع";
        if (countOutEl) countOutEl.textContent = stats.totalIssuedQuantity.toLocaleString();

        // Dashboard detail breakdown stats
        const activeCount = document.getElementById("dash-active-count");
        const deliveryCosts = document.getElementById("dash-delivery-costs");
        const mostUsed = document.getElementById("dash-most-used");
        const leastUsed = document.getElementById("dash-least-used");
        const topSupplier = document.getElementById("dash-top-supplier");

        if (activeCount) activeCount.textContent = stats.totalMaterialsCount + " صنف نشط";
        if (deliveryCosts) deliveryCosts.textContent = stats.totalDeliveryCosts.toLocaleString() + " د.ع";
        if (mostUsed) mostUsed.textContent = stats.mostUsedMaterial;
        if (leastUsed) leastUsed.textContent = stats.leastUsedMaterial;
        if (topSupplier) topSupplier.textContent = stats.topSupplier;
    },

    renderAlertsBadges() {
        const alertStats = AppAlerts.getAlertStats();
        const badge = document.getElementById("alert-badge");
        const listBadge = document.getElementById("alert-list-badge");
        
        if (badge) {
            if (alertStats.total > 0) {
                badge.textContent = alertStats.total;
                badge.classList.remove("d-none");
            } else {
                badge.classList.add("d-none");
            }
        }
        
        if (listBadge) {
            if (alertStats.total > 0) {
                listBadge.textContent = `${alertStats.total} تنبيه نشط`;
                listBadge.className = "badge bg-danger rounded-pill px-2";
            } else {
                listBadge.textContent = "لا توجد تنبيهات";
                listBadge.className = "badge bg-success rounded-pill px-2";
            }
        }
    },

    // Chart.js render engine
    renderCharts() {
        if (this.state.currentTab !== "dashboard" || this.state.dashboardView === "portal") return;

        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        const gridColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)";
        const textColor = isDark ? "#cbd5e1" : "#475569";

        const cat = this.state.dashboardCategory || "all";

        // 1. Category Share Chart
        const shareData = AppStatistics.getCategoryShareData(cat);
        const ctxShare = document.getElementById("categoryShareChart");
        
        if (ctxShare) {
            if (this.charts.categoryShare) {
                this.charts.categoryShare.destroy();
            }

            if (shareData.labels.length === 0) {
                // Render empty state on canvas if no value
                const ctx = ctxShare.getContext("2d");
                ctx.clearRect(0,0,ctxShare.width, ctxShare.height);
                ctx.fillStyle = textColor;
                ctx.textAlign = "center";
                ctx.font = "14px 'Noto Kufi Arabic'";
                ctx.fillText("لا تتوفر مواد ذات قيمة لحساب النسب", ctxShare.width/2, ctxShare.height/2);
            } else {
                this.charts.categoryShare = new Chart(ctxShare, {
                    type: 'doughnut',
                    data: {
                        labels: shareData.labels,
                        datasets: [{
                            data: shareData.values,
                            backgroundColor: [
                                '#1e3a8a', // Dark blue
                                '#f97316', // Orange
                                '#06b6d4', // Cyan
                                '#10b981', // Emerald green
                                '#8b5cf6', // Violet
                                '#ec4899', // Pink
                                '#eab308', // Yellow
                                '#f43f5e', // Rose
                                '#64748b'  // Slate gray
                            ],
                            borderWidth: isDark ? 2 : 1,
                            borderColor: isDark ? '#0f172a' : '#ffffff'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'right',
                                labels: {
                                    font: { family: "'Noto Kufi Arabic'", size: 11 },
                                    color: textColor
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        let val = context.raw || 0;
                                        return ` ${context.label}: ${val.toLocaleString()} د.ع`;
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }

        // 2. Monthly Financial Flow Chart
        const flowData = AppStatistics.getTransactionMonthlyData(cat);
        const ctxFlow = document.getElementById("monthlyFinanceChart");

        if (ctxFlow) {
            if (this.charts.monthlyFinance) {
                this.charts.monthlyFinance.destroy();
            }

            this.charts.monthlyFinance = new Chart(ctxFlow, {
                type: 'bar',
                data: {
                    labels: flowData.labels,
                    datasets: [
                        {
                            label: 'إجمالي المشتريات والتوصيل (الوارد)',
                            data: flowData.expenses,
                            backgroundColor: 'rgba(30, 58, 138, 0.85)', // Dark Blue
                            borderColor: '#1e3a8a',
                            borderWidth: 1
                        },
                        {
                            label: 'إجمالي قيمة المواد المصروفة (الصادر)',
                            data: flowData.outputs,
                            backgroundColor: 'rgba(249, 115, 22, 0.85)', // Orange
                            borderColor: '#f97316',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                font: { family: "'Noto Kufi Arabic'", size: 11 },
                                color: textColor
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: { color: gridColor },
                            ticks: { font: { family: "'Noto Kufi Arabic'" }, color: textColor }
                        },
                        y: {
                            grid: { color: gridColor },
                            ticks: { 
                                font: { family: "'Noto Kufi Arabic'" }, 
                                color: textColor,
                                callback: function(value) {
                                    return value.toLocaleString() + ' د.ع';
                                }
                            }
                        }
                    }
                }
            });
            }
        },

    // Materials Grid rendering
    renderMaterialsTable() {
        if (this.state.currentTab !== "storage") return;

        const materials = AppDB.getMaterials();
        let list = [...materials];

        // 1. Category Filter
        if (this.state.storageCategory !== "all") {
            list = list.filter(m => m.category === this.state.storageCategory);
        }

        // 2. Active/Archived Filter
        if (this.state.filterStatus === "active") {
            list = list.filter(m => !m.archived);
        } else if (this.state.filterStatus === "archived") {
            list = list.filter(m => m.archived);
        }

        // 3. Search Filter
        if (this.state.searchQuery) {
            const q = this.state.searchQuery;
            list = list.filter(m => 
                m.name.toLowerCase().includes(q) ||
                m.companyName.toLowerCase().includes(q) ||
                m.buyerName.toLowerCase().includes(q) ||
                m.invoiceNumber.toLowerCase().includes(q)
            );
        }

        // 4. Sorting Algorithms
        list.sort((a, b) => {
            switch (this.state.sortBy) {
                case "name-asc":
                    return a.name.localeCompare(b.name, "ar");
                case "name-desc":
                    return b.name.localeCompare(a.name, "ar");
                case "qty-asc":
                    return a.quantity - b.quantity;
                case "qty-desc":
                    return b.quantity - a.quantity;
                case "value-asc":
                    return (a.quantity * a.unitPrice) - (b.quantity * b.unitPrice);
                case "value-desc":
                    return (b.quantity * b.unitPrice) - (a.quantity * a.unitPrice);
                case "date-asc":
                    return new Date(a.entryDate) - new Date(b.entryDate);
                case "date-desc":
                default:
                    return new Date(b.entryDate) - new Date(a.entryDate);
            }
        });

        // 5. Render list items
        const tbody = document.getElementById("materials-table-body");
        if (!tbody) return;

        tbody.innerHTML = "";

        // Display excel export state for specific sub-categories
        const printCategoryBtn = document.getElementById("print-category-btn");
        const excelCategoryBtn = document.getElementById("excel-category-btn");
        const printCategoryIndBtn = document.getElementById("print-category-individual-btn");
        const printDivider = document.getElementById("print-category-divider");
        
        if (this.state.storageCategory === "all") {
            printCategoryBtn.classList.add("disabled", "d-none");
            excelCategoryBtn.classList.add("disabled", "d-none");
            printCategoryIndBtn.classList.add("disabled", "d-none");
            if (printDivider) printDivider.classList.add("d-none");
            
            printCategoryBtn.innerHTML = `<i class="fa-solid fa-print me-2"></i>${t('print_cat')}`;
            excelCategoryBtn.innerHTML = `<i class="fa-solid fa-file-excel me-2"></i>${t('export_cat_excel')}`;
            printCategoryIndBtn.innerHTML = `<i class="fa-solid fa-file-invoice me-2"></i>${t('print_indiv_cat')}`;
        } else {
            printCategoryBtn.classList.remove("disabled", "d-none");
            excelCategoryBtn.classList.remove("disabled", "d-none");
            printCategoryIndBtn.classList.remove("disabled", "d-none");
            if (printDivider) printDivider.classList.remove("d-none");
            
            const catLabel = AppDB.CATEGORIES[this.state.storageCategory];
            printCategoryBtn.innerHTML = `<i class="fa-solid fa-print me-2"></i>${t('print_cat')}: ${catLabel}`;
            excelCategoryBtn.innerHTML = `<i class="fa-solid fa-file-excel me-2"></i>${t('export_cat_excel')}: ${catLabel}`;
            printCategoryIndBtn.innerHTML = `<i class="fa-solid fa-file-invoice me-2"></i>${t('print_indiv_cat')}: ${catLabel}`;
            
            // Set dynamic triggers
            printCategoryBtn.onclick = () => AppPrint.printCategory(this.state.storageCategory);
            excelCategoryBtn.onclick = () => AppPrint.exportExcel(this.state.storageCategory);
            printCategoryIndBtn.onclick = () => AppPrint.printAllMaterialInvoices(this.state.storageCategory);
        }

        if (list.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="12" class="text-center py-5 text-muted">
                        <i class="fa-solid fa-box-open fs-2 mb-3 d-block text-secondary"></i>
                        لا توجد مواد مطابقة للبحث أو التصفية الحالية.
                    </td>
                </tr>
            `;
            return;
        }

        list.forEach((mat, index) => {
            const tr = document.createElement("tr");
            
            // Color badges for alerts in the table
            let qtyAlertBadge = "";
            if (mat.quantity === 0) {
                qtyAlertBadge = `<span class="badge bg-danger">نفذت</span>`;
            } else if (mat.quantity <= mat.alertLimit) {
                qtyAlertBadge = `<span class="badge bg-warning text-dark">شحيحة</span>`;
            }

            // Status label for archived
            const statusLabel = mat.archived 
                ? `<span class="badge bg-secondary">مؤرشف</span>` 
                : `<span class="badge bg-success">نشط</span>`;

            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>
                    <div class="fw-bold">${mat.name}</div>
                    <small class="text-muted">${AppDB.CATEGORIES[mat.category] || mat.category}</small>
                </td>
                <td>
                    <span class="fs-6 fw-semibold text-secondary">${mat.initialQuantity.toLocaleString()}</span> <small class="text-secondary">${mat.unit}</small>
                </td>
                <td>
                    <span class="fs-6 fw-semibold">${mat.quantity.toLocaleString()}</span> <small>${mat.unit}</small>
                    <div class="mt-1">${qtyAlertBadge}</div>
                </td>
                <td>${mat.unitPrice.toLocaleString()} ${t('currency')}</td>
                <td class="fw-bold text-primary">${(mat.quantity * mat.unitPrice).toLocaleString()} ${t('currency')}</td>
                <td>
                    <div>${mat.companyName || '-'}</div>
                    <small class="text-muted">${t('invoice_label') || 'وصل:'} ${mat.invoiceNumber || '-'}</small>
                </td>
                <td>
                    <div>${t('buyer_label') || 'شراء:'} ${mat.buyerName || '-'}</div>
                    <small class="text-muted">${t('receiver_label') || 'استلم:'} ${mat.receiverName || '-'}</small>
                </td>
                <td>${mat.deliveryCost.toLocaleString()} ${t('currency')}</td>
                <td><small>${mat.entryDate}</small></td>
                <td>${statusLabel}</td>
                <td>
                    <div class="btn-group btn-group-sm">
                        <button class="btn btn-outline-primary" title="${t('edit_mat_tooltip') || 'تعديل المادة'}" onclick="App.openEditModal('${mat.id}')">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button class="btn btn-outline-warning" title="${mat.archived ? (t('unarchive_tooltip') || 'إلغاء الأرشفة') : (t('archive_tooltip') || 'أرشفة المادة')}" onclick="App.toggleArchive('${mat.id}', ${mat.archived})">
                            <i class="fa-solid ${mat.archived ? 'fa-box-open' : 'fa-box'}"></i>
                        </button>
                        <button class="btn btn-outline-info" title="${t('print_receipt_tooltip') || 'طباعة الوصل'}" onclick="AppPrint.printMaterialInvoice('${mat.id}')">
                            <i class="fa-solid fa-print"></i>
                        </button>
                        <button class="btn btn-outline-danger" title="${t('delete_tooltip') || 'حذف نهائي'}" onclick="App.confirmDelete('${mat.id}')">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </td>
            `;
            tbody.appendChild(tr);
        });
    },

    // Transaction Ledger rendering
    renderTransactionsTable() {
        if (this.state.currentTab !== "output") return;

        let transactions = AppDB.getTransactions();
        
        // Filter by Transaction Type (All / In / Out)
        const typeFilter = document.querySelector('input[name="txTypeFilter"]:checked');
        if (typeFilter) {
            const filterValue = typeFilter.value;
            if (filterValue === "out") {
                transactions = transactions.filter(t => t.type !== "in");
            } else if (filterValue === "in") {
                transactions = transactions.filter(t => t.type === "in");
            }
            // If "all", we don't filter.
        }

        if (this.state.outputCategory !== "all") {
            transactions = transactions.filter(t => t.category === this.state.outputCategory);
        }
        const tbody = document.getElementById("transactions-table-body");
        if (!tbody) return;

        tbody.innerHTML = "";

        if (transactions.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="10" class="text-center py-5 text-muted">
                        <i class="fa-solid fa-receipt fs-2 mb-3 d-block text-secondary"></i>
                        ${t('no_tx_record') || 'لا توجد أي حركات صرف أو إخراج مسجلة حتى الآن.'}
                    </td>
                </tr>
            `;
            return;
        }

        // Show transactions in descending order (latest first)
        const sortedTxs = [...transactions].sort((a,b) => new Date(b.date) - new Date(a.date));

        sortedTxs.forEach((tx, index) => {
            const tr = document.createElement("tr");
            const dateStr = new Date(tx.date).toLocaleDateString('ar-EG', {hour: '2-digit', minute: '2-digit'});

            let typeBadge = "";
            if (tx.type === "in") {
                typeBadge = `<span class="badge bg-success-subtle text-success border border-success-subtle px-2">${t('tx_in_badge') || 'وارد (شحنة)'}</span>`;
            } else if (tx.type === "out") {
                typeBadge = `<span class="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle px-2">${t('tx_out_badge') || 'صرف مشروع'}</span>`;
            } else if (tx.type === "return") {
                typeBadge = `<span class="badge bg-danger-subtle text-danger border border-danger-subtle px-2">${t('tx_return_badge') || 'مرتجع شركة'}</span>`;
            }

            let reasonDetails = `<strong>${t('reason_label') || 'السبب:'}</strong> ${tx.reason}`;
            if (tx.type === "return") {
                reasonDetails += `
                    <div class="mt-1 small">
                        <strong>${t('company_label') || 'الشركة:'}</strong> ${tx.companyName}<br>
                        <strong>${t('return_receipt_label') || 'وصل إرجاع:'}</strong> ${tx.returnInvoiceNumber}<br>
                        <strong>${t('delivery_cost_label') || 'سعر التوصيل:'}</strong> ${tx.deliveryCost.toLocaleString()} ${t('currency')}
                    </div>
                `;
            }

            // Lookup material to get original quantity
            const materials = AppDB.getMaterials();
            const mat = materials.find(m => m.id === tx.materialId);
            const originalQty = mat ? mat.initialQuantity : '-';

            tr.innerHTML = `
                <td class="text-center">${index + 1}</td>
                <td><small>${dateStr}</small></td>
                <td class="text-center">${typeBadge}</td>
                <td>
                    <div class="fw-bold">${tx.materialName}</div>
                    <small class="text-muted">${AppDB.CATEGORIES[tx.category] || tx.category}</small>
                </td>
                <td class="text-primary fw-bold text-center">${originalQty !== '-' ? originalQty.toLocaleString() : '-'} <small>${tx.unit}</small></td>
                <td class="text-center"><strong>${tx.quantity.toLocaleString()}</strong> <small>${tx.unit}</small></td>
                <td class="text-center">${tx.unitPrice.toLocaleString()} <small class="text-muted">${t('currency')}</small></td>
                <td class="fw-bold text-center">${tx.totalPrice.toLocaleString()} <small class="text-muted">${t('currency')}</small></td>
                <td class="text-center">${tx.operatorName || '-'}</td>
                <td class="text-center">${tx.delivererName || '-'}</td>
                <td><small>${reasonDetails}</small></td>
                <td class="text-center">
                    <button class="btn btn-sm btn-outline-dark" onclick="AppPrint.printTransactionReceipt('${tx.id}')" title="طباعة وصل الحركة">
                        <i class="fa-solid fa-print"></i>
                    </button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    },

    // Populate issue modal with available materials
    updateIssueModalDropdown() {
        const materials = AppDB.getMaterials().filter(m => !m.archived && m.quantity > 0);
        const select = document.getElementById("issue_materialId");
        if (!select) return;

        select.innerHTML = '<option value="" disabled selected>-- اختر المادة من المخزن --</option>';
        materials.forEach(m => {
            const opt = document.createElement("option");
            opt.value = m.id;
            opt.textContent = `${m.name} [${AppDB.CATEGORIES[m.category]}] (${m.quantity} ${m.unit} متوفر)`;
            select.appendChild(opt);
        });

        // Reset details label in modal
        const label = document.getElementById("issue_max_available");
        if (label) label.textContent = "";
    },

    // Alerts view rendering
    renderAlerts() {
        if (this.state.currentTab !== "alerts") return;

        const alertsList = AppAlerts.checkAlerts();
        const container = document.getElementById("alerts-container");
        if (!container) return;

        container.innerHTML = "";

        if (alertsList.length === 0) {
            container.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="alert alert-success fs-5 p-4 d-inline-block shadow-sm">
                        <i class="fa-solid fa-circle-check fs-3 me-2 align-middle"></i>
                        ${t('no_alerts_msg') || 'المخزن سليم تماماً! لا توجد مواد شحيحة، أو نافدة، أو راكدة حالياً.'}
                    </div>
                </div>
            `;
            return;
        }

        alertsList.forEach(alert => {
            const div = document.createElement("div");
            div.className = "col-md-6 col-lg-4 mb-4";
            
            let statusBadge = "";
            let alertMsg = "";
            
            if (alert.type === "out_of_stock") {
                statusBadge = `<span class="badge bg-danger px-3 py-2"><i class="fa-solid fa-circle-xmark me-2"></i>${t('out_of_stock_badge') || 'نفاد المادة'}</span>`;
                alertMsg = `${t('out_of_stock_msg1') || 'الكمية المتوفرة حالياً هي'} <strong>0 ${alert.unit}</strong>. ${t('out_of_stock_msg2') || 'يرجى تزويد المخزن فوراً.'}`;
            } else if (alert.type === "low_stock") {
                statusBadge = `<span class="badge bg-warning text-dark px-3 py-2"><i class="fa-solid fa-triangle-exclamation me-2"></i>${t('low_stock_badge') || 'مخزون حرج'}</span>`;
                alertMsg = `${t('low_stock_msg1') || 'الكمية الحالية'} <strong>${alert.quantity} ${alert.unit}</strong> ${t('low_stock_msg2') || 'وهي أقل من حد الأمان المحدد للقسم'} (${alert.alertLimit} ${alert.unit}).`;
            } else if (alert.type === "unused_long_time") {
                statusBadge = `<span class="badge bg-success px-3 py-2"><i class="fa-solid fa-clock me-2"></i>${t('unused_badge') || 'مادة راكدة'}</span>`;
                alertMsg = `${t('unused_msg1') || 'لم يطرأ أي استخدام على المادة منذ'} <strong>${alert.daysUnused} ${typeof t === 'function' && t('days') ? t('days') : 'يوماً'}</strong>. ${t('unused_msg2') || 'الكمية الراكدة:'} ${alert.quantity} ${alert.unit}.`;
            }

            div.innerHTML = `
                <div class="card h-100 border-${alert.color} border-start border-4 shadow-sm">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start mb-3">
                            <div>
                                <h5 class="card-title fw-bold mb-1">${alert.name}</h5>
                                <span class="badge bg-secondary-subtle text-secondary">${AppDB.CATEGORIES[alert.category] || alert.category}</span>
                            </div>
                            ${statusBadge}
                        </div>
                        <p class="card-text text-muted small">${alertMsg}</p>
                        <hr class="my-2">
                        <div class="d-flex justify-content-between align-items-center text-muted small">
                            <span>آخر حركة: ${new Date(alert.date).toLocaleDateString('ar-EG')}</span>
                            <button class="btn btn-link btn-sm text-decoration-none p-0 text-${alert.color}" onclick="App.switchTab('storage')">إدارة المادة</button>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(div);
        });
    },

    // Render operations log list
    renderLogs() {
        if (this.state.currentTab !== "config") return;

        const logs = AppDB.getActivityLogs();
        const tbody = document.getElementById("logs-table-body");
        if (!tbody) return;

        tbody.innerHTML = "";

        if (logs.length === 0) {
            tbody.innerHTML = `<tr><td colspan="4" class="text-center text-muted">لا يوجد سجل حركات نشط حالياً.</td></tr>`;
            return;
        }

        logs.forEach((log, idx) => {
            const tr = document.createElement("tr");
            const dateStr = new Date(log.date).toLocaleString('ar-EG');
            
            tr.innerHTML = `
                <td>${idx + 1}</td>
                <td><small>${dateStr}</small></td>
                <td><span class="badge bg-dark-subtle text-dark-emphasis">${log.user}</span></td>
                <td>${log.action}</td>
            `;
            tbody.appendChild(tr);
        });
    },

    // Edit modal helper
    openEditModal(id) {
        const materials = AppDB.getMaterials();
        const mat = materials.find(m => m.id === id);
        if (!mat) return;

        this.state.editingMaterialId = id;

        // Populate fields
        document.getElementById("edit_buyerName").value = mat.buyerName;
        document.getElementById("edit_receiverName").value = mat.receiverName;
        document.getElementById("edit_companyName").value = mat.companyName;
        document.getElementById("edit_category").value = mat.category;
        document.getElementById("edit_name").value = mat.name;
        document.getElementById("edit_quantity").value = mat.quantity;
        const editUnitSelect = document.getElementById("edit_unit");
        const editUnitCustom = document.getElementById("edit_unit_custom");
        const standardUnits = ['قطعة', 'حبة', 'كيس', 'طن', 'متر', 'متر مربع', 'متر مكعب', 'لتر', 'شدة', 'كغم', 'لفة', 'سيت', 'كرتون', 'برميل'];
        if (standardUnits.includes(mat.unit)) {
            editUnitSelect.value = mat.unit;
            editUnitCustom.classList.add("d-none");
            editUnitCustom.required = false;
            editUnitCustom.value = "";
        } else {
            editUnitSelect.value = "custom";
            editUnitCustom.value = mat.unit;
            editUnitCustom.classList.remove("d-none");
            editUnitCustom.required = true;
        }
        document.getElementById("edit_unitPrice").value = mat.unitPrice;
        document.getElementById("edit_invoiceNumber").value = mat.invoiceNumber;
        document.getElementById("edit_deliveryCost").value = mat.deliveryCost;
        document.getElementById("edit_alertLimit").value = mat.alertLimit;
        document.getElementById("edit_entryDate").value = mat.entryDate;
        document.getElementById("edit_notes").value = mat.notes;

        // Calc total
        document.getElementById("edit_totalPrice_display").value = (mat.quantity * mat.unitPrice).toLocaleString() + " د.ع";

        // Show modal
        const modal = new bootstrap.Modal(document.getElementById("editMaterialModal"));
        modal.show();
    },

    // Archive toggle helper
    toggleArchive(id, currentlyArchived) {
        if (currentlyArchived) {
            AppStorage.unarchiveMaterial(id);
            this.showToast("تمت إعادة المادة للمخزون النشط.", "success");
        } else {
            if (confirm("هل أنت متأكد من رغبتك في أرشفة هذه المادة؟ سيتم إخفاؤها من جداول الصرف النشطة وتجميدها.")) {
                AppStorage.archiveMaterial(id);
                this.showToast("تم أرشفة المادة بنجاح.", "info");
            }
        }
    },

    confirmDelete(id) {
        if (confirm("تحذير نهائي: هل أنت متأكد من حذف هذه المادة تماماً؟ سيتم إزالتها نهائياً من الجرد (لن يؤثر ذلك على سجل الحركات التاريخية).")) {
            AppStorage.deleteMaterial(id);
            this.showToast("تم حذف المادة بنجاح.", "danger");
        }
    },

    // Beautiful UI Toasts Notification Helper
    showToast(message, type = "success") {
        const toastContainer = document.getElementById("toast-container");
        if (!toastContainer) return;

        const toastId = "toast_" + Date.now();
        let bgClass = "bg-success text-white";
        if (type === "warning") bgClass = "bg-warning text-dark";
        if (type === "danger") bgClass = "bg-danger text-white";
        if (type === "info") bgClass = "bg-primary text-white";

        const toastHtml = `
            <div id="${toastId}" class="toast align-items-center ${bgClass} border-0 shadow-lg" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="4000">
                <div class="d-flex">
                    <div class="toast-body font-cairo">
                        <i class="fa-solid fa-bell me-2"></i> ${message}
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        `;

        toastContainer.insertAdjacentHTML('beforeend', toastHtml);
        const toastEl = document.getElementById(toastId);
        const bsToast = new bootstrap.Toast(toastEl);
        bsToast.show();

        // Remove from DOM after hidden
        toastEl.addEventListener('hidden.bs.toast', () => {
            toastEl.remove();
        });
    }
};
