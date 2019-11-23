<template>
  <Layout>
    <div class="app-main__outer">
      <router-view></router-view>
    </div>
  </Layout>
</template>

<script>
require("../../plugins/main.js");
import Layout from "./layout/Layout";
export default {
  data() {
    return {
      token: null
    };
  },
  components: {
    Layout
  },
  methods: {
    setHeader() {
      this.token = localStorage.getItem(`passport`);
      window.axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.token}`;
    }
  },
  mounted() {
    self = this;
    if (self.token != "") {
      this.$store.dispatch("users/setAuth_user");
    }

    this.$router.push({ name: "dashboard" });
  },
  beforeMount() {
    this.setHeader();
  }
};
</script>

