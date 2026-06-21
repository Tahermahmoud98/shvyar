const translations = {
    "ar": {
        // Navbar & General
        "nav_dashboard": "لوحة التحكم والتحليلات",
        "nav_storage": "تخزين وإدارة المواد",
        "nav_output": "إخراج وصرف المواد",
        "nav_alerts": "مركز التنبيهات",
        "nav_config": "الإعدادات والنسخ",
        "title_main": "مخزن شريكة <span style='color: var(--accent-color);'>شڤیار</span>",
        "title_desc": "النظام المتكامل لإدارة المخازن وحركة المواد والمشاريع الإنشائية",
        
        // Portal Cards
        "portal_storage_title": "تخزين وإدخال المواد",
        "portal_storage_desc": "إدخال وتوثيق الشحنات الجديدة وحساب الإجماليات تلقائياً وتعديل الجرد وأرشفة المواد.",
        "portal_storage_btn": "إدارة وتخزين المواد",
        
        "portal_output_title": "إخراج وصرف المواد",
        "portal_output_desc": "تسجيل صرف الكميات للمشاريع، وإرجاع المواد للشركات وحساب سعر التحميل والتوصيل.",
        "portal_output_btn": "صرف وإخراج المواد",
        
        "portal_dashboard_title": "لوحة التحكم والتحليلات",
        "portal_dashboard_desc": "متابعة الأداء المالي وقيمة المخزن وجرد الكميات والمصروفات والشركات الأكثر توريداً.",
        "portal_dashboard_btn": "دخول لوحة التحكم",

        "portal_alerts_title": "مركز التنبيهات الذكي",
        "portal_alerts_desc": "مراقبة مستويات العجز والأصناف الراكدة.",
        "portal_config_title": "إعدادات النظام والنسخ",
        "portal_config_desc": "النسخ الاحتياطي، الموظفين، وسجل العمليات.",
        "enter_btn": "دخول",

        // Categories
        "cat_electrical": "مواد كهربائية",
        "cat_plumbing": "مواد مجاري",
        "cat_steel": "مواد حديد",
        "cat_tiles": "بلاط وكاشي وسيراميك",
        "cat_gypsum": "جبسن بورد",
        "cat_cement": "إسمنت",
        "cat_paint": "أصباغ ومواد كيميائية",
        "cat_hardware": "عدد وأدوات",
        "cat_tools": "أدوات ومكائن",
        "cat_other": "مواد أخرى متفرقة",
        "active_items": "صنف نشط",

        // Table Headers & Labels
        "material_name": "اسم المادة",
        "category": "القسم",
        "quantity": "الكمية",
        "current_qty": "الكمية المتوفرة",
        "unit": "الوحدة",
        "unit_price": "سعر الوحدة",
        "total_price": "السعر الإجمالي",
        "inventory_value": "قيمة المخزون",
        "delivery_cost": "سعر التوصيل",
        "total_shipping_cost": "إجمالي تكلفة الشحنة",
        "supplier_company": "الشركة الموردة",
        "buyer_name": "المشتري",
        "receiver_name": "المستلم",
        "operator_name": "المسؤول",
        "entry_date": "تاريخ الإدخال",
        "date_time": "التاريخ والوقت",
        "material_status": "حالة المادة",
        "notes": "ملاحظات",
        "reason": "السبب / الملاحظة",
        "invoice_number": "رقم الوصل",
        "operation": "العملية",
        "total": "الإجمالي",

        // Status
        "status_active": "نشطة",
        "status_archived": "مؤرشفة",
        "no_notes": "لا توجد ملاحظات",

        // Actions
        "print": "طباعة",
        "edit": "تعديل",
        "delete": "حذف",
        "save": "حفظ",
        "cancel": "إلغاء",
        "confirm": "تأكيد",

        // Common Texts
        "currency": "د.ع",
        "unspecified": "غير محدد",
        "success": "نجاح",
        "error": "خطأ",
        "warning": "تنبيه",
        
        "print_date": "تاريخ الطباعة",
        "print_report": "تقرير",
        
        // Dashboard & Tables
        "dash_title": "لوحة التحكم والتحليلات الإحصائية",
        "dash_desc": "تحليلات جرد المخزن، الأداء المالي والمصروفات",
        "back_subcats": "العودة للأقسام الفرعية",
        "comp_table_title": "جدول مقارنة إحصائيات الأقسام الشاملة",
        "main_cat": "القسم الرئيسي",
        "items_count": "عدد الأصناف",
        "total_in": "إجمالي الوارد (المشتريات)",
        "total_out": "الكميات المخرجة",
        "action": "إجراء",
        "cat_details": "تفاصيل القسم",
        "cat_details_desc": "جدول تفصيلي لجميع مواد هذا القسم وإحصائياتها",
        "stock_val_label": "قيمة المخزون:",
        "total_issued_label": "إجمالي الصرف:",
        "export_print": "تصدير وطباعة",
        "print_all_cats": "طباعة جميع الأقسام",
        "print_this_cat": "طباعة هذا القسم",
        "export_excel": "تصدير Excel",
        "orig_qty": "الكمية الأصلية",
        "curr_qty": "الكمية الحالية",
        "curr_val": "قيمة المخزون الحالي",
        "total_purchases": "إجمالي المشتريات",
        "issued_qty": "كمية المصروف",
        "single_print": "طباعة فردية",
        "manage_stock": "إدارة مخزون وجرد المواد",
        "manage_stock_desc": "قم بإضافة وتعديل وأرشفة مواد البناء وتتبع مستوياتها",
        "add_new_mat": "إضافة مادة جديدة",
        "print_full_inv": "طباعة الجرد الشامل",
        "export_full_inv": "تصدير الجرد كاملاً",
        "print_cat": "طباعة قسم",
        "export_cat_excel": "تصدير قسم Excel",
        
        // Transaction Types
        "tx_in": "إدخال مواد",
        "tx_out": "صرف مشروع",
        "tx_return": "إرجاع شركة",

        // Storage & Search
        "search_ph": "البحث بالاسم، المورد، المشتري، رقم الوصل...",
        "sort_newest": "ترتيب بحسب: الأحدث دخولاً",
        "sort_oldest": "ترتيب بحسب: الأقدم دخولاً",
        "sort_name_asc": "ترتيب بحسب: الاسم (أ-ي)",
        "sort_name_desc": "ترتيب بحسب: الاسم (ي-أ)",
        "sort_qty_desc": "ترتيب بحسب: الكمية (من الأكثر)",
        "sort_qty_asc": "ترتيب بحسب: الكمية (من الأقل)",
        "sort_val_desc": "ترتيب بحسب: إجمالي القيمة (من الأكثر)",
        "sort_val_asc": "ترتيب بحسب: إجمالي القيمة (من الأقل)",
        "filter_active": "عرض: المخزون النشط فقط",
        "filter_archived": "عرض: المخزون المؤرشف فقط",
        "filter_all": "عرض: الكل (النشط والمؤرشف)",
        "mat_cat_name": "اسم المادة / القسم",
        "total_val": "القيمة الكلية",
        "comp_inv": "الشركة / الوصل",
        "buyer_rec": "المشتري / المستلم",
        "delivery": "التوصيل",
        "status_h": "الحالة",
        "actions_h": "إجراءات",
        
        // Output Tab
        "output_title": "إخراج وصرف المواد للمشاريع",
        "output_desc": "قم بتسجيل حركات الصرف والاستهلاك، وحالات الإرجاع للموردين",
        "issue_mat_btn": "إخراج وصرف مادة",
        "export_tx_excel": "تصدير سجل الحركات Excel",
        "print_tx_full": "طباعة سجل الحركات الشامل",
        "tx_count": "حركة",
        "tx_hist_title": "سجل الحركات الصادرة والواردة التاريخي للمواد",
        "dt_time": "التاريخ والوقت",
        "tx_type": "نوع الحركة",
        "qty_issued": "الكمية المصروفة",
        "net_value": "القيمة الصافية",
        "resp_buyer": "المسؤول / المشتري",
        "rec_del": "المستلم / المسلّم",
        "reason_det": "السبب والتفاصيل",
        
        // Dashboard
        "comp_table_title": "جدول مقارنة إحصائيات الأقسام الشاملة",
        "dashboard_title_alt": "لوحة التحكم والتحليلات الإحصائية",
        "dashboard_desc_alt": "تحليلات جرد المخزن، الأداء المالي والمصروفات",
        "back_to_cats": "العودة للأقسام الفرعية",

        // Alerts & Config
        "alerts_title": "مركز التنبيهات وإشعارات المخزون الذكي",
        "alerts_desc": "مراقبة فورية للمخزون الحرج، المواد النافدة، والأصناف الراكدة التي لم تستخدم",
        "no_alerts": "لا توجد تنبيهات",
        "users_title": "إدارة مستخدمي المنظومة",
        "add_user_title": "إضافة مستخدم جديد للنظام",
        "user_ph": "اسم الموظف أو المهندس...",
        "add_btn": "إضافة",
        "db_tools_title": "أدوات صيانة قاعدة البيانات والنسخ الاحتياطي",
        "backup_desc1": "قم بتصدير نسخة كاملة من بيانات المخزن والعمليات وحفظها في جهازك بصيغة JSON كإجراء احتياطي.",
        "backup_btn": "تصدير نسخة احتياطية (Backup)",
        "backup_desc2": "قم باستيراد نسخة احتياطية محفوظة مسبقاً لتثبيت البيانات الحالية أو نقلها من جهاز آخر.",
        "reset_desc": "تصفير النظام وإعادة التهيئة للمصنع سيقوم بمسح كافة المواد المدخلة والعمليات. يرجى الحذر!",
        "reset_btn": "تصفير قاعدة البيانات بالكامل",
        "gen_log_title": "سجل العمليات العام (الأحدث أولاً)",
        "user_h": "المستخدم",
        "action_taken": "الإجراء المتخذ",

        // Modals
        "add_modal_title": "إدخال وتخزين شحنة مواد جديدة",
        "mat_name_req": "اسم المادة *",
        "mat_name_ph": "مثال: حديد تسليح 12 ملم تركيا",
        "mat_cat_req": "قسم المادة *",
        "choose_cat": "-- اختر القسم المناسب --",
        "c_elec": "مواد كهربائية",
        "c_plum": "مواد مجاري",
        "c_steel": "مواد حديد",
        "c_tile": "مواد بلاط وكاشي وسيراميك",
        "c_tile_alt": "بلاط وكاشي وسيراميك",
        "c_gyp": "مواد جبسن بورد",
        "c_gyp_alt": "جبسن بورد",
        "c_cem": "مواد إسمنت",
        "c_cem_alt": "إسمنت",
        "c_paint": "مواد دهان",
        "c_paint_alt": "دهان وطلاء",
        "c_int": "مواد داخلية (أبواب ونوافذ)",
        "c_int_alt": "أبواب ونوافذ",
        "c_sup": "مواد مستلزمات يومية",
        "c_sup_alt": "مستلزمات يومية",
        "qty_in_req": "الكمية المدخلة *",
        "unit_req": "وحدة القياس *",
        "choose_unit": "-- اختر الوحدة --",
        "u_pc": "قطعة",
        "u_pill": "حبة",
        "u_bag": "كيس",
        "u_ton": "طن",
        "u_m": "متر",
        "u_m2": "متر مربع",
        "u_m3": "متر مكعب",
        "u_l": "لتر",
        "u_tie": "شدة",
        "u_kg": "كغم",
        "u_roll": "لفة",
        "u_set": "سيت",
        "u_carton": "كرتون",
        "u_barrel": "برميل",
        "u_other": "أخرى (كتابة مخصصة)...",
        "u_other_ph": "اكتب وحدة القياس المخصصة...",
        "unit_p_req": "سعر الوحدة (د.ع) *",
        "calc_total": "السعر الإجمالي المحسوب",
        "alert_limit_req": "حد التنبيه (للكمية الشحيحة) *",
        "alert_limit_ph": "ينبهك النظام عند وصول الكمية لهذا الحد",
        "buyer_req": "اسم المشتري / المسؤول *",
        "buyer_ph": "اسم الشخص الذي اشترى المواد",
        "rec_req": "اسم المستلم في الموقع *",
        "rec_ph": "اسم الشخص الذي استلم الشحنة",
        "comp_op": "الشركة الموردة",
        "comp_ph": "اسم الشركة أو المحل",
        "inv_op": "رقم وصل الشراء",
        "inv_ph": "رقم الفاتورة أو الوصل",
        "del_cost": "سعر التوصيل والتحميل (د.ع)",
        "add_notes": "ملاحظات إضافية",
        "notes_ph": "أية ملاحظات حول الجودة أو الاستخدام...",
        "cancel_btn": "إلغاء",
        "store_mat_btn": "تخزين المادة",
        "edit_modal_title": "تعديل بيانات مادة مخزونة",
        "curr_qty_req": "الكمية المتوفرة حالياً *",
        "new_calc_total": "السعر الإجمالي المحسوب الجديد",
        "update_btn": "تحديث البيانات",
        "issue_modal_title": "إخراج وصرف مادة من المستودع",
        "mat_issue_req": "المادة المراد صرفها *",
        "qty_out_req": "الكمية الصادرة *",
        "op_out_req": "اسم الشخص الذي أخرج المواد (المهندس/المشرف) *",
        "op_out_ph": "من قام بطلب صرف المادة",
        "del_out_req": "اسم الشخص الذي سلّم المواد (أمين المخزن) *",
        "del_out_ph": "من قام بتسليم المواد في المستودع",
        "reason_req": "سبب الإخراج *",
        "r_proj": "استخدام بالمشروع الإنشائي",
        "r_ret": "استرجاع للشركة الموردة",
        "ret_det": "تفاصيل الاسترجاع للشركة",
        "comp_ret_req": "اسم الشركة الموردة *",
        "comp_ret_ph": "الشركة المستلمة للمواد المرتجعة",
        "inv_ret_req": "رقم وصل الاسترجاع *",
        "inv_ret_ph": "رقم وصل المرتجع",
        "ret_del_cost": "سعر التوصيل للمرتجع (د.ع)",
        "done_issue_btn": "إتمام الصرف",

        // Additional Print Strings
        "no_materials": "لا توجد مواد في هذا القسم",
        "total_value_cat": "إجمالي قيمة قسم",
        "total_ops": "إجمالي عدد العمليات",
        "no_tx": "لا توجد حركات مسجلة حالياً في المستودع",
        "currency": "د.ع",
        "print_preview": "معاينة الطباعة للصفحة (A4)",
        "print_now": "طباعة الآن",
        "close": "إغلاق",
        "report_date": "تاريخ التقرير:",
        "current_user": "المستخدم الحالي:",
        "receiver_sign": "توقيع المستلم",
        "store_keeper_sign": "أمين المخزن",
        "project_manager_sign": "مدير المشروع",
        "technical_receiver_sign": "المستلم الفني",
        "mat_entry_receipt": "وصل إدخال وتخزين مواد رقم:",
        "receipt_entry": "وصل إدخال -",
        "no_mats_in_cat": "لا توجد مواد لطباعتها في هذا القسم",
        "individual_receipts": "وصولات فردية -",
        "all_cats": "جميع الأقسام",
        "no_mats_available": "لا توجد مواد متوفرة في هذا القسم حالياً",
        "detailed_inventory": "جرد تفصيلي لقسم:",
        "num_materials": "عدد المواد:",
        "mat_word": "مادة",
        "total_qtys": "إجمالي الكميات:",
        "total_inv_value": "القيمة الإجمالية للمخزون:",
        "cat_report": "تقرير قسم",
        "full_inv_report": "تقرير جرد المستودع العام الشامل",
        "cat_word": "قسم",
        "total_active_items": "إجمالي الأصناف النشطة:",
        "total_store_qtys": "إجمالي كميات المستودع:",
        "total_store_value": "القيمة الكلية للمستودع:",
        "gen_inv_report": "تقرير جرد المستودع العام",
        "total_ops_num": "إجمالي العمليات:",
        "total_purchases_val": "إجمالي قيمة المشتريات:",
        "benaa_tech": "مخزن شريكة <span style='color: var(--accent-color);'>شڤیار</span> لإدارة المشاريع",
        "benaa_tech_desc": "نظام إدارة مخازن مواد البناء المتكامل",
        "print_indiv_all": "طباعة وصولات فردية للكل",
        "print_indiv_cat": "طباعة وصولات فردية للقسم",
        "invoice_label": "وصل:",
        "buyer_label": "شراء:",
        "receiver_label": "استلم:",
        "edit_mat_tooltip": "تعديل المادة",
        "archive_tooltip": "أرشفة المادة",
        "unarchive_tooltip": "إلغاء الأرشفة",
        "print_receipt_tooltip": "طباعة الوصل",
        "delete_tooltip": "حذف نهائي",
        "no_tx_record": "لا توجد أي حركات صرف أو إخراج مسجلة حتى الآن.",
        "tx_in_badge": "وارد (شحنة)",
        "tx_out_badge": "صرف مشروع",
        "tx_return_badge": "مرتجع شركة",
        "reason_label": "السبب:",
        "company_label": "الشركة:",
        "return_receipt_label": "وصل إرجاع:",
        "delivery_cost_label": "سعر التوصيل:",
        "no_alerts_msg": "المخزن سليم تماماً! لا توجد مواد شحيحة، أو نافدة، أو راكدة حالياً.",
        "out_of_stock_badge": "نفاد المادة",
        "out_of_stock_msg1": "الكمية المتوفرة حالياً هي",
        "out_of_stock_msg2": "يرجى تزويد المخزن فوراً.",
        "low_stock_badge": "مخزون حرج",
        "low_stock_msg1": "الكمية الحالية",
        "low_stock_msg2": "وهي أقل من حد الأمان المحدد للقسم",
        "unused_badge": "مادة راكدة",
        "unused_msg1": "لم يطرأ أي استخدام على المادة منذ",
        "unused_msg2": "يوماً. الكمية الراكدة:",
        "days": "يوماً",
        "active_item_badge": "صنف نشط",
        "tx_badge": "حركة",
        "item_word": "صنف",
        "details_btn": "التفاصيل"
    },
    "ku": {
        // Navbar & General
        "nav_dashboard": "تەبلۆیا کۆنترۆل و شیکاری",
        "nav_storage": "هەلگرتن و بڕێڤەبرنا کەرەستەیان",
        "nav_output": "دەرهێنان و خەرجکرنا کەرەستەیان",
        "nav_alerts": "ناڤەندا ئاگه‌هداریان",
        "nav_config": "ڕێکخستن و ژبەرگرتن",
        "title_main": "مخزن شريكة <span style='color: var(--accent-color);'>شڤیار</span>",
        "title_desc": "سیستەمێ تەمام بۆ بڕێڤەبرنا گەنجینە و بزاڤا کەرەستە و پرۆژەیێن ئاڤاکرنێ",
        
        // Portal Cards
        "portal_storage_title": "هەلگرتن و تومارکرنا کەرەستەیان",
        "portal_storage_desc": "تومارکرن و پەسەندکرنا بارێن نوی و هژمارتنا سەرجەمی ب شێوەیێ ئۆتۆماتیکی و دەستکارییا گەنجینەیێ و ئەرشیڤکرنا کەرەستەیان.",
        "portal_storage_btn": "بڕێڤەبرن و هەلگرتنی کەرەستەیان",
        
        "portal_output_title": "دەرهێنان و خەرجکرنا کەرەستەیان",
        "portal_output_desc": "تومارکرنا خەرجکرنا بڕان بۆ پرۆژەیان، و زڤڕاندنا کەرەستەیان بۆ کۆمپانیایان و هژمارتنا بهایێ بارکرن و گەهاندنێ.",
        "portal_output_btn": "خەرجکرن و دەرهێنانی کەرەستەیان",
        
        "portal_dashboard_title": "تەبلۆیا کۆنترۆل و شیکاری",
        "portal_dashboard_desc": "دیڤچوونا ئاستێ دارایی و بهایێ گەنجینەیێ و پێداچوونا بڕان و خەرجییان و کۆمپانیایێن پتر دابینکەر.",
        "portal_dashboard_btn": "چوونە دناڤ تەبلۆیا کۆنترۆلێ",

        "portal_alerts_title": "ناڤەندا ئاگه‌هداریێن زیرەک",
        "portal_alerts_desc": "چاڤدێرییا ئاستێن کێماسییێ و کەرەستەیێن نەفرۆتی.",
        "portal_config_title": "ڕێکخستنێن سیستەمی و ژبەرگرتن",
        "portal_config_desc": "ژبەرگرتنا یەدەگ، فەرمانبەران، و تۆماری کاران.",
        "enter_btn": "چوونە ژوور",

        // Categories
        "cat_electrical": "کەرەستەیێن کارەبایی",
        "cat_plumbing": "کەرەستەیێن مەجاری",
        "cat_steel": "کەرەستەیێن ئاسن",
        "cat_tiles": "کاشی و سەلامیک",
        "cat_gypsum": "جبسن بۆرد",
        "cat_cement": "چیمەنتۆ",
        "cat_paint": "بۆیەی و کەرەستەیێن کیمیایی",
        "cat_hardware": "ئامیر و ئامراز",
        "cat_tools": "ئامراز و ئامیرێن کارکرنێ",
        "cat_other": "کەرەستەیێن دی یێن جوربەجور",
        "active_items": "بابەتێ چالاک",

        // Table Headers & Labels
        "material_name": "ناڤێ کەرەستەی",
        "category": "پشک",
        "quantity": "بڕ",
        "current_qty": "بڕا بەردەست",
        "unit": "یەکە",
        "unit_price": "بهایێ یەکێ",
        "total_price": "بهایێ سەرجەم",
        "inventory_value": "بهایێ گەنجینەیێ",
        "delivery_cost": "بهایێ گەهاندنێ",
        "total_shipping_cost": "سەرجەمێ تێچوویێ بارکرنێ",
        "supplier_company": "کۆمپانیایێ دابینکەر",
        "buyer_name": "کڕیار",
        "receiver_name": "وەرگر",
        "operator_name": "بەرپرس",
        "entry_date": "دەمێ تومارکرنێ",
        "date_time": "مێژوو و دەم",
        "material_status": "ڕەوشا کەرەستەی",
        "notes": "تێبینی",
        "reason": "ئەگەر / تێبینی",
        "invoice_number": "ژمارەیا پسوولێ",
        "operation": "کار",
        "total": "سەرجەم",

        // Status
        "status_active": "چالاک",
        "status_archived": "ئەرشیڤکری",
        "no_notes": "تێبینی نینە",

        // Actions
        "print": "چاپکرن",
        "edit": "دەستکاری",
        "delete": "ژێبرن",
        "save": "پاشکەوتکرن",
        "cancel": "هەلوەشاندن",
        "confirm": "پشتڕاستکرن",

        // Common Texts
        "currency": "د.ع",
        "unspecified": "نەهاتیە دیارکرن",
        "success": "سەرکەفتن",
        "error": "خەلەتی",
        "warning": "ئاگه‌هداری",
        
        "print_date": "دەمێ چاپکرنێ",
        "print_report": "ڕاپۆرت",
        
        // Dashboard & Tables
        "dash_title": "تەبلۆیا کۆنترۆل و شیکارییا ئاماری",
        "dash_desc": "شیکارییا گەنجینەیێ، ئاستێ دارایی و خەرجییان",
        "back_subcats": "زڤڕین بۆ پشکێن لاوەکی",
        "comp_table_title": "خشتەیێ هەڤبەرکرنا ئامارێن پشکان یێن گشتی",
        "main_cat": "پشکا سەرەکی",
        "items_count": "هژمارا بابەتان",
        "total_in": "سەرجەمێ هاتوو (کڕین)",
        "total_out": "بڕێن دەرهاتی",
        "action": "کردار",
        "cat_details": "پێزانینێن پشکێ",
        "cat_details_desc": "خشتەیێ درێژاهی بۆ هەمی کەرەستەیێن ڤێ پشکێ و ئامارێن وان",
        "stock_val_label": "بهایێ گەنجینەیێ:",
        "total_issued_label": "سەرجەمێ خەرجکرنێ:",
        "export_print": "هنارتن و چاپکرن",
        "print_all_cats": "چاپکرنا هەمی پشکان",
        "print_this_cat": "چاپکرنا ڤێ پشکێ",
        "export_excel": "هنارتن بۆ Excel",
        "orig_qty": "بڕا بنەڕەتی",
        "curr_qty": "بڕا بەردەست",
        "curr_val": "بهایێ گەنجینەیا بەردەست",
        "total_purchases": "سەرجەمێ کڕینان",
        "issued_qty": "بڕا خەرجکری",
        "single_print": "چاپکرنا تاک",
        "manage_stock": "بڕێڤەبرنا گەنجینە و سەرژمێریا کەرەستەیان",
        "manage_stock_desc": "کەرەستەیێن ئاڤاکرنێ زێدە بکە و دەستکاری و ئەرشیڤ بکە و دیڤچوونا ئاستێ وان بکە",
        "add_new_mat": "زێدەکرنا کەرەستەیەکێ نوی",
        "print_full_inv": "چاپکرنا سەرژمێریا گشتی",
        "export_full_inv": "هنارتنا سەرژمێریێ ب تەمامی",
        "print_cat": "چاپکرنا پشکەکێ",
        "export_cat_excel": "هنارتنا پشکەکێ بۆ Excel",
        
        // Transaction Types
        "tx_in": "تومارکرنا کەرەستەیان",
        "tx_out": "خەرجکرنا پرۆژەی",
        "tx_return": "زڤڕاندن بۆ کۆمپانیایێ",

        // Storage & Search
        "search_ph": "لێگەڕیان ب ناڤ، دابینکار، کڕیار، ژمارەیا پسوولەیێ...",
        "sort_newest": "رێزکرن ب: نوویترین هاتوو",
        "sort_oldest": "رێزکرن ب: کەڤنترین هاتوو",
        "sort_name_asc": "رێزکرن ب: ناڤ (ئ-ی)",
        "sort_name_desc": "رێزکرن ب: ناڤ (ی-ئ)",
        "sort_qty_desc": "رێزکرن ب: بڕ (ژ پترترین)",
        "sort_qty_asc": "رێزکرن ب: بڕ (ژ کێمترین)",
        "sort_val_desc": "رێزکرن ب: گشتی بهایێ (ژ پترترین)",
        "sort_val_asc": "رێزکرن ب: گشتی بهایێ (ژ کێمترین)",
        "filter_active": "نیشاندان: گەنجینەیا چالاک ب تنێ",
        "filter_archived": "نیشاندان: گەنجینەیا ئەرشیڤکری ب تنێ",
        "filter_all": "نیشاندان: هەمی (چالاک و ئەرشیڤکری)",
        "mat_cat_name": "ناڤێ کەرەستەی / پشک",
        "total_val": "بهایێ گشتی",
        "comp_inv": "کۆمپانیا / پسوولە",
        "buyer_rec": "کڕیار / وەرگر",
        "delivery": "گەهاندن",
        "status_h": "ڕەوش",
        "actions_h": "کردار",
        
        // Output Tab
        "output_title": "دەرهێنان و خەرجکرنا کەرەستەیان بۆ پرۆژەیان",
        "output_desc": "حەرەکاتێن خەرجکرنێ و بکارئینانێ تومار بکە، و حالەتێن زڤڕاندنێ بۆ دابینکاران",
        "issue_mat_btn": "دەرهێنان و خەرجکرنا کەرەستەیەکێ",
        "export_tx_excel": "هنارتنا تۆمارا حەرەکاتان Excel",
        "print_tx_full": "چاپکرنا تۆمارا حەرەکاتان یا گشتی",
        "tx_count": "حەرەکە",
        "tx_hist_title": "تۆمارا دیرۆکی یا حەرەکاتێن دەرکەفتی و هاتوو یێن کەرەستەیان",
        "dt_time": "دەم و ڕێکەوت",
        "tx_type": "جۆرێ حەرەکێ",
        "qty_issued": "بڕا خەرجکری",
        "net_value": "بهایێ پاقژ",
        "resp_buyer": "بەرپرس / کڕیار",
        "rec_del": "وەرگر / ڕادەستکار",
        "reason_det": "ئەگەر و درێژاهی",

        // Dashboard
        "comp_table_title": "خشتەیێ هەڤبەرکرنا سەرژمێرییێن پشکان یێن گشتی",
        "dashboard_title_alt": "تەبلۆیا کۆنترۆل و شیکارییێن سەرژمێریێ",
        "dashboard_desc_alt": "شیکارییێن گەنجینەیێ، کارێ دراڤی و خەرجیان",
        "back_to_cats": "زڤڕین بۆ پشکێن لاوەکی",

        // Alerts & Config
        "alerts_title": "سەنتەرێ ئاگەهدارییان و هایدارکرنێن گەنجینەیا زیرەک",
        "alerts_desc": "چاڤدێرییا دەمودەست بۆ گەنجینەیا هەستیار، کەرەستەیێن خەلاس بووی، و بابەتێن ڕاوەستیای کو نەهاتینە بکارئینان",
        "no_alerts": "ئاگەهداری نینە",
        "users_title": "بڕێڤەبرنا بکارئینەرێن سیستەمی",
        "add_user_title": "زێدەکرنا بکارئینەرەکێ نوی بۆ سیستەمی",
        "user_ph": "ناڤێ فەرمانبەر یان ئەندازیار...",
        "add_btn": "زێدەکرن",
        "db_tools_title": "ئامرازێن چاککرنا داتابەیسێ و کۆپیا یەدەگ",
        "backup_desc1": "کۆپیەکا تەمام ژ داتایێن گەنجینەیێ و حەرەکاتان هنارتە بکە و ل ئامێرێ خۆ ب فۆرماتێ JSON بپارێزە وەک ڕێکارەکا یەدەگ.",
        "backup_btn": "هنارتنا کۆپیەکا یەدەگ (Backup)",
        "backup_desc2": "کۆپیەکا یەدەگ یا بەری نوکە پاراستی ئینپۆرت بکە بۆ جێگیرکرنا داتایێن نوکە یان ڤەگۆهاستنا ژ ئامێرەکێ دی.",
        "reset_desc": "سفرکرنا سیستەمی و ڤەگەڕاندن بۆ کارگەهێ دێ هەمی کەرەستەیێن تومارکری و حەرەکاتان ژێبەت. هیڤیە هایدار بە!",
        "reset_btn": "سفرکرنا داتابەیسێ ب تەمامی",
        "gen_log_title": "تۆمارا حەرەکاتان یا گشتی (نوویترین بەری هەمیان)",
        "user_h": "بکارئینەر",
        "action_taken": "رێکارا وەرگرتی",

        // Modals
        "add_modal_title": "تومارکرن و گەنجینەکرنا بارهەڵگرەکا کەرەستەیێن نوی",
        "mat_name_req": "ناڤێ کەرەستەی *",
        "mat_name_ph": "نموونە: ئاسنێ چەکداری 12 ملم تورکیا",
        "mat_cat_req": "پشکا کەرەستەی *",
        "choose_cat": "-- پشکا گونجای هەلبژێرە --",
        "c_elec": "کەرەستەیێن کارەبایی",
        "c_plum": "کەرەستەیێن مەجاری",
        "c_steel": "کەرەستەیێن ئاسنی",
        "c_tile": "کەرەستەیێن کاشی و سەیرامیک",
        "c_gyp": "کەرەستەیێن جپسن بۆرد",
        "c_cem": "کەرەستەیێن چیمەنتۆ",
        "c_paint": "کەرەستەیێن بۆیاخێ",
        "c_int": "کەرەستەیێن دەرگەهـ و پەنجەرە",
        "c_sup": "کەرەستەیێن پێدڤیێن ڕۆژانە",
        "qty_in_req": "بڕا هاتوو *",
        "unit_req": "یەکەیا پێڤانێ *",
        "choose_unit": "-- یەکەیێ هەلبژێرە --",
        "u_pc": "پارچە",
        "u_pill": "دەنک",
        "u_bag": "کیس",
        "u_ton": "تەن",
        "u_m": "مەتر",
        "u_m2": "مەتر دووجا",
        "u_m3": "مەتر سێجا",
        "u_l": "لتر",
        "u_tie": "شەدە",
        "u_kg": "کگم",
        "u_roll": "لۆلە",
        "u_set": "سێت",
        "u_carton": "کارتۆن",
        "u_barrel": "بەرمیل",
        "u_other": "دیتر (نڤیسینا تایبەت)...",
        "u_other_ph": "یەکەیا پێڤانێ یا تایبەت بنڤیسە...",
        "unit_p_req": "بهایێ یەکەیێ (د.ع) *",
        "calc_total": "بهایێ گشتی یێ هەژمارکری",
        "alert_limit_req": "سنوورێ ئاگەهداریێ (بۆ بڕا کێم) *",
        "alert_limit_ph": "سیستەم تە ئاگەهدار دکەت دەمێ بڕ دگەهیتە ڤی سنووری",
        "buyer_req": "ناڤێ کڕیار / بەرپرس *",
        "buyer_ph": "ناڤێ وی کەسێ کەرەستە کڕین",
        "rec_req": "ناڤێ وەرگر ل جهێ کاری *",
        "rec_ph": "ناڤێ وی کەسێ بار وەرگرتی",
        "comp_op": "کۆمپانیای دابینکار",
        "comp_ph": "ناڤێ کۆمپانیا یان جهـ",
        "inv_op": "ژمارەیا پسوولەیا کڕینێ",
        "inv_ph": "ژمارەیا پسوولەیێ یان لیستا خەرجیێ",
        "del_cost": "بهایێ گەهاندن و بارکرنێ (د.ع)",
        "add_notes": "تێبینیێن زێدە",
        "notes_ph": "هەر تێبینیەک ل دور کوالێتی یان بکارئینانێ...",
        "cancel_btn": "هەلوەشاندن",
        "store_mat_btn": "گەنجینەکرنا کەرەستەی",
        "edit_modal_title": "دەستکاریا پێزانینێن کەرەستەیێ گەنجینەکری",
        "curr_qty_req": "بڕا نوکە یا بەردەست *",
        "new_calc_total": "بهایێ گشتی یێ هەژمارکری یێ نوی",
        "update_btn": "نویکرنا پێزانینان",
        "issue_modal_title": "دەرهێنان و خەرجکرنا کەرەستەیەکێ ژ کۆگەهێ",
        "mat_issue_req": "ئەو کەرەستەیا دڤێت بهێتە خەرجکرن *",
        "qty_out_req": "بڕا دەرهاتی *",
        "op_out_req": "ناڤێ وی کەسێ کەرەستە دەرهێناین (ئەندازیار/سەرپەرشت) *",
        "op_out_ph": "کێ داخوازا خەرجکرنا کەرەستەی کریە",
        "del_out_req": "ناڤێ وی کەسێ کەرەستە ڕادەست کرین (ئەمیندارێ کۆگەهێ) *",
        "del_out_ph": "کێ کەرەستە ل کۆگەهێ ڕادەست کرینە",
        "reason_req": "ئەگەرێ دەرهێنانێ *",
        "r_proj": "بکارئینان د پرۆژەیێ ئاڤاکرنێ دا",
        "r_ret": "زڤڕاندن بۆ کۆمپانیای دابینکار",
        "ret_det": "پێزانینێن زڤڕاندنێ بۆ کۆمپانیایێ",
        "comp_ret_req": "ناڤێ کۆمپانیای دابینکار *",
        "comp_ret_ph": "ئەو کۆمپانیای کەرەستەیێن زڤڕاندی وەرگرتین",
        "inv_ret_req": "ژمارەیا پسوولەیا زڤڕاندنێ *",
        "inv_ret_ph": "ژمارەیا پسوولەیا زڤڕاندنێ",
        "ret_del_cost": "بهایێ گەهاندنێ بۆ یێ زڤڕاندی (د.ع)",
        "done_issue_btn": "تەمامکرنا خەرجکرنێ",

        // Additional Print Strings
        "no_materials": "چ کەرەستە د ڤێ پشکێ دا نینن",
        "total_value_cat": "بهایێ گشتی یێ پشکا",
        "total_ops": "هژمارا گشتی یا حەرەکاتان",
        "no_tx": "چ حەرەکە ل کۆگەهێ نەهاتینە تۆمارکرن",
        "currency": "د.ع",
        "print_preview": "پێشاندانا چاپکرنێ بۆ لاپەرەی (A4)",
        "print_now": "نوکە چاپ بکە",
        "close": "داخستن",
        "report_date": "ڕێکەفتا ڕاپۆرتێ:",
        "current_user": "بکارئینەرێ نوکە:",
        "receiver_sign": "ئیمزایا وەرگرتی",
        "store_keeper_sign": "ئەمیندارێ کۆگەهێ",
        "project_manager_sign": "بڕێڤەبەرێ پرۆژەی",
        "technical_receiver_sign": "وەرگرێ تەکنیکی",
        "mat_entry_receipt": "پسوولەیا تومارکرن و هەلگرتنا کەرەستەیان ژمارە:",
        "receipt_entry": "پسوولەیا تومارکرنێ -",
        "no_mats_in_cat": "چ کەرەستە بۆ چاپکرنێ د ڤێ پشکێ دا نینن",
        "individual_receipts": "پسوولەیێن تاک -",
        "all_cats": "هەمی پشک",
        "no_mats_available": "چ کەرەستە د ڤێ پشکێ دا نینن ل ڤی دەمی",
        "detailed_inventory": "سەرژمێرییا درێژاهی بۆ پشکا:",
        "num_materials": "هژمارا کەرەستەیان:",
        "mat_word": "کەرەستە",
        "total_qtys": "سەرجەمێ بڕان:",
        "total_inv_value": "بهایێ گشتی یێ گەنجینەیێ:",
        "cat_report": "ڕاپۆرتا پشکا",
        "full_inv_report": "ڕاپۆرتا سەرژمێرییا گەنجینەیا گشتی یا تەمام",
        "cat_word": "پشکا",
        "total_active_items": "سەرجەمێ بابەتێن چالاک:",
        "total_store_qtys": "سەرجەمێ بڕێن کۆگەهێ:",
        "total_store_value": "بهایێ گشتی یێ کۆگەهێ:",
        "gen_inv_report": "ڕاپۆرتا سەرژمێرییا گەنجینەیا گشتی",
        "total_ops_num": "سەرجەمێ کاران:",
        "total_purchases_val": "سەرجەمێ بهایێ کڕینان:",
        "benaa_tech": "مخزن شريكة <span style='color: var(--accent-color);'>شڤیار</span> بۆ بڕێڤەبرنا پرۆژەیان",
        "benaa_tech_desc": "سیستەمێ تەمام بۆ بڕێڤەبرنا گەنجینەیێن کەرەستەیێن ئاڤاکرنێ",
        "print_indiv_all": "چاپکرنا پسوولەیێن تاک بۆ هەمیان",
        "print_indiv_cat": "چاپکرنا پسوولەیێن تاک بۆ پشکێ",
        "invoice_label": "پسوولە:",
        "buyer_label": "کڕیار:",
        "receiver_label": "وەرگرت:",
        "edit_mat_tooltip": "دەستکارییا کەرەستەی",
        "archive_tooltip": "ئەرشیڤکرنا کەرەستەی",
        "unarchive_tooltip": "هەلوەشاندنا ئەرشیڤکرنێ",
        "print_receipt_tooltip": "چاپکرنا پسوولەیێ",
        "delete_tooltip": "ژێبرنا ئێکجاری",
        "no_tx_record": "چ حەرەکاتێن خەرجکرنێ یان دەرهێنانێ نەهاتینە تۆمارکرن.",
        "tx_in_badge": "هاتنا بارێ",
        "tx_out_badge": "خەرجی پرۆژەی",
        "tx_return_badge": "زڤڕاندنا بۆ کۆمپانیایێ",
        "reason_label": "ئەگەر:",
        "company_label": "کۆمپانیا:",
        "return_receipt_label": "پسوولەیا زڤڕاندنێ:",
        "delivery_cost_label": "بهایێ گەهاندنێ:",
        "no_alerts_msg": "کۆگەهـ ب تەمامی یێ باشە! چ کەرەستەیێن کێم، یان خەلاس بووی، یان ڕاوەستیای نینن.",
        "out_of_stock_badge": "خەلاس بوونا کەرەستەی",
        "out_of_stock_msg1": "بڕا بەردەست ل ڤی دەمی",
        "out_of_stock_msg2": "یە. هیڤیە ب زوترین دەم کۆگەهێ تژی بکە.",
        "low_stock_badge": "گەنجینەیا مەترسیدار",
        "low_stock_msg1": "بڕا نوکە",
        "low_stock_msg2": "یە و ئەڤە کێمترە ژ ڕێژەیا ئەمانەیا دیارکری بۆ پشکێ",
        "unused_badge": "کەرەستەیێ ڕاوەستیای",
        "unused_msg1": "چ بکارئینان بۆ کەرەستەی نەهاتیە کرن ژ",
        "unused_msg2": "ڕۆژان. بڕا ڕاوەستیای:",
        "days": "ڕۆژان",
        "active_item_badge": "بابەتێ چالاک",
        "tx_badge": "حەرەکە",
        "item_word": "بابەت",
        "details_btn": "درێژاهی"
    }
};

