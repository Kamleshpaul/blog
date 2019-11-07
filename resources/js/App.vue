<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
#nprogress .bar {
  background: #007bff !important;
}
.modal-backdrop {
  z-index: -1 !important;
}
.modal.show .modal-dialog {
  top: 20% !important;
}
</style>