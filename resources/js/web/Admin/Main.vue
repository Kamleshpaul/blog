<template>
  <Layout>
    <div class="app-main__outer">
      <router-view></router-view>
    </div>
  </Layout>
</template>

<script>
import Layout from "./layout/Layout";

export default {
  data() {
    return {
      token: null
    }
  },
  components: {
    Layout
  },
  methods: {
    setHeader() {
      this.token = localStorage.getItem(`passport`);
      window.axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
    }
  },
  mounted() {
    self = this;
    this.setHeader();
    if(self.token != '') {
      this.$store.dispatch("SET_AUTH_USER");
    }
  }
};
</script>

<style>
</style>