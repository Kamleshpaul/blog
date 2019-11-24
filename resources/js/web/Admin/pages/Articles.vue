<template>
  <div class="container mt-5">
    <!-- ADD FORM -->
    <div class="tab-content" v-show="addModel">
      <div class="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Add Article</h5>

            <div class="form-row">
              <div class="col-md-6">
                <div class="position-relative form-group">
                  <label>Title</label>
                  <input v-model="title" placeholder="Enter Title" type="text" class="form-control" />
                </div>
              </div>

              <div class="col-md-6">
                <div class="position-relative form-group">
                  <label>Category</label>
                  <select v-model="category" class="form-control">
                    <option
                      v-for="category in categories"
                      :key="category.id"
                      :value="category.id"
                    >{{ category.name }}</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="col-md-12">
                <div class="position-relative form-group">
                  <label>Content</label>
                  <ckeditor :editor="editor" v-model="content" :height="500" :config="editorConfig"></ckeditor>
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="col-md-6">
                <div class="position-relative form-group">
                  <label>Feature image</label>
                  <input type="file" class="btn btn-primary" @change="processFile($event)" />
                </div>
              </div>

              <div class="col-md-6">
                <div class="position-relative form-group">
                  <label>Status</label>
                  <select v-model="status" class="form-control">
                    <option value="drafted">Drafted</option>
                    <option value="publish">Publish</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-row pull-right">
              <button type="button" class="btn btn-primary mr-2" @click="store">Save changes</button>
              <button type="button" class="btn btn-secondary" @click="addModel = false">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ADD FROM END -->

    <div class="row" v-show="!addModel && !editModel">
      <div class="col-md-12 text-right">
        <button
          class="mb-2 mr-2 btn-transition btn btn-outline-success"
          @click="addModel = true"
        >Add Article</button>
      </div>
      <hr />
      <div class="col-lg-12 pt-4">
        <div class="main-card card">
          <div class="card-body">
            <h5 class="card-title">All Articles</h5>

            <content-placeholders v-show="loading">
              <content-placeholders-heading :img="true" />
              <content-placeholders-text :lines="3" />
            </content-placeholders>

            <table class="mb-0 table table-striped" v-show="!loading">
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

    <!-- EDIT FORM -->
    <div class="tab-content" v-show="editModel">
      <div class="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Edit Article</h5>

            <div class="form-row">
              <div class="col-md-6">
                <div class="position-relative form-group">
                  <label>Title</label>
                  <input
                    v-model="from_edit.title"
                    placeholder="Enter Title"
                    type="text"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="position-relative form-group">
                  <label>Category</label>
                  <select v-model="from_edit.category" class="form-control">
                    <option
                      v-for="category in categories"
                      :key="category.id"
                      :value="category.id"
                    >{{ category.name }}</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="col-md-12">
                <div class="position-relative form-group">
                  <label>Content</label>
                  <ckeditor :editor="editor" v-model="from_edit.content" :config="editorConfig"></ckeditor>
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="col-md-6">
                <div class="position-relative form-group">
                  <label>Status</label>
                  <select v-model="from_edit.status" class="form-control">
                    <option value="drafted">Drafted</option>
                    <option value="publish">Publish</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-row pull-right">
              <button type="button" class="btn btn-secondary mr-2" @click="editModel = false">Close</button>
              <button type="button" class="btn btn-primary" @click="update">Update changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- EDIT FROM END -->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import pagination from "laravel-vue-pagination";

export default {
  data() {
    return {
      title: "",
      content: "",
      feature_image: {},
      editor: ClassicEditor,
      editorConfig: {
        uploadUrl: "/"
        // The configuration of the rich-text editor.
      },
      category: "",
      status: "",
      categories: [],
      from_edit: {
        id: "",
        title: "",
        content: "",
        category: "",
        status: ""
      },
      addArticle: false,
      loading: false,
      addModel: false,
      editModel: false
    };
  },
  computed: {
    ...mapState("article", ["articles"])
  },
  methods: {
    seo() {
      document.title = "Articles";
    },
    store() {
      this.addModel = false;
      this.$store.dispatch("article/store", {
        title: this.title,
        category: this.category,
        content: this.content,
        status: this.status,
        feature_image: this.feature_image
      });
      this.editModel = false;
      this.title = "";
      this.category = "";
      this.content = "";
      this.status = "";
    },
    edit(id) {
      this.edit_id = id;
      axios.get(`/api/articles/${id}`).then(({ data }) => {
        this.from_edit.id = data.data.id;
        this.from_edit.title = data.data.title;
        this.from_edit.content = data.data.content;
        this.from_edit.category = data.data.blog_category_id;
        this.from_edit.status = data.data.status;
      });
      this.editModel = true;
    },
    update() {
      this.$store.dispatch("article/update", this.from_edit);
      this.from_edit = {};
      this.editModel = false;
    },
    destroy(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$store.dispatch("article/destroy", id);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    getResults(page = 1) {
      this.loading = true;
      this.$store.dispatch("article/set", page).then(e => {
        this.loading = false;
      });
    },
    getAllCategory() {
      axios.get("/api/categories?ALL=true").then(({ data }) => {
        this.categories = data.data;
      });
    },
    processFile(event) {
      this.feature_image = event.target.files[0];
    }
  },
  mounted() {
    this.loading = true;
    this.seo();
    this.getAllCategory();
    this.$store.dispatch("article/set").then(e => {
      this.loading = false;
    });
    this.$store.dispatch("category/setCategory");
  }
};
</script>

<style>
.ck-editor__editable {
  height: 300px !important;
}
.modal-dialog {
  box-shadow: none;
}
.content,
.modal {
  position: absolute;
  top: -10%;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>