<template>
  <div class="app-sidebar sidebar-shadow">
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
    <div class="scrollbar-sidebar ps ps--active-y">
      <div class="app-sidebar__inner">
        <ul class="vertical-nav-menu metismenu">
          <li class="app-sidebar__heading">Dashboards</li>
          <li>
            <router-link :to="{name:'dashboard'}" exact>
              <i class="metismenu-icon pe-7s-monitor"></i>
              Dashboard
            </router-link>
          </li>
          <li class="app-sidebar__heading">Blog</li>
          <li>
            <router-link :to="{name:'categories'}" exact>
              <i class="metismenu-icon pe-7s-next-2"></i>
              Categories
            </router-link>

            <router-link :to="{name:'articles'}" exact>
              <i class="metismenu-icon pe-7s-note"></i>
              Articles
            </router-link>
          </li>
          <li class="app-sidebar__heading">Settings</li>
          <li>
            <router-link :to="{name:'web_settings'}" exact>
              <i class="metismenu-icon pe-7s-helm"></i>
              Web Settings
            </router-link>
          </li>
        </ul>
      </div>
      <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
        <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
      </div>
      <div class="ps__rail-y" style="top: 0px; height: 577px; right: 0px;">
        <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 492px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.router-link-active {
  color: #343a40;
  background: #e0f3ff;
  font-weight: bold;
}
a.router-link-exact-active.router-link-active {
  display: block;
  line-height: 2.4rem;
  height: 2.4rem;
  padding: 0 1.5rem 0 45px;
  position: relative;
  border-radius: 0.25rem;
  color: #343a40;
  white-space: nowrap;
  transition: all 0.2s;
  margin: 0.1rem 0;
}
</style>