<template>
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
          <a href="#" @click.prevent ="adminLogout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
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