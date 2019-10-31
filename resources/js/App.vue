<template>
  <div>
   <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar  from "./pages/Admin/Navbar.vue";
export default {
  components:{
    Navbar,
  }
};
</script>

