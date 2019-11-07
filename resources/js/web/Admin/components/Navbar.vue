<template>
  <div>
    <nav class="navbar navbar-light bg-light navbar-expand-lg">
      <router-link class="navbar-brand" :to="{name:'dashboard'}">Home</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link :to="{name:'admin_users'}">Users</router-link>
            <a href="#" @click.prevent="adminLogout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    <hr />

    <div class="app-header header-shadow">
      <div class="app-header__logo">
        <div class="logo-src"></div>
        <div class="header__pane ml-auto">
          <div>
            <button
              type="button"
              class="hamburger close-sidebar-btn hamburger--elastic"
              data-class="closed-sidebar"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="app-header__mobile-menu">
        <div>
          <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div class="app-header__menu">
        <span>
          <button
            type="button"
            class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
          >
            <span class="btn-icon-wrapper">
              <i class="fa fa-ellipsis-v fa-w-6"></i>
            </span>
          </button>
        </span>
      </div>
      <div class="app-header__content">
        <div class="app-header-left">
          <div class="search-wrapper">
            <div class="input-holder">
              <input type="text" class="search-input" placeholder="Type to search" />
              <button class="search-icon">
                <span></span>
              </button>
            </div>
            <button class="close"></button>
          </div>
          <ul class="header-menu nav">
            <li class="nav-item">
              <a href="javascript:void(0);" class="nav-link">
                <i class="nav-link-icon fa fa-database"></i>
                Statistics
              </a>
            </li>
            <li class="btn-group nav-item">
              <a href="javascript:void(0);" class="nav-link">
                <i class="nav-link-icon fa fa-edit"></i>
                Projects
              </a>
            </li>
            <li class="dropdown nav-item">
              <a href="javascript:void(0);" class="nav-link">
                <i class="nav-link-icon fa fa-cog"></i>
                Settings
              </a>
            </li>
          </ul>
        </div>
        <div class="app-header-right">
          <div class="header-btn-lg pr-0">
            <div class="widget-content p-0">
              <div class="widget-content-wrapper">
                <div class="widget-content-left">
                  <div class="btn-group">
                    <a
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      class="p-0 btn"
                    >
                      <img width="42" class="rounded-circle" src="assets/images/avatars/1.jpg" alt />
                      <i class="fa fa-angle-down ml-2 opacity-8"></i>
                    </a>
                    <div
                      tabindex="-1"
                      role="menu"
                      aria-hidden="true"
                      class="dropdown-menu dropdown-menu-right"
                    >
                      <button type="button" tabindex="0" class="dropdown-item">User Account</button>
                      <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                      <h6 tabindex="-1" class="dropdown-header">Header</h6>
                      <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                      <div tabindex="-1" class="dropdown-divider"></div>
                      <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                    </div>
                  </div>
                </div>
                <div class="widget-content-left ml-3 header-user-info">
                  <div class="widget-heading">Alina Mclourd</div>
                  <div class="widget-subheading">VP People Manager</div>
                </div>
                <div class="widget-content-right header-user-info ml-3">
                  <button
                    type="button"
                    class="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example"
                  >
                    <i class="fa text-white fa-calendar pr-1 pl-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    adminLogout() {
      this.$store.dispatch("USER_LOGOUT");
    }
  }
};
</script>


<style scoped>
a {
  color: #007bff;
}
</style>