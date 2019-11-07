<template>
  <div>
    <Navbar />
    <Sidebar />
    <slot></slot>
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