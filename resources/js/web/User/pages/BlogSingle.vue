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
        <vue-goodshare></vue-goodshare>
        <hr />
        <vue-disqus :shortname="disqusShortName" :identifier="pageId" :url="blogUrl"></vue-disqus>
      </div>
    </div>
  </div>
</template>

<script>
import VueGoodshare from "vue-goodshare";
export default {
  data() {
    return {
      blog: {},
      loading: true,
      pageId: "",
      blogUrl: "",
      disqusShortName: ""
    };
  },
  components:{
    VueGoodshare
  },
  methods: {
    getBlog() {
      const slug = this.$route.params.slug;
      axios
        .get(`/api/blog/${slug}`)
        .then(({ data }) => {
          this.blog = data;
          this.loading = false;

          this.pageId = this.blog.slug;
          this.blogUrl = window.location.href;
          this.disqusShortName = window.disqusName;
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
a:not([href]):not([tabindex]){
  color:#fff !important;
}
</style>