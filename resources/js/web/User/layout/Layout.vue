<template>
    <div>
        <Navbar />
        <slot></slot>
    </div>
</template>

<script>
require('../assets/js/bootstrap.min.js')
require('../assets/js/main')
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>

<style>

@import '../assets/css/font-awesome.min.css';
@import '../assets/css/bootstrap.min.css';
@import '../assets/css/style.css';  

body{
  font-size:1.5em !important; 
}
a{
   color:black !important;
}

</style>