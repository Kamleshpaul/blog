<template>
  <div>all users will be show here</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["GET_USER"]),
    seo() {
      document.title = "User";
    }
  },
  created() {
    this.seo();
    this.GET_USER();
  }
};
</script>

<style scoped>
</style>