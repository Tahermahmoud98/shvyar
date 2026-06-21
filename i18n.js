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
