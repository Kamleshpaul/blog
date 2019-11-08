<template>
  <div id="container">
    <h2>404</h2>
    <span>
      <img src="/images/error.gif" alt="404" />
    </span>
  </div>
</template>

<script>
export default {
  method: {
    seo() {
      document.title = "404 Page";
    }
  },
  mounted() {
    this.seo();
  }
};
</script>

<style>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
img {
  widows: 100%;
}
h2 {
  text-align: center;
  font-size: 5em !important;
  font-style: italic;
}
</style>