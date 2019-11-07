<template>
  <!-- Modal -->
  <div
    class="modal fade"
    :id="idProp"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["idProp"]
};
</script>

<style scoped>
</style>