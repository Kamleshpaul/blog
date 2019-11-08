<template>
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
                    <img width="42" class="rounded-circle" src="/assets/images/avatars/1.jpg" alt />
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
                    <button
                      type="button"
                      tabindex="0"
                      class="dropdown-item"
                      @click.prevent="adminLogout"
                    >Logout</button>
                  </div>
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
      this.$store.dispatch("users/userLogout");
    }
  }
};
</script>


<style scoped>
a {
  color: #007bff;
}
</style>