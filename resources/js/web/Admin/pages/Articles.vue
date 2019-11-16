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
                      data-target="#editArticle"
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

    <!--  edit model component -->
    <Model idProp="editArticle">
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
                <input
                  v-model="from_edit.title"
                  placeholder="Enter Title"
                  type="text"
                  class="form-control"
                />
              </div>
            </div>

            <div class="position-relative row form-group">
              <label for="title" class="col-sm-12 col-form-label">Category</label>
              <div class="col-sm-12">
                <select v-model="from_edit.category" class="form-control">
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
                <ckeditor
                  :editor="editor"
                  v-model="from_edit.content"
                  height="500"
                  :config="editorConfig"
                ></ckeditor>
              </div>
            </div>

            <div class="position-relative row form-group">
              <label for="title" class="col-sm-12 col-form-label">Status</label>
              <div class="col-sm-12">
                <select v-model="from_edit.status" class="form-control">
                  <option value="drafted">Drafted</option>
                  <option value="publish">Publish</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="update">Update changes</button>
          </div>
        </div>
      </div>
    </Model>
    <!--  edit model component -->
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
      categories: [],
      from_edit: {
        id: "",
        title: "",
        content: "",
        category: "",
        status: ""
      }
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
    edit(id) {
      this.edit_id = id;
      axios.get(`/api/articles/${id}`).then(({ data }) => {
        this.from_edit.id = data.data.id;
        this.from_edit.title = data.data.title;
        this.from_edit.content = data.data.content;
        this.from_edit.category = data.data.blog_category_id;
        this.from_edit.status = data.data.status;
      });
    },
    update() {
      this.$store.dispatch("article/update", this.from_edit);
      this.from_edit = {};
      document
        .querySelector("#editArticle")
        .setAttribute("class", "modal fade hide");
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
      this.$store.dispatch("article/set", page);
    },
    getAllCategory() {
      axios.get("/api/categories?ALL=true").then(({ data }) => {
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