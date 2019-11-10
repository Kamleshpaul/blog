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
.swal2-popup.swal2-toast .swal2-title{
  font-size: 1em !important;
}
</style>