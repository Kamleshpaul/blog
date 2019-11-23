<template>
  <div class="app-main__inner">
    <div class="row">
      <div class="col-md-6 col-xl-4">
        <div class="card mb-3 widget-content bg-midnight-bloom">
          <div class="widget-content-wrapper text-white">
            <div class="widget-content-left">
              <div class="widget-heading">Todays Posting</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-white">
                <span>{{ todayPostCount }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="card mb-3 widget-content bg-arielle-smile">
          <div class="widget-content-wrapper text-white">
            <div class="widget-content-left">
              <div class="widget-heading">Categoies</div>
            </div>
            <div class="widget-subheading">Total Clients Profit</div>
            <div class="widget-content-right">
              <div class="widget-numbers text-white">
                <span>{{ categoriesCount }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="card mb-3 widget-content bg-grow-early">
          <div class="widget-content-wrapper text-white">
            <div class="widget-content-left">
              <div class="widget-heading">Articles</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-white">
                <span>{{ articlesCount }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    seo() {
      document.title = "Dashboard";
    }
  },
  computed: {
    ...mapState("category", ["categoriesCount"]),
    ...mapState("article", ["articlesCount", "todayPostCount"])
  },
  mounted() {
    this.seo();
    this.$store.dispatch("category/getCount");
    this.$store.dispatch("article/getCount");
    this.$store.dispatch("article/getTodayPostCount");
  }
};
</script>

<style scoped>
</style>