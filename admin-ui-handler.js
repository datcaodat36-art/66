// =======================================
// ADMIN UI HANDLER
// Đăng nhập Admin (Firebase Auth) + Quản lý Công cụ / Danh mục / Giao diện
// / Backup-Restore, tất cả đọc/ghi qua Firebase Realtime Database.
// Không có đăng ký, không có tài khoản người dùng thường.
// =======================================

class AdminUIHandler {
  constructor() {
    this.adminModal = null;
    this.currentEditingToolId = null;

    // Tìm kiếm & phân trang cho danh sách công cụ trong Admin Panel
    this.toolsSearchQuery = "";
    this.toolsCurrentPage = 1;
    this.toolsPerPage = 10;

    this.init();
  }

  init() {
    // Get DOM elements
    this.adminModal = document.getElementById("adminModal");
    this.adminToggle = document.getElementById("adminToggle");
    this.adminClose = document.getElementById("adminClose");
    this.adminMessage = document.getElementById("adminMessage");

    this.loginForm = document.getElementById("loginForm");
    this.authContainer = document.getElementById("adminAuthContainer");
    this.panelContainer = document.getElementById("adminPanelContainer");

    this.setupEventListeners();

    // Phản ứng theo thời gian thực với trạng thái đăng nhập Firebase: mỗi
    // khi đăng nhập/đăng xuất (kể cả lần đầu tải trang khôi phục phiên cũ),
    // tự bật/khóa Admin Panel tương ứng. Đây là điểm khóa DUY NHẤT quyết
    // định hiển thị Admin Panel hay không.
    adminAuth.onAuthChange((user) => {
      if (user) {
        this.showAdminPanel();
      } else {
        this.showAuthPanel();
      }
    });
  }

  setupEventListeners() {
    if (this.adminToggle) {
      this.adminToggle.addEventListener("click", () => this.openAdminModal());
    }
    if (this.adminClose) {
      this.adminClose.addEventListener("click", () => this.closeAdminModal());
    }

    if (this.loginForm) {
      this.loginForm.addEventListener("submit", (e) => this.handleLogin(e));
    }

    // Admin tabs
    document.querySelectorAll(".admin-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => this.switchAdminTab(btn.dataset.tab));
    });

