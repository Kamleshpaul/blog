<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 mt-5 mb-2" v-for="blog in blogs" :key="blog.id">
        <div class="card-deck" @click="singlePgae(blog.id)">
          <div class="card">
            <img
              class="card-img-top"
              src="https://dummyimage.com/600x400/000/fff"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{{ blog.title }}</h5>
              <p class="card-text" v-html="blog.content"></p>
              <p class="card-text">
                <small class="text-muted">{{ blog.create }}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pull-right mt-4">
      <pagination :data="{...blogRes}" :limit="4" @pagination-change-page="getBlog"></pagination>
    </div>
  </div>
</template>

<script>
import pagination from "laravel-vue-pagination";
export default {
  data() {
    return {
      blogs: null,
      blogRes: null
    };
  },
  methods: {
    getBlog(page = 1) {
      axios
        .get(`/api/all-blogs?page=${page}`)
        .then(res => {
          this.blogs = res.data.data;
          this.blogRes = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    singlePgae(id) {
      console.log(id);
    }
  },
  mounted() {
    this.getBlog();
  }
};
</script>

<style>
.card:hover {
  cursor: pointer;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}
</style>