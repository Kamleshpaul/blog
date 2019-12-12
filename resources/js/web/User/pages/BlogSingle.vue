<template>
  <div class="container">
    <div class="row mt-5">
      <div v-show="loading">
        <h2>Loading ...</h2>
      </div>
      <div class="col-md-8 offset-md-2" v-show="!loading">
        <img :src="blog.feature_image" class="img-fluid" />
        <h2>{{ blog.title }}</h2>
        <hr />
        <div v-html="blog.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {},
      loading: true
    };
  },
  methods: {
    getBlog() {
      const slug = this.$route.params.slug;
      axios
        .get(`/api/blog/${slug}`)
        .then(({ data }) => {
          this.blog = data;
          this.loading = false;
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    this.getBlog();
  }
};
</script>

<style>
</style>