let currentLang = localStorage.getItem('appLang') || 'ar';

// Create a reverse mapping for automatic DOM translation
const reverseArMap = {};
for (const key in translations.ar) {
    reverseArMap[translations.ar[key].trim()] = key;
}

function t(key) {
    if (translations[currentLang] && translations[currentLang][key]) {
        return translations[currentLang][key];
    }
    return key;
}

function autoTranslateDOM(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.nodeValue.trim();
        if (text === '') return;
        
        // Save original Arabic text if not saved
        if (!node.originalArText) {
            if (reverseArMap[text]) {
                node.originalArText = text;
                node.i18nKey = reverseArMap[text];
            } else {
                // If the site is already in Kurdish, we might have lost the Arabic.
                // It's best to always load the page in Arabic first, or rely on data-i18n.
            }
        }

        if (node.i18nKey && translations[currentLang][node.i18nKey]) {
            node.nodeValue = node.nodeValue.replace(node.originalArText || text, translations[currentLang][node.i18nKey]);
            // If we switch back to Arabic, we must replace the Kurdish text with Arabic text
            if (currentLang === 'ar') {
                node.originalArText = translations['ar'][node.i18nKey]; 
            } else {
                node.originalArText = translations['ku'][node.i18nKey]; // Temporarily hold the current language text so it can be replaced later
            }
        }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE') return;

        // Translate placeholders
        if (node.placeholder) {
            let pText = node.placeholder.trim();
            if (!node.origPlaceholderKey && reverseArMap[pText]) {
                node.origPlaceholderKey = reverseArMap[pText];
            }
            if (node.origPlaceholderKey && translations[currentLang][node.origPlaceholderKey]) {
                node.placeholder = translations[currentLang][node.origPlaceholderKey];
            }
        }
        
        for (let child of node.childNodes) {
            autoTranslateDOM(child);
        }
    }
}

function changeLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLang = lang;
    localStorage.setItem('appLang', lang);
    
    document.documentElement.lang = lang;
    document.documentElement.dir = 'rtl'; 
    
    // 1. Update elements with explicit data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (translations[currentLang][key].includes('<')) {
                el.innerHTML = translations[currentLang][key];
            } else {
                el.innerText = translations[currentLang][key];
            }
        }
    });

    // 2. Auto translate the rest of the DOM
    autoTranslateDOM(document.body);

    // Dispatch event so other components (charts, db re-render) can update
    window.dispatchEvent(new Event('languageChanged'));
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // Initial translation pass
    changeLanguage(currentLang);
});
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
