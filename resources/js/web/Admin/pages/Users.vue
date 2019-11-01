<template>
  <div>all users will be show here</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
      ...mapActions(['GET_USER'])
  },
  created(){
      this.GET_USER();
  }
};
</script>

<style scoped>
</style>