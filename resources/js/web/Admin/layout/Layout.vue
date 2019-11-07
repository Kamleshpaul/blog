<template>
  <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
    <Navbar />
    <div class="app-main">
      <Sidebar />
      <slot></slot>
    </div>
  </div>
</template>

<script>
require("../../../plugins/main.js");
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
export default {
  components: {
    Navbar,
    Sidebar
  }
};
</script>

<style>
@import "../../../plugins/main.css";
</style>