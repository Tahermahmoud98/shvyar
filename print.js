/**
 * Print & Export Module - AppPrint
 * Manages Excel sheet generation using SheetJS, and handles styled A4 printing templates.
 */
const AppPrint = {
    // Shared print layout wrap
    _printWindow(contentHtml, title = "تقرير المخزن", isLandscape = false) {
        const printWindow = window.open("", "_blank", "width=900,height=700");
        const isDarkMode = document.documentElement.getAttribute("data-theme") === "dark";

        printWindow.document.write(`
            <!DOCTYPE html>
            <html dir="rtl" lang="ar">
            <head>
                <meta charset="UTF-8">
                <title>${title}</title>
                <!-- Bootstrap 5 RTL -->
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css">
                <!-- Font Awesome -->
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&family=Noto+Kufi+Arabic:wght@100..900&display=swap');
                    body {
                        font-family: 'Noto Kufi Arabic', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        color: #1e293b;
                        background-color: #fff;
                        padding: 20px;
                        font-size: 13px;
                    }
                    .print-header {
                        border-bottom: 3px double #f97316;
                        padding-bottom: 15px;
                        margin-bottom: 25px;
                    }
                    .company-logo {
                        font-size: 24px;
                        font-weight: 700;
                        color: #0f172a;
                    }
                    .company-logo span {
                        color: #f97316;
                    }
                    .report-title {
                        font-size: 18px;
                        font-weight: 700;
                        color: #1e3a8a;
                        text-align: center;
                        margin: 10px 0;
                    }
                    .meta-info {
                        background-color: #f8fafc;
                        border: 1px solid #e2e8f0;
                        border-radius: 8px;
                        padding: 12px;
                        margin-bottom: 20px;
                    }
                    .meta-label {
                        font-weight: 700;
                        color: #475569;
                    }
                    .table th {
                        background-color: #0f172a !important;
                        color: #ffffff !important;
                        font-weight: 700;
                        text-align: center;
                        vertical-align: middle;
                    }
                    .table td {
                        text-align: center;
                        vertical-align: middle;
                    }
                    .table-striped tbody tr:nth-of-type(odd) {
                        background-color: #f8fafc;
                    }
                    .print-footer {
                        margin-top: 50px;
                        border-top: 1px solid #e2e8f0;
                        padding-top: 20px;
                        font-size: 11px;
                        color: #64748b;
                    }
                    .signature-area {
                        margin-top: 40px;
                    }
                    .signature-box {
                        border-top: 1px dashed #cbd5e1;
                        text-align: center;
                        padding-top: 10px;
                        margin-top: 40px;
                        font-weight: 700;
                    }
                    @media print {
                        ${isLandscape ? '@page { size: landscape; margin: 10mm; }' : ''}
                        body {
                            padding: 0;
                            margin: 0;
                            -webkit-print-color-adjust: exact;
                            print-color-adjust: exact;
                            padding-bottom: 120px !important;
                        }
                        .signature-area {
                            position: fixed;
                            bottom: 20px;
                            left: 0;
                            right: 0;
                            width: 100%;
                            padding: 0 15px;
                            page-break-inside: avoid;
                        }
                        .no-print {
                            display: none;
                        }
                        .page-break {
                            page-break-before: always;
                        }
                    }
                    .unified-invoice-table { width: 100%; border-collapse: separate; border-spacing: 0; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 25px; text-align: center; direction: rtl; overflow: hidden; }
                    .unified-invoice-table th, .unified-invoice-table td { border-bottom: 1px solid #e2e8f0; border-left: 1px solid #e2e8f0; padding: 14px; vertical-align: middle; }
                    .unified-invoice-table th:last-child, .unified-invoice-table td:last-child { border-left: none; }
                    .unified-invoice-table tr:last-child th, .unified-invoice-table tr:last-child td { border-bottom: none; }
                    .unified-invoice-table th { background-color: #f8fafc !important; color: #64748b !important; font-weight: 600; font-size: 15px; }
                    .unified-invoice-table td { background-color: #ffffff; color: #0f172a; font-weight: 700; font-size: 15px; }
                    .unified-invoice-table .sub-header th { border-top: 1px solid #e2e8f0; }
                    .unified-invoice-table .item-row:nth-child(even) td { background-color: #f8fafc; }
                    .unified-invoice-table .footer-row td { background-color: #eff6ff !important; color: #1d4ed8 !important; font-weight: 800; border-top: 2px solid #bfdbfe; }
                    .text-left-align { text-align: left !important; padding-left: 20px !important; }

                    /* Modern Vertical Info Table */
                    .vertical-info-table {
                        width: 95%;
                        margin: 0 auto 25px auto;
                        border-collapse: separate;
                        border-spacing: 0;
                        border: 1px solid #e2e8f0;
                        border-radius: 12px;
                        direction: rtl;
                    }
                    .vertical-info-table th,
                    .vertical-info-table td {
                        border-bottom: 1px solid #cbd5e1 !important;
                    }
                    .vertical-info-table tr:last-child th,
                    .vertical-info-table tr:last-child td {
                        border-bottom: none !important;
                    }
                    .vertical-info-table th {
                        background-color: #f8fafc !important;
                        color: #64748b !important;
                        font-weight: 600;
                        padding: 16px 24px;
                        text-align: right;
                        width: 35%;
                        border-left: 1px solid #cbd5e1 !important;
                        font-size: 16px;
                    }
                    .vertical-info-table td {
                        background-color: #ffffff !important;
                        color: #0f172a;
                        font-weight: 700;
                        padding: 16px 24px;
                        text-align: right;
                        width: 65%;
                        font-size: 18px;
                    }
                    .vertical-info-table .highlight-row th {
                        background-color: #eff6ff !important;
                        color: #1d4ed8 !important;
                    }
                    .vertical-info-table .highlight-row td {
                        background-color: #f8fafc;
                        color: #1d4ed8;
                        font-size: 20px;
                        font-weight: 800;
                    }
                    @media print {
                        * {
                            -webkit-print-color-adjust: exact !important;
                            print-color-adjust: exact !important;
                        }
                        .vertical-info-table th, .vertical-info-table td {
                            border-color: #94a3b8 !important; /* Force darker lines during physical print */
                        }
                    }
                </style>
            </head>
            <body>
                <div class="container-fluid">
                    <!-- Print Control Panel -->
                    <div class="row no-print mb-4 p-2 bg-light border rounded">
                        <div class="col-12 d-flex justify-content-between align-items-center">
                            <span><i class="fa-solid fa-circle-info text-primary me-2"></i>${t('print_preview')}</span>
                            <div>
                                <button class="btn btn-primary btn-sm px-4" onclick="window.print()"><i class="fa-solid fa-print me-2"></i>${t('print_now')}</button>
                                <button class="btn btn-secondary btn-sm px-3" onclick="window.close()"><i class="fa-solid fa-xmark me-2"></i>${t('close')}</button>
                            </div>
                        </div>
                    </div>

                    <!-- Header -->
                    <div class="print-header row align-items-center">
                        <div class="col-6">
                            <div class="company-logo">
                                <i class="fa-solid fa-helmet-safety text-warning me-2"></i>${t('benaa_tech')}
                            </div>
                            <small class="text-muted">${t('benaa_tech_desc')}</small>
                        </div>
                        <div class="col-6 text-end">
                            <div><strong>${t('report_date')}</strong> ${new Date().toLocaleDateString('ar-EG')}</div>
                            <div><strong>${t('current_user')}</strong> ${AppDB.getCurrentUser()}</div>
                        </div>
                    </div>

                    ${contentHtml}

                    <!-- Signature Area -->
                    <div class="row signature-area">
                        <div class="col-4">
                            <div class="signature-box">${t('technical_receiver_sign')}</div>
                        </div>
                        <div class="col-4">
                            <div class="signature-box">${t('store_keeper_sign')}</div>
                        </div>
                        <div class="col-4">
                            <div class="signature-box">${t('project_manager_sign')}</div>
                        </div>
                    </div>

                </div>
            </body>
            </html>
        `);
        printWindow.document.close();
    },

    // Print Single Material Entry (وصل إدخال مادة)
    printMaterialInvoice(materialId) {
        const materials = AppDB.getMaterials();
        const mat = materials.find(m => m.id === materialId);
        if (!mat) return;

        const html = `
            <div class="report-title my-4"><i class="fa-solid fa-receipt me-2"></i>${t('mat_entry_receipt')} ${mat.invoiceNumber || 'N/A'}</div>
            
            <table class="vertical-info-table">
                <tbody>
                    <tr><th>${t('category')}</th><td>${AppDB.CATEGORIES[mat.category] || mat.category}</td></tr>
                    <tr><th>${t('buyer_name')}</th><td>${mat.buyerName || '-'}</td></tr>
                    <tr><th>${t('receiver_name')}</th><td>${mat.receiverName || '-'}</td></tr>
                    <tr><th>${t('supplier_company')}</th><td>${mat.companyName || '-'}</td></tr>
                    <tr><th>${t('material_name')}</th><td style="font-size:18px;font-weight:800;color:#0f172a">${mat.name}</td></tr>
                    <tr><th>${t('quantity')}</th><td>${mat.initialQuantity.toLocaleString()} <span style="color:#64748b;font-weight:600;font-size:14px">${mat.unit}</span></td></tr>
                    <tr><th>${t('unit_price')}</th><td>${mat.unitPrice.toLocaleString()} <span style="color:#64748b;font-weight:600;font-size:14px">${t('currency')}</span></td></tr>
                    <tr><th>${t('total_price')}</th><td>${mat.totalPrice.toLocaleString()} <span style="color:#64748b;font-weight:600;font-size:14px">${t('currency')}</span></td></tr>
                    <tr><th>${t('delivery_cost')}</th><td>${mat.deliveryCost.toLocaleString()} <span style="color:#64748b;font-weight:600;font-size:14px">${t('currency')}</span></td></tr>
                    <tr><th>${t('entry_date')}</th><td>${mat.entryDate}</td></tr>
                    <tr><th>${t('material_status')}</th><td><span style="padding:4px 10px; border-radius:6px; background:${mat.archived ? '#fef2f2' : '#f0fdf4'}; color:${mat.archived ? '#ef4444' : '#16a34a'}; font-size:13px;">${mat.archived ? t('status_archived') : t('status_active')}</span></td></tr>
                    <tr><th>${t('notes')}</th><td style="color: #64748b; font-weight: 500;">${mat.notes || t('no_notes')}</td></tr>
                    <tr class="highlight-row"><th>${t('total_shipping_cost')}</th><td>${(mat.totalPrice + mat.deliveryCost).toLocaleString()} <span style="font-size:16px">${t('currency')}</span></td></tr>
                </tbody>
            </table>
        `;

        this._printWindow(html, `${t('receipt_entry')} ${mat.name}`);
    },

    // Print All Material Invoices Separately
    printAllMaterialInvoices(category = "all") {
        let materials = AppDB.getMaterials();
        if (category !== "all") {
            materials = materials.filter(m => m.category === category);
        }

        // Exclude archived items from bulk printing
        materials = materials.filter(m => !m.archived);

        if (materials.length === 0) {
            alert(t('no_mats_in_cat'));
            return;
        }

        let contentHtml = '';

        materials.forEach((mat, idx) => {
            const isLast = (idx === materials.length - 1);
            contentHtml += `
                <div style="${!isLast ? 'page-break-after: always; margin-bottom: 40px; padding-bottom: 40px; border-bottom: 2px dashed #cbd5e1;' : ''}">
                    <div class="report-title my-4"><i class="fa-solid fa-receipt me-2"></i>${t('mat_entry_receipt')} ${mat.invoiceNumber || 'N/A'}</div>
                    <table class="vertical-info-table">
                        <tbody>
                            <tr><th>${t('category')}</th><td>${AppDB.CATEGORIES[mat.category] || mat.category}</td></tr>
                            <tr><th>${t('buyer_name')}</th><td>${mat.buyerName || '-'}</td></tr>
                            <tr><th>${t('receiver_name')}</th><td>${mat.receiverName || '-'}</td></tr>
                            <tr><th>${t('supplier_company')}</th><td>${mat.companyName || '-'}</td></tr>
                            <tr><th>${t('material_name')}</th><td style="font-size:18px;font-weight:800;color:#0f172a">${mat.name}</td></tr>
                            <tr><th>${t('quantity')}</th><td>${mat.initialQuantity.toLocaleString()} <span style="color:#64748b;font-weight:600;font-size:14px">${mat.unit}</span></td></tr>
                            <tr><th>${t('unit_price')}</th><td>${mat.unitPrice.toLocaleString()} <span style="color:#64748b;font-weight:600;font-size:14px">${t('currency')}</span></td></tr>
                            <tr><th>${t('total_price')}</th><td>${mat.totalPrice.toLocaleString()} <span style="color:#64748b;font-weight:600;font-size:14px">${t('currency')}</span></td></tr>
                            <tr><th>${t('delivery_cost')}</th><td>${mat.deliveryCost.toLocaleString()} <span style="color:#64748b;font-weight:600;font-size:14px">${t('currency')}</span></td></tr>
                            <tr><th>${t('entry_date')}</th><td>${mat.entryDate}</td></tr>
                            <tr><th>${t('material_status')}</th><td><span style="padding:4px 10px; border-radius:6px; background:${mat.archived ? '#fef2f2' : '#f0fdf4'}; color:${mat.archived ? '#ef4444' : '#16a34a'}; font-size:13px;">${mat.archived ? t('status_archived') : t('status_active')}</span></td></tr>
                            <tr><th>${t('notes')}</th><td style="color: #64748b; font-weight: 500;">${mat.notes || t('no_notes')}</td></tr>
                            <tr class="highlight-row"><th>${t('total_shipping_cost')}</th><td>${(mat.totalPrice + mat.deliveryCost).toLocaleString()} <span style="font-size:16px">${t('currency')}</span></td></tr>
                        </tbody>
                    </table>
                </div>
            `;
        });

        this._printWindow(contentHtml, `${t('individual_receipts')} ${category === "all" ? t('all_cats') : (AppDB.CATEGORIES[category] || category)}`);
    },

    // Print Category Materials List
    printCategory(category) {
        const materials = AppDB.getMaterials().filter(m => m.category === category && !m.archived);
        const catName = AppDB.CATEGORIES[category] || category;

        let rowsHtml = "";
        let totalValue = 0;
        let totalQty = 0;

        materials.forEach((mat, idx) => {
            const itemValue = mat.quantity * mat.unitPrice;
            totalValue += itemValue;
            totalQty += mat.quantity;

            rowsHtml += `
                <tr class="item-row">
                    <td>${idx + 1}</td>
                    <td>${mat.name}</td>
                    <td>${mat.initialQuantity.toLocaleString()}</td>
                    <td>${mat.quantity.toLocaleString()}</td>
                    <td>${mat.unit}</td>
                    <td>${mat.unitPrice.toLocaleString()} ${t('currency')}</td>
                    <td>${itemValue.toLocaleString()} ${t('currency')}</td>
                    <td>${mat.companyName || '-'}</td>
                    <td>${mat.invoiceNumber || '-'}</td>
                    <td>${mat.entryDate}</td>
                </tr>
            `;
        });

        if (materials.length === 0) {
            rowsHtml = `<tr><td colspan="10" class="text-center">${t('no_mats_available')}</td></tr>`;
        }

        const html = `
            <div class="report-title my-4"><i class="fa-solid fa-folder-open me-2"></i>${t('detailed_inventory')} ${catName}</div>
            
            <table class="unified-invoice-table">
                <thead>
                    <tr class="sub-header">
                        <th style="width: 4%;">#</th>
                        <th style="width: 22%;">${t('material_name')}</th>
                        <th style="width: 8%;">${t('orig_qty')}</th>
                        <th style="width: 8%;">${t('current_qty')}</th>
                        <th style="width: 7%;">${t('unit')}</th>
                        <th style="width: 10%;">${t('unit_price')}</th>
                        <th style="width: 12%;">${t('inventory_value')}</th>
                        <th style="width: 11%;">${t('supplier_company')}</th>
                        <th style="width: 8%;">${t('invoice_number')}</th>
                        <th style="width: 10%;">${t('entry_date')}</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                    <tr class="footer-row">
                        <td colspan="2" class="text-left-align" style="font-size: 1.1rem; font-weight: bold;">${t('num_materials')} ${materials.length} ${t('mat_word')}</td>
                        <td colspan="4" class="text-center" style="font-size: 1.1rem; font-weight: bold;">${t('total_qtys')} ${totalQty.toLocaleString()}</td>
                        <td colspan="4" class="text-primary text-start" style="font-size: 1.2rem; font-weight: bold;">${t('total_inv_value')} ${totalValue.toLocaleString()} ${t('currency')}</td>
                    </tr>
                </tbody>
            </table>
        `;

        this._printWindow(html, `${t('cat_report')} ${catName}`, true);
    },

    // Print All Materials in all categories
    printAllCategories() {
        const categories = AppDB.CATEGORIES;
        const materials = AppDB.getMaterials().filter(m => !m.archived);

        let contentHtml = `<div class="report-title my-4"><i class="fa-solid fa-warehouse me-2"></i>${t('full_inv_report')}</div>`;

        let grandTotalValue = 0;
        let grandTotalQty = 0;

        // Overall stats info box
        Object.keys(categories).forEach(catKey => {
            const catMaterials = materials.filter(m => m.category === catKey);
            catMaterials.forEach(m => {
                grandTotalValue += (m.quantity * m.unitPrice);
                grandTotalQty += m.quantity;
            });
        });



        // Render each category's table
        Object.keys(categories).forEach((catKey, index) => {
            const catMaterials = materials.filter(m => m.category === catKey);
            const catName = categories[catKey];

            if (index > 0) {
                contentHtml += `<div class="page-break"></div>`;
            }

            contentHtml += `<h5 class="mt-4 pb-2 border-bottom text-primary fw-bold"><i class="fa-solid fa-caret-left me-2"></i>${t('cat_word')} ${catName} (${catMaterials.length} ${t('mat_word')})</h5>`;

            let rowsHtml = "";
            let catTotalValue = 0;

            catMaterials.forEach((mat, idx) => {
                const itemValue = mat.quantity * mat.unitPrice;
                catTotalValue += itemValue;

                rowsHtml += `
                    <tr class="item-row">
                        <td>${idx + 1}</td>
                        <td>${mat.name}</td>
                        <td>${mat.initialQuantity.toLocaleString()}</td>
                        <td>${mat.quantity.toLocaleString()}</td>
                        <td>${mat.unit}</td>
                        <td>${mat.unitPrice.toLocaleString()} ${t('currency')}</td>
                        <td>${itemValue.toLocaleString()} ${t('currency')}</td>
                        <td>${mat.companyName || '-'}</td>
                        <td>${mat.invoiceNumber || '-'}</td>
                        <td>${mat.entryDate || '-'}</td>
                    </tr>
                `;
            });

            if (catMaterials.length === 0) {
                rowsHtml = `<tr><td colspan="10" class="text-center text-muted py-3">${t('no_materials')}</td></tr>`;
            }

            contentHtml += `
                <table class="unified-invoice-table">
                    <thead>
                        <tr class="sub-header">
                            <th style="width: 4%;">#</th>
                            <th style="width: 22%;">${t('material_name')}</th>
                            <th style="width: 8%;">${t('orig_qty')}</th>
                            <th style="width: 8%;">${t('current_qty')}</th>
                            <th style="width: 7%;">${t('unit')}</th>
                            <th style="width: 10%;">${t('unit_price')}</th>
                            <th style="width: 12%;">${t('inventory_value')}</th>
                            <th style="width: 11%;">${t('supplier_company')}</th>
                            <th style="width: 8%;">${t('invoice_number')}</th>
                            <th style="width: 10%;">${t('entry_date')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHtml}
                        <tr class="footer-row">
                            <td colspan="5" class="text-left-align" style="font-size: 1.2rem;">${t('total_value_cat')} ${catName}:</td>
                            <td colspan="5" class="text-primary text-start" style="font-size: 1.2rem;">${catTotalValue.toLocaleString()} ${t('currency')}</td>
                        </tr>
                    </tbody>
                </table>
            `;
        });

        contentHtml += `
            <div class="mt-4">
                <table class="unified-invoice-table">
                    <tbody>
                        <tr class="footer-row">
                            <td colspan="3" class="text-center" style="font-size: 1.2rem; font-weight: bold;">${t('total_active_items')} ${materials.length}</td>
                            <td colspan="3" class="text-center" style="font-size: 1.2rem; font-weight: bold;">${t('total_store_qtys')} ${grandTotalQty.toLocaleString()}</td>
                            <td colspan="3" class="text-primary text-center" style="font-size: 1.3rem; font-weight: bold;">${t('total_store_value')} ${grandTotalValue.toLocaleString()} ${t('currency')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;

        this._printWindow(contentHtml, t('gen_inv_report'), true);
    },

    // Print Transactions Logs
    printTransactions() {
        const transactions = AppDB.getTransactions().filter(t => t.type !== "in");
        let rowsHtml = "";

        transactions.forEach((tx, idx) => {
            const dateStr = new Date(tx.date).toLocaleDateString('ar-EG', { hour: '2-digit', minute: '2-digit' });
            let typeBadge = "";

            if (tx.type === "in") {
                typeBadge = `<span class="badge bg-success">${t('tx_in')}</span>`;
            } else if (tx.type === "out") {
                typeBadge = `<span class="badge bg-warning text-dark">${t('tx_out')}</span>`;
            } else if (tx.type === "return") {
                typeBadge = `<span class="badge bg-danger">${t('tx_return')}</span>`;
            }

            rowsHtml += `
                <tr class="item-row">
                    <td>${idx + 1}</td>
                    <td>${typeBadge}</td>
                    <td>${tx.invoiceNumber || '-'}</td>
                    <td>${tx.companyName || '-'}</td>
                    <td>${tx.operatorName || '-'}</td>
                    <td>${tx.delivererName || '-'}</td>
                    <td><strong>${tx.materialName}</strong><br><small class="text-muted">${AppDB.CATEGORIES[tx.category] || tx.category}</small></td>
                    <td>${tx.quantity.toLocaleString()} ${tx.unit}</td>
                    <td>${tx.unitPrice.toLocaleString()} ${t('currency')}</td>
                    <td>${tx.totalPrice.toLocaleString()} ${t('currency')}</td>
                    <td>${dateStr}</td>
                    <td><small>${tx.reason || '-'}</small></td>
                </tr>
            `;
        });

        if (transactions.length === 0) {
            rowsHtml = `<tr><td colspan="12" class="text-center">${t('no_tx')}</td></tr>`;
        }

        const html = `
            <div class="report-title my-4"><i class="fa-solid fa-list-check me-2"></i>${t('tx_hist_title')}</div>
            
            <table class="unified-invoice-table">
                <tbody>
                    <tr class="sub-header">
                        <th style="width: 3%;">#</th>
                        <th style="width: 6%;">${t('tx_type')}</th>
                        <th style="width: 6%;">${t('invoice_number')}</th>
                        <th style="width: 9%;">${t('supplier_company')}</th>
                        <th style="width: 8%;">${t('resp_buyer')}</th>
                        <th style="width: 8%;">${t('rec_del')}</th>
                        <th style="width: 16%;">${t('mat_cat_name')}</th>
                        <th style="width: 8%;">${t('qty_issued')}</th>
                        <th style="width: 8%;">${t('unit_price')}</th>
                        <th style="width: 9%;">${t('net_value')}</th>
                        <th style="width: 9%;">${t('dt_time')}</th>
                        <th style="width: 10%;">${t('reason_det')}</th>
                    </tr>
                    ${rowsHtml}
                    <tr class="footer-row">
                        <td colspan="6" class="text-center" style="font-size: 1.2rem; font-weight: bold;">${t('total_ops_num')} ${transactions.length}</td>
                        <td colspan="6" class="text-center" style="font-size: 1.2rem; font-weight: bold; color: #ea580c;">${t('total_purchases_val')} ${transactions.filter(t => t.type === 'in').reduce((sum, t) => sum + t.totalPrice, 0).toLocaleString()} ${t('currency')}</td>
                    </tr>
                </tbody>
            </table>
        `;

        this._printWindow(html, typeof t === 'function' ? t('tx_hist_title') : "حركات المخزن", true);
    },

    // Print Individual Transaction Receipt
    printTransactionReceipt(txId) {
        const transactions = AppDB.getTransactions();
        const tx = transactions.find(t => t.id === txId);
        if (!tx) return;

        // Fetch original quantity and current quantity
        const materials = AppDB.getMaterials();
        const mat = materials.find(m => m.id === tx.materialId);
        const originalQty = mat ? mat.initialQuantity : '-';
        const currentQty = mat ? mat.quantity : '-';

        const dateStr = new Date(tx.date).toLocaleDateString('ar-EG', {hour: '2-digit', minute: '2-digit'});
        let title = t('tx_hist_title') || "وصل حركة";
        let typeBadge = "";
        let colorTheme = "#1e3a8a"; // Default dark blue
        let bgTheme = "#eff6ff";

        if (tx.type === "in") {
            title = "وصل وارد (شحنة)";
            typeBadge = `<span style="padding:4px 10px; border-radius:6px; background:#f0fdf4; color:#16a34a; font-size:13px;">${t('tx_in_badge') || 'وارد (شحنة)'}</span>`;
            colorTheme = "#16a34a"; // Green
            bgTheme = "#f0fdf4";
        } else if (tx.type === "out") {
            title = "وصل صادر (استهلاك مشروع)";
            typeBadge = `<span style="padding:4px 10px; border-radius:6px; background:#fffbeb; color:#d97706; font-size:13px;">${t('tx_out_badge') || 'صرف مشروع'}</span>`;
            colorTheme = "#d97706"; // Orange
            bgTheme = "#fffbeb";
        } else if (tx.type === "return") {
            title = "وصل مرتجع لشركة";
            typeBadge = `<span style="padding:4px 10px; border-radius:6px; background:#fef2f2; color:#dc2626; font-size:13px;">${t('tx_return_badge') || 'مرتجع شركة'}</span>`;
            colorTheme = "#dc2626"; // Red
            bgTheme = "#fef2f2";
        }

        const html = `
            <div class="report-title my-4" style="color: ${colorTheme};"><i class="fa-solid fa-file-invoice me-2"></i>${title}</div>
            
            <table class="vertical-info-table" style="border-color: ${colorTheme};">
                <tbody>
                    <tr><th>القسم</th><td>${AppDB.CATEGORIES[tx.category] || tx.category}</td></tr>
                    <tr><th>المسؤول / المشتري</th><td>${tx.operatorName || '-'}</td></tr>
                    <tr><th>المستلم / المسلّم</th><td>${tx.delivererName || '-'}</td></tr>
                    <tr><th>الشركة الموردة</th><td>${tx.companyName || '-'}</td></tr>
                    ${tx.invoiceNumber ? `<tr><th>رقم الفاتورة</th><td>${tx.invoiceNumber}</td></tr>` : ''}
                    ${tx.type === 'return' ? `<tr><th>رقم فاتورة المرتجع</th><td>${tx.returnInvoiceNumber || '-'}</td></tr><tr><th>تكلفة التوصيل</th><td>${(tx.deliveryCost || 0).toLocaleString()} <span style="font-size:14px;color:#64748b">${t('currency')}</span></td></tr>` : ''}
                    <tr><th>اسم المادة</th><td style="font-size:18px;font-weight:800;color:#0f172a">${tx.materialName}</td></tr>
                    <tr><th>الكمية الأصلية للمادة</th><td style="font-size:16px;font-weight:700;color:#475569">${originalQty !== '-' ? originalQty.toLocaleString() : '-'} <span style="font-size:14px;color:#64748b">${tx.unit}</span></td></tr>
                    <tr><th>كمية الحركة</th><td style="font-size:18px;font-weight:800;color:${colorTheme}">${tx.quantity.toLocaleString()} <span style="font-size:14px;color:#64748b">${tx.unit}</span></td></tr>
                    <tr><th>سعر الوحدة</th><td>${tx.unitPrice.toLocaleString()} <span style="font-size:14px;color:#64748b">${t('currency')}</span></td></tr>
                    <tr><th>القيمة الإجمالية</th><td>${tx.totalPrice.toLocaleString()} <span style="font-size:14px;color:#64748b">${t('currency')}</span></td></tr>
                    <tr><th>تاريخ ووقت الحركة</th><td>${dateStr}</td></tr>
                    <tr class="highlight-row" style="background-color: ${bgTheme};"><th style="color: ${colorTheme} !important;">السبب والتفاصيل</th><td style="color: ${colorTheme}; font-size: 16px;">${tx.reason || '-'}</td></tr>
                    <tr class="highlight-row" style="background-color: #f8fafc;"><th style="color: #0f172a !important;">الباقي</th><td style="color: #0f172a; font-size: 18px; font-weight: 800;">${currentQty !== '-' ? currentQty.toLocaleString() : '-'} <span style="font-size:14px;color:#64748b">${tx.unit}</span></td></tr>
                </tbody>
            </table>
        `;

        this._printWindow(html, title);
    },

    // SheetJS Excel Exporter for Active Materials
    exportExcel(category = "all") {
        const materials = AppDB.getMaterials().filter(m => !m.archived);
        const filtered = category === "all" ? materials : materials.filter(m => m.category === category);
        const catName = category === "all" ? "جميع الأقسام" : (AppDB.CATEGORIES[category] || category);

        // Map data to friendly Arabic names
        const dataToExport = filtered.map((m, idx) => ({
            "م": idx + 1,
            "القسم": AppDB.CATEGORIES[m.category] || m.category,
            "اسم المادة": m.name,
            "الكمية الحالية": m.quantity,
            "الكمية الواردة": m.initialQuantity,
            "الوحدة": m.unit,
            "سعر الوحدة (د.ع)": m.unitPrice,
            "القيمة الكلية الحالية (د.ع)": m.quantity * m.unitPrice,
            "اسم المشتري": m.buyerName,
            "اسم المستلم": m.receiverName,
            "اسم المورد/الشركة": m.companyName,
            "رقم الوصل": m.invoiceNumber,
            "سعر التوصيل (د.ع)": m.deliveryCost,
            "حد التنبيه": m.alertLimit,
            "تاريخ الإدخال": m.entryDate,
            "ملاحظات": m.notes
        }));

        const worksheet = XLSX.utils.json_to_sheet(dataToExport);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "جرد المواد");

        // Force RTL layout on Excel sheet
        if (!worksheet['!views']) worksheet['!views'] = [];
        worksheet['!views'].push({ RTL: true });

        // Save
        const filename = `مخزن_شريكة_شڤیار_${catName.replace(/[\s\(\)]/g, '_')}_${new Date().toISOString().split('T')[0]}.xlsx`;
        XLSX.writeFile(workbook, filename);
        AppDB.addActivityLog(`تم تصدير تقرير إكسيل لجرد [${catName}]`);
    },

    // SheetJS Excel Exporter for Transactions
    exportTransactionsExcel() {
        const transactions = AppDB.getTransactions().filter(t => t.type !== "in");

        const dataToExport = transactions.map((t, idx) => ({
            "م": idx + 1,
            "تاريخ العملية": new Date(t.date).toLocaleString('ar-EG'),
            "نوع العملية": t.type === "in" ? "إدخال شحنة" : (t.type === "out" ? "صرف مشروع" : "إرجاع لشركة"),
            "اسم المادة": t.materialName,
            "القسم": AppDB.CATEGORIES[t.category] || t.category,
            "الكمية": t.quantity,
            "الوحدة": t.unit,
            "سعر الوحدة": t.unitPrice,
            "الإجمالي": t.totalPrice,
            "المشتري/المسؤول": t.operatorName,
            "المستلم/المسلم": t.delivererName,
            "سبب الصرف": t.reason,
            "اسم الشركة المرتجع لها": t.companyName || "-",
            "سعر التوصيل للمرتجع": t.deliveryCost || 0,
            "رقم وصل الاسترجاع": t.returnInvoiceNumber || "-"
        }));

        const worksheet = XLSX.utils.json_to_sheet(dataToExport);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "حركات المستودع");

        if (!worksheet['!views']) worksheet['!views'] = [];
        worksheet['!views'].push({ RTL: true });

        const filename = `سجل_حركات_المخزن_${new Date().toISOString().split('T')[0]}.xlsx`;
        XLSX.writeFile(workbook, filename);
        AppDB.addActivityLog("تم تصدير سجل حركات المستودع إلى ملف إكسيل");
    },

    // Export PDF using jsPDF directly (we can also fallback/use standard print or use jsPDF canvas/autotable for pure downloads)
    // To solve the Arabic issue in jsPDF beautifully without loading huge fonts, we can convert the target HTML selector to a PDF using standard jsPDF html() rendering, or we can offer a quick jsPDF autoTable report in English/Latin, but users strictly prefer Arabic. 
    // Therefore, we will implement custom CSS-to-PDF export that invokes native print styled as A4, OR we can use the window.print() layout which is standard. For a dedicated "Export PDF" button click, we will open our print window and trigger the print view, instructing the user that they can choose "Save as PDF" which yields the most high-fidelity, beautifully designed, and styled Arabic PDF document possible. We will explain this in the UI!
    exportPdfCategory(category) {
        this.printCategory(category);
    },

    exportPdfAll() {
        this.printAllCategories();
    }
};
