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
        <hr />
        <div id="disqus_thread"></div>
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
          this.loadComments();
        })
        .catch(err => console.log(err));
    },
    loadComments() {
      self = this;
      var disqus_config = function() {
        this.page.url = window.location.href;
        this.page.identifier = self.blog.slug;
        this.page.title = self.blog.title;
      };

      (function() {
        // DON'T EDIT BELOW THIS LINE
        var d = document,
          s = d.createElement("script");
        s.src = `${window.disqus_url}/embed.js`;
        s.setAttribute("data-timestamp", +new Date());
        (d.head || d.body).appendChild(s);
      })();
    }
  },
  created() {
    this.getBlog();
  },
  destroyed() {
    DISQUS.reset();
  }
};
</script>

<style>
</style>