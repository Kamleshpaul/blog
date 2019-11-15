<template>
  <div class="container mt-5">
    <!--  add model component -->
    <Model idProp="addArticle">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Article</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="position-relative row form-group">
              <label for="title" class="col-sm-12 col-form-label">Title</label>
              <div class="col-sm-12">
                <input v-model="title" placeholder="Enter Title" type="text" class="form-control" />
              </div>
            </div>

            <div class="position-relative row form-group">
              <label for="title" class="col-sm-12 col-form-label">Category</label>
              <div class="col-sm-12">
                <select v-model="category" class="form-control">
                  <option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.id"
                  >{{ category.name }}</option>
                </select>
              </div>
            </div>

            <div class="position-relative row form-group">
              <label for="content" class="col-sm-12 col-form-label">Content</label>
              <div class="col-sm-12">
                <ckeditor :editor="editor" v-model="content" height="500" :config="editorConfig"></ckeditor>
              </div>
            </div>

            <div class="position-relative row form-group">
              <label for="title" class="col-sm-12 col-form-label">Status</label>
              <div class="col-sm-12">
                <select v-model="status" class="form-control">
                  <option value="drafted">Drafted</option>
                  <option value="publish">Publish</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="store">Save changes</button>
          </div>
        </div>
      </div>
    </Model>
    <!--  add model component -->

    <div class="row">
      <div class="col-md-12 text-right">
        <button
          class="mb-2 mr-2 btn-transition btn btn-outline-success"
          data-toggle="modal"
          data-target="#addArticle"
        >Add Article</button>
      </div>
      <hr />
      <div class="col-lg-12 pt-4">
        <div class="main-card card">
          <div class="card-body">
            <h5 class="card-title">All Articles</h5>
            <table class="mb-0 table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="article in articles.data" :key="article.id">
                  <th scope="row">{{ article.id }}</th>
                  <td>{{ article.title }}</td>
                  <td>{{ article.blog_category_id }}</td>
                  <td>
                    <button
                      class="mb-2 mr-2 btn-transition btn btn-outline-info"
                      data-target="#editCategory"
                      data-toggle="modal"
                      @click="edit(article.id)"
                    >Edit</button>
                    <button
                      class="mb-2 mr-2 btn-transition btn btn-outline-danger"
                      @click="destroy(article.id)"
                    >Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <pagination :data="{...articles}" :limit="5" @pagination-change-page="getResults"></pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Model from "../components/Model";
import pagination from "laravel-vue-pagination";

export default {
  data() {
    return {
      title: "",
      content: "",
      editor: ClassicEditor,
      editorConfig: {
        uploadUrl: "/"
        // The configuration of the rich-text editor.
      },
      category: "",
      status: "",
      categories:[]
    };
  },
  computed: {
    ...mapState("article", ["articles"])
  },
  components: {
    Model
  },
  methods: {
    seo() {
      document.title = "Articles";
    },
    store() {
      this.$store.dispatch("article/store", {
        title: this.title,
        category: this.category,
        content: this.content,
        status: this.status
      });
      document
        .querySelector("#addArticle")
        .setAttribute("class", "modal fade hide");

      this.title = "";
      this.category = "";
      this.content = "";
      this.status = "";
    },
    edit(id) {},
    destroy(id) {},
    getResults(page = 1) {
      this.$store.dispatch("article/set", page);
    },
    getAllCategory() {
      axios.get("/api/categories?ALL=true").then(({data}) => {
        this.categories = data.data;
      });
    }
  },
  mounted() {
    this.seo();
    this.getAllCategory();
    this.$store.dispatch("article/set");
    this.$store.dispatch("category/setCategory");
  }
};
</script>

<style scoped>
.ck-editor__editable {
  min-height: 300px;
}
.modal-content {
  width: 65vw;
  height: 75vh;
  top: -30px;
  right: 55px;
  overflow: auto;
}
.modal-dialog {
  box-shadow: none;
}
</style>