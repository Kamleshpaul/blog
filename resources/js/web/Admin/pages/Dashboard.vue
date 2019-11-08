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
                <span>10</span>
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
              <div class="widget-subheading">Total Clients Profit</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-white">
                <span>4</span>
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
              <div class="widget-subheading">Total</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-white">
                <span>46</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    seo() {
      document.title = "Dashboard";
    }
  },
  mounted() {
    this.seo();
  }
};
</script>

<style scoped>
</style>