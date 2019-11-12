<template>
    <div>
        <Navbar />
        <slot></slot>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>

<style>

@import '../assets/css/font-awesome.min.css';
@import '../assets/css/style.css';  
@import '../assets/css/bootstrap.min.css';

</style>