    // Sub tabs (Thêm / Sửa / Danh sách công cụ)
    document.querySelectorAll(".admin-sub-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => this.switchSubTab(btn.dataset.subTab));
    });

    const logoutBtn = document.getElementById("adminLogout");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => this.handleLogout());
    }

    // ---- Quản lý công cụ ----
    const addToolForm = document.getElementById("addToolForm");
    if (addToolForm) {
      addToolForm.addEventListener("submit", (e) => this.handleAddTool(e));
    }

    const editToolSelect = document.getElementById("editToolSelect");
    if (editToolSelect) {
      editToolSelect.addEventListener("change", () => this.handleToolSelect());
    }

    const editToolForm = document.getElementById("editToolForm");
    if (editToolForm) {
      editToolForm.addEventListener("submit", (e) => this.handleEditTool(e));
    }

    const deleteToolBtn = document.getElementById("deleteToolBtn");
    if (deleteToolBtn) {
      deleteToolBtn.addEventListener("click", () => this.handleDeleteTool());
    }

    const toolsSearchInput = document.getElementById("toolsSearchInput");
    if (toolsSearchInput) {
      toolsSearchInput.addEventListener("input", () => {
        this.toolsSearchQuery = toolsSearchInput.value.trim().toLowerCase();
        this.toolsCurrentPage = 1;
        this.renderToolsList();
      });
    }

    // ---- Danh mục ----
    const addCategoryForm = document.getElementById("addCategoryForm");
    if (addCategoryForm) {
      addCategoryForm.addEventListener("submit", (e) => this.handleAddCategory(e));
    }

    // ---- Dashboard: nhập dữ liệu mặc định ----
    const seedBtn = document.getElementById("seedDefaultDataBtn");
    if (seedBtn) {
      seedBtn.addEventListener("click", () => this.handleSeedDefaultData());
    }

    // ---- Backup / Restore ----
    const exportBtn = document.getElementById("exportDataBtn");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => this.handleExportData());
    }
    const importBtn = document.getElementById("importDataBtn");
    if (importBtn) {
      importBtn.addEventListener("click", () => this.handleImportData());
    }

    // ---- Cài đặt giao diện & tên website ----
    const siteSettingsForm = document.getElementById("siteSettingsForm");
    if (siteSettingsForm) {
      siteSettingsForm.addEventListener("submit", (e) => this.handleSaveSiteSettings(e));
    }

    const resetSiteSettingsBtn = document.getElementById("resetSiteSettingsBtn");
    if (resetSiteSettingsBtn) {
      resetSiteSettingsBtn.addEventListener("click", () => this.handleResetSiteSettings());
    }
  }

  // ============ Modal Management ============
  openAdminModal() {
    if (this.adminModal) {
      this.adminModal.classList.remove("hidden");
    }
  }

  closeAdminModal() {
    if (this.adminModal) {
      this.adminModal.classList.add("hidden");
    }
  }

  // ============ Authentication (Firebase, chỉ 1 Admin, không đăng ký) ============
  async handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const submitBtn = this.loginForm.querySelector('button[type="submit"]');

    if (submitBtn) submitBtn.disabled = true;
    const result = await adminAuth.login(email, password);
    if (submitBtn) submitBtn.disabled = false;

    if (result.success) {
      this.showMessage(t(result.code), "success");
      this.loginForm.reset();
      // adminAuth.onAuthChange (đăng ký ở init()) sẽ tự mở Admin Panel.
    } else {
      this.showMessage(t(result.code), "error");
    }
  }

  async handleLogout() {
    if (confirm(t("admin_confirm_logout"))) {
      await adminAuth.logout();
      this.showMessage(t("admin_logout_success_msg"), "success");
      // adminAuth.onAuthChange sẽ tự quay về màn hình đăng nhập.
    }
  }

  // Chặn mọi hành động ghi dữ liệu khi Firebase chưa cấu hình hoặc chưa
  // đăng nhập Admin — lớp khóa UI, bên cạnh Firebase Security Rules ở server.
  canWrite() {
    if (!adminAuth.isLoggedIn()) {
      this.showMessage(t("auth_err_not_logged_in"), "error");
      return false;
    }
    if (!firebaseDb) {
      this.showMessage(t("auth_err_firebase_not_configured"), "error");
      return false;
    }
    return true;
  }

  // ============ Admin Panel Display ============
  showAuthPanel() {
    if (this.authContainer) this.authContainer.classList.remove("hidden");
    if (this.panelContainer) this.panelContainer.classList.add("hidden");
  }

  showAdminPanel() {
    if (this.authContainer) this.authContainer.classList.add("hidden");
    if (this.panelContainer) this.panelContainer.classList.remove("hidden");

    const user = adminAuth.getCurrentUser();
    if (user) {
      const emailEl = document.getElementById("currentEmail");
      if (emailEl) emailEl.textContent = user.email;
    }

    this.switchAdminTab("dashboard");
    this.populateCategorySelects();
    this.renderDashboardStats();
    this.renderCategoriesList();
    this.loadEditToolSelect();
    this.renderToolsList();
  }

  // ============ Admin Tabs ============
  switchAdminTab(tab) {
    const tabContentMap = {
      "dashboard": "dashboardTab",
      "manage-tools": "manageToolsTab",
      "manage-categories": "manageCategoriesTab",
      "backup": "backupTab",
      "site-settings": "siteSettingsTab"
    };
    const contentId = tabContentMap[tab] || (tab + "Tab");

    if (tab === "site-settings") this.loadSiteSettingsForm();
    if (tab === "dashboard") this.renderDashboardStats();
    if (tab === "manage-categories") this.renderCategoriesList();
    if (tab === "manage-tools") this.renderToolsList();

    document.querySelectorAll(".admin-tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tab);
    });

    document.querySelectorAll(".admin-tab-content").forEach(content => {
      const isActive = content.id === contentId;
      content.classList.toggle("active", isActive);
      content.classList.toggle("hidden", !isActive);
    });
  }

  switchSubTab(subTab) {
    const subTabContentMap = {
      "add-tool": "addToolSub",
      "edit-tool": "editToolSub",
      "list-tools": "listToolsSub"
    };
    const contentId = subTabContentMap[subTab] || (subTab + "Sub");

    document.querySelectorAll(".admin-sub-tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.subTab === subTab);
    });

    document.querySelectorAll(".admin-sub-tab-content").forEach(content => {
      const isActive = content.id === contentId;
      content.classList.toggle("active", isActive);
      content.classList.toggle("hidden", !isActive);
    });
  }

  // ============ Dashboard ============
  renderDashboardStats() {
    const container = document.getElementById("dashboardStats");
    if (!container) return;

    const totalTools = aiTools.length;
    const totalCategories = currentCategories.length;
    const freeTools = aiTools.filter(tool => tool.badge === "free").length;
    const apiTools = aiTools.filter(tool => tool.hasApi).length;

    container.innerHTML = `
      <div class="stat-card">
        <div class="stat-value">${totalTools}</div>
        <div class="stat-label">${t("admin_dashboard_stat_tools")}</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${totalCategories}</div>
        <div class="stat-label">${t("admin_dashboard_stat_categories")}</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${freeTools}</div>
        <div class="stat-label">${t("admin_dashboard_stat_free")}</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${apiTools}</div>
        <div class="stat-label">${t("admin_dashboard_stat_api")}</div>
      </div>
    `;
  }

  async handleSeedDefaultData() {
    if (!this.canWrite()) return;
    if (!confirm(t("admin_dashboard_seed_confirm"))) return;

    try {
      const toolsMap = {};
      DEFAULT_TOOLS_SEED.forEach(tool => { toolsMap[tool.id] = tool; });

      const categoriesMap = {};
      DEFAULT_CATEGORIES.forEach(cat => { categoriesMap[cat.slug] = cat; });

      await firebaseDb.ref("tools").set(toolsMap);
      await firebaseDb.ref("categories").set(categoriesMap);

      this.showMessage(t("admin_dashboard_seed_success"), "success");
    } catch (err) {
      console.error(err);
      this.showMessage(t("admin_dashboard_seed_error"), "error");
    }
  }

  // ============ Quản lý Danh mục ============
  populateCategorySelects() {
    ["toolCategory", "editToolCategory"].forEach(id => {
      const select = document.getElementById(id);
      if (!select) return;
      const currentValue = select.value;

      const placeholder = select.querySelector('option[value=""]');
      select.innerHTML = "";
      if (placeholder) select.appendChild(placeholder);
      else {
        const opt = document.createElement("option");
        opt.value = "";
        opt.textContent = t("admin_option_select_category");
        select.appendChild(opt);
      }

      currentCategories.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat.slug;
        const label = localizedText({ vi: cat.labelVi, en: cat.labelEn }) || cat.slug;
        opt.textContent = cat.icon ? `${cat.icon} ${label}` : label;
        select.appendChild(opt);
      });

      if (currentValue) select.value = currentValue;
    });
  }

  renderCategoriesList() {
    const container = document.getElementById("categoriesListContainer");
    if (!container) return;

    if (currentCategories.length === 0) {
      container.innerHTML = `<p class="no-data">${t("admin_no_categories")}</p>`;
      return;
    }

    container.innerHTML = currentCategories.map(cat => `
      <div class="category-item">
        <div class="category-item-info">
          <span class="category-item-icon">${cat.icon || ""}</span>
          <span class="category-item-name">${this.escapeHtml(cat.labelVi)} / ${this.escapeHtml(cat.labelEn)}</span>
          <span class="category-item-slug">(${this.escapeHtml(cat.slug)})</span>
        </div>
        <button type="button" class="btn btn-danger btn-sm category-delete-btn" data-slug="${this.escapeHtml(cat.slug)}">
          ${t("admin_cat_delete_btn")}
        </button>
      </div>
    `).join("");

    container.querySelectorAll(".category-delete-btn").forEach(btn => {
      btn.addEventListener("click", () => this.handleDeleteCategory(btn.dataset.slug));
    });
  }

  async handleAddCategory(e) {
    e.preventDefault();
    if (!this.canWrite()) return;

    const slug = document.getElementById("categorySlug").value.trim().toLowerCase().replace(/\s+/g, "-");
    const icon = document.getElementById("categoryIcon").value.trim();
    const labelVi = document.getElementById("categoryLabelVi").value.trim();
    const labelEn = document.getElementById("categoryLabelEn").value.trim();

    if (!slug || !labelVi || !labelEn) {
      this.showMessage(t("admin_cat_err_fill_all"), "error");
      return;
    }

    if (currentCategories.some(cat => cat.slug === slug)) {
      this.showMessage(t("admin_cat_err_slug_exists"), "error");
      return;
    }

    try {
      await firebaseDb.ref("categories/" + slug).set({ slug, icon, labelVi, labelEn });
      this.showMessage(t("admin_cat_add_success"), "success");
      document.getElementById("addCategoryForm").reset();
    } catch (err) {
      console.error(err);
      this.showMessage(t("auth_err_generic"), "error");
    }
  }

  async handleDeleteCategory(slug) {
    if (!this.canWrite()) return;

    const inUse = aiTools.some(tool => tool.category === slug);
    if (inUse) {
      this.showMessage(t("admin_cat_err_in_use"), "error");
      return;
    }

    if (!confirm(t("admin_cat_confirm_delete"))) return;

    try {
      await firebaseDb.ref("categories/" + slug).remove();
      this.showMessage(t("admin_cat_delete_success"), "success");
    } catch (err) {
      console.error(err);
      this.showMessage(t("auth_err_generic"), "error");
    }
  }

  // ============ Quản lý Công cụ (đọc/ghi trực tiếp trên Firebase) ============
  buildToolObjectFromForm(prefix) {
    const get = (id) => {
      const el = document.getElementById(id);
      return el ? el.value : "";
    };
    const getChecked = (id) => {
      const el = document.getElementById(id);
      return el ? el.checked : false;
    };

    return {
      name: get(prefix + "Name").trim(),
      category: get(prefix + "Category"),
      icon: get(prefix + "Icon").trim() || "🤖",
      logo: get(prefix + "Slug").trim(),
      description: {
        vi: get(prefix + "DescVi").trim(),
        en: get(prefix + "DescEn").trim()
      },
      badge: get(prefix + "Price") || "free",
      rating: parseFloat(get(prefix + "Rating") || "0") || 0,
      link: get(prefix + "Website").trim() || "#",
      hasApi: getChecked(prefix + "HasApi")
    };
  }

  async handleAddTool(e) {
    e.preventDefault();
    if (!this.canWrite()) return;

    const toolData = this.buildToolObjectFromForm("tool");

    if (!toolData.name || !toolData.category) {
      this.showMessage(t("admin_err_fill_name_category"), "error");
      return;
    }

    const newId = Math.max(...aiTools.map(tool => tool.id || 0), 0) + 1;
    const newTool = { id: newId, ...toolData, addedAt: new Date().toISOString() };

    try {
      await firebaseDb.ref("tools/" + newId).set(newTool);
      this.showMessage(t("admin_add_tool_success"), "success");
      document.getElementById("addToolForm").reset();
    } catch (err) {
      console.error(err);
      this.showMessage(t("auth_err_generic"), "error");
    }
  }

  loadEditToolSelect() {
    const select = document.getElementById("editToolSelect");
    if (!select) return;

    const currentValue = select.value;
    select.innerHTML = `<option value="">${t("admin_option_select_tool")}</option>`;

    [...aiTools]
      .sort((a, b) => a.name.localeCompare(b.name, currentLang))
      .forEach(tool => {
        const option = document.createElement("option");
        option.value = tool.id;
        option.textContent = `${tool.icon} ${tool.name}`;
        select.appendChild(option);
      });

    if (currentValue) select.value = currentValue;
  }

  handleToolSelect() {
    const toolId = document.getElementById("editToolSelect").value;

    if (!toolId) {
      document.getElementById("editToolFields").classList.add("hidden");
      this.currentEditingToolId = null;
      return;
    }

    const tool = aiTools.find(t => String(t.id) === String(toolId));
    if (!tool) return;

    this.currentEditingToolId = tool.id;
    document.getElementById("editToolName").value = tool.name || "";
    document.getElementById("editToolCategory").value = tool.category || "";
    document.getElementById("editToolIcon").value = tool.icon || "";
    document.getElementById("editToolSlug").value = tool.logo || "";
    document.getElementById("editToolDescVi").value = (tool.description && tool.description.vi) || "";
    document.getElementById("editToolDescEn").value = (tool.description && tool.description.en) || "";
    document.getElementById("editToolPrice").value = tool.badge || "free";
    document.getElementById("editToolRating").value = tool.rating || 0;
    document.getElementById("editToolWebsite").value = tool.link || "";
    document.getElementById("editToolHasApi").checked = !!tool.hasApi;

    document.getElementById("editToolFields").classList.remove("hidden");
  }

  async handleEditTool(e) {
    e.preventDefault();
    if (!this.canWrite()) return;

    if (!this.currentEditingToolId) {
      this.showMessage(t("admin_err_select_tool_edit"), "error");
      return;
    }

    const toolData = this.buildToolObjectFromForm("editTool");
    if (!toolData.name || !toolData.category) {
      this.showMessage(t("admin_err_fill_name_category"), "error");
      return;
    }

    const existing = aiTools.find(t => String(t.id) === String(this.currentEditingToolId)) || {};
    const updatedTool = {
      ...existing,
      ...toolData,
      id: this.currentEditingToolId
    };

    try {
      await firebaseDb.ref("tools/" + this.currentEditingToolId).set(updatedTool);
      this.showMessage(t("admin_update_success"), "success");
    } catch (err) {
      console.error(err);
      this.showMessage(t("auth_err_generic"), "error");
    }
  }

  async handleDeleteTool() {
    if (!this.canWrite()) return;

    if (!this.currentEditingToolId) {
      this.showMessage(t("admin_err_select_tool_delete"), "error");
      return;
    }

    if (!confirm(t("admin_confirm_delete_tool"))) return;

    try {
      await firebaseDb.ref("tools/" + this.currentEditingToolId).remove();

      document.getElementById("editToolSelect").value = "";
      document.getElementById("editToolFields").classList.add("hidden");
      this.currentEditingToolId = null;

      this.showMessage(t("admin_delete_tool_success"), "success");
    } catch (err) {
      console.error(err);
      this.showMessage(t("auth_err_generic"), "error");
    }
  }

  // Danh sách công cụ trong Admin Panel: có tìm kiếm + phân trang
  renderToolsList() {
    const container = document.getElementById("toolsList");
    const paginationEl = document.getElementById("toolsPagination");
    if (!container) return;

    let filtered = aiTools;
    if (this.toolsSearchQuery) {
      filtered = filtered.filter(tool =>
        (tool.name || "").toLowerCase().includes(this.toolsSearchQuery)
      );
    }
    filtered = [...filtered].sort((a, b) => (b.id || 0) - (a.id || 0));

    if (filtered.length === 0) {
      container.innerHTML = `<p class="no-data">${t("admin_no_tools")}</p>`;
      if (paginationEl) paginationEl.innerHTML = "";
      return;
    }

    const totalPages = Math.max(1, Math.ceil(filtered.length / this.toolsPerPage));
    if (this.toolsCurrentPage > totalPages) this.toolsCurrentPage = totalPages;
    const startIdx = (this.toolsCurrentPage - 1) * this.toolsPerPage;
    const pageItems = filtered.slice(startIdx, startIdx + this.toolsPerPage);

    container.innerHTML = pageItems.map(tool => `
      <div class="tool-item">
        <div class="tool-item-header">
          <h5>${tool.icon || ""} ${this.escapeHtml(tool.name)}</h5>
          <span class="tool-category">${this.escapeHtml(tool.category)}</span>
        </div>
        <p class="tool-item-desc">${this.escapeHtml(localizedText(tool.description))}</p>
        <div class="tool-item-info">
          <span>⭐ ${tool.rating}</span>
          <span>💵 ${tool.badge}</span>
          ${tool.hasApi ? `<span>🔌 API</span>` : ""}
        </div>
      </div>
    `).join("");

    if (paginationEl) {
      if (totalPages <= 1) {
        paginationEl.innerHTML = "";
      } else {
        paginationEl.innerHTML = `
          <button type="button" class="btn btn-secondary btn-sm" id="toolsPagePrev" ${this.toolsCurrentPage <= 1 ? "disabled" : ""}>${t("admin_pagination_prev")}</button>
          <span class="pagination-info">${t("admin_pagination_page_of").replace("{current}", this.toolsCurrentPage).replace("{total}", totalPages)}</span>
          <button type="button" class="btn btn-secondary btn-sm" id="toolsPageNext" ${this.toolsCurrentPage >= totalPages ? "disabled" : ""}>${t("admin_pagination_next")}</button>
        `;
        const prevBtn = document.getElementById("toolsPagePrev");
        const nextBtn = document.getElementById("toolsPageNext");
        if (prevBtn) prevBtn.addEventListener("click", () => {
          this.toolsCurrentPage = Math.max(1, this.toolsCurrentPage - 1);
          this.renderToolsList();
        });
        if (nextBtn) nextBtn.addEventListener("click", () => {
          this.toolsCurrentPage = Math.min(totalPages, this.toolsCurrentPage + 1);
          this.renderToolsList();
        });
      }
    }
  }

  // ============ Backup / Restore / Import / Export ============
  handleExportData() {
    const backup = {
      exportedAt: new Date().toISOString(),
      tools: aiTools,
      categories: currentCategories,
      siteSettings: getSiteSettings()
    };

    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `thong-tin-ai-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  handleImportData() {
    if (!this.canWrite()) return;

    const fileInput = document.getElementById("importDataFile");
    const file = fileInput && fileInput.files && fileInput.files[0];

    if (!file) {
      this.showMessage(t("admin_backup_import_select_file"), "error");
      return;
    }

    if (!confirm(t("admin_backup_import_confirm"))) return;

    const reader = new FileReader();
    reader.onload = async () => {
      let data;
      try {
        data = JSON.parse(reader.result);
      } catch (err) {
        this.showMessage(t("admin_backup_import_invalid_file"), "error");
        return;
      }

      try {
        if (Array.isArray(data.tools)) {
          const toolsMap = {};
          data.tools.forEach(tool => { if (tool && tool.id != null) toolsMap[tool.id] = tool; });
          await firebaseDb.ref("tools").set(toolsMap);
        }

        if (Array.isArray(data.categories)) {
          const categoriesMap = {};
          data.categories.forEach(cat => { if (cat && cat.slug) categoriesMap[cat.slug] = cat; });
          await firebaseDb.ref("categories").set(categoriesMap);
        }

        if (data.siteSettings) {
          await firebaseDb.ref("siteSettings").set(data.siteSettings);
        }

        this.showMessage(t("admin_backup_import_success"), "success");
        fileInput.value = "";
      } catch (err) {
        console.error(err);
        this.showMessage(t("admin_backup_import_error"), "error");
      }
    };
    reader.readAsText(file);
  }

  // ============ Site Settings (tên website + màu giao diện) ============
  loadSiteSettingsForm() {
    const settings = getSiteSettings();
    const nameInput = document.getElementById("siteSettingName");
    const primaryInput = document.getElementById("siteColorPrimary");
    const primaryDarkInput = document.getElementById("siteColorPrimaryDark");
    const backgroundInput = document.getElementById("siteColorBackground");
    const textInput = document.getElementById("siteColorText");

    if (nameInput) nameInput.value = settings.siteName;
    if (primaryInput) primaryInput.value = settings.colors.primary;
    if (primaryDarkInput) primaryDarkInput.value = settings.colors.primaryDark;
    if (backgroundInput) backgroundInput.value = settings.colors.background;
    if (textInput) textInput.value = settings.colors.text;
  }

  async handleSaveSiteSettings(e) {
    e.preventDefault();
    if (!this.canWrite()) return;

    const siteName = document.getElementById("siteSettingName").value.trim() || DEFAULT_SITE_SETTINGS.siteName;
    const settings = {
      siteName,
      colors: {
        primary: document.getElementById("siteColorPrimary").value,
        primaryDark: document.getElementById("siteColorPrimaryDark").value,
        background: document.getElementById("siteColorBackground").value,
        text: document.getElementById("siteColorText").value
      }
    };

    localStorage.setItem(SITE_SETTINGS_KEY, JSON.stringify(settings));
    applySiteSettings();

    try {
      await firebaseDb.ref("siteSettings").set(settings);
      this.showMessage(t("admin_site_settings_saved"), "success");
    } catch (err) {
      console.error(err);
      this.showMessage(t("auth_err_generic"), "error");
    }
  }

  async handleResetSiteSettings() {
    if (!this.canWrite()) return;

    localStorage.removeItem(SITE_SETTINGS_KEY);
    applySiteSettings();

    try {
      await firebaseDb.ref("siteSettings").set(DEFAULT_SITE_SETTINGS);
      this.loadSiteSettingsForm();
      this.showMessage(t("admin_site_settings_reset_done"), "success");
    } catch (err) {
      console.error(err);
      this.showMessage(t("auth_err_generic"), "error");
    }
  }

  // ============ Tiện ích ============
  escapeHtml(value) {
    const div = document.createElement("div");
    div.textContent = value == null ? "" : String(value);
    return div.innerHTML;
  }

  showMessage(message, type = "info") {
    const messageEl = this.adminMessage;
    if (!messageEl) return;

    messageEl.textContent = message;
    messageEl.className = `admin-message ${type}`;
    messageEl.classList.remove("hidden");

    setTimeout(() => {
      messageEl.classList.add("hidden");
    }, 4000);
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    window.adminUIHandler = new AdminUIHandler();
  });
} else {
  window.adminUIHandler = new AdminUIHandler();
}
