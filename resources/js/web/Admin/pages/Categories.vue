<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12 text-right">
        <button
          class="mb-2 mr-2 btn-transition btn btn-outline-success"
          data-toggle="modal"
          data-target="#addCategory"
        >Add Category</button>

        <!--  add model component -->
        <Model idProp="addCategory">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Category</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="position-relative row form-group">
                  <label for="name" class="col-sm-2 col-form-label">Name</label>
                  <div class="col-sm-10">
                    <input
                      v-model="name"
                      placeholder="Enter Category Name"
                      type="email"
                      class="form-control"
                    />
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
        <!------------------------- -->
        <!-- Edit model component -->
        <Model idProp="editCategory">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Category</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="position-relative row form-group">
                  <label for="name" class="col-sm-2 col-form-label">Name</label>
                  <div class="col-sm-10">
                    <input
                      v-model="edit_name"
                      placeholder="Enter Category Name"
                      type="email"
                      class="form-control"
                    />
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
        <!------------------------- -->
      </div>
      <hr />
      <div class="col-lg-12 pt-4">
        <div class="main-card card">
          <div class="card-body">
            <h5 class="card-title">All Categories</h5>
            <table class="mb-0 table table-striped" v-show="categories">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="category in categories.data" :key="category.id">
                  <th scope="row">{{ category.id }}</th>
                  <td>{{ category.name }}</td>
                  <td>
                    <button
                      class="mb-2 mr-2 btn-transition btn btn-outline-info"
                      data-target="#editCategory"
                      data-toggle="modal"
                      @click="edit(category.id)"
                    >Edit</button>
                    <button
                      class="mb-2 mr-2 btn-transition btn btn-outline-danger"
                      @click="destroy(category.id)"
                    >Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <pagination :data="{...categories}" :limit="5" @pagination-change-page="getResults"></pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Model from "../components/Model";
import pagination from "laravel-vue-pagination";

export default {
  data() {
    return {
      name: "",
      edit_name: "",
      edit_id: ""
    };
  },
  computed: {
    ...mapState("category", ["categories"])
  },
  components: {
    Model
  },
  methods: {
    seo() {
      document.title = "Category";
    },
    getResults(page = 1) {
      this.$store.dispatch("category/setCategory", page);
    },
    store() {
      this.$store.dispatch("category/storeCategory", this.name);
      this.name = "";
      document
        .querySelector("#addCategory")
        .setAttribute("class", "modal fade hide");
    },
    edit(id) {
      this.edit_id = id;
      axios.get(`/api/categories/${id}`).then(({ data }) => {
        this.edit_name = data.data.name;
      });
    },
    update() {
      let payload = {
        name: this.edit_name,
        id: this.edit_id
      };
      this.$store.dispatch("category/update", payload);
      this.edit_name = "";
      document
        .querySelector("#editCategory")
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
          this.$store.dispatch("category/destroy", id);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  },
  mounted() {
    this.seo();
    this.$store.dispatch("category/setCategory");
  }
};
</script>

<style>
</style>