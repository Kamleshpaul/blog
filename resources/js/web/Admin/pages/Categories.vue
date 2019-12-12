<template>
  <div class="container mt-5">
    <!-- ADD FORM -->
    <div class="tab-content" v-show="addForm">
      <div class="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Add Category</h5>
            <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="store">
                <div class="form-row">
                  <div class="col-md-12">
                    <div class="position-relative form-group">
                      <label>Name</label>
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <input
                          v-model="name"
                          placeholder="Enter Category Name"
                          type="text"
                          class="form-control"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>

                <div class="form-row pull-right">
                  <button
                    type="button"
                    class="btn btn-secondary mr-2"
                    @click="addForm = false"
                  >Close</button>
                  <button type="submit" class="btn btn-primary" :disabled="invalid">Save changes</button>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>

    <!-- ADD FROM END -->

    <div class="row" v-show="!addForm && !editForm">
      <div class="col-md-12 text-right">
        <button
          class="mb-2 mr-2 btn-transition btn btn-outline-success"
          @click="addForm = true"
        >Add Category</button>
      </div>
      <hr />
      <div class="col-lg-12 pt-4">
        <div class="main-card card">
          <div class="card-body">
            <h5 class="card-title">All Categories</h5>

            <content-placeholders v-show="loading">
              <content-placeholders-heading :img="true" />
              <content-placeholders-text :lines="3" />
            </content-placeholders>
            <table class="mb-0 table table-striped" v-show="categories && !loading">
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

    <!-- EDIT FORM -->
    <div class="tab-content" v-show="editForm">
      <div class="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Edit Category</h5>
            <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="update">
                <div class="form-row">
                  <div class="col-md-12">
                    <div class="position-relative form-group">
                      <label>Name</label>
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <input
                          v-model="edit_name"
                          placeholder="Enter Category Name"
                          type="text"
                          class="form-control"
                        />
                        <span class="text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>

                <div class="form-row pull-right">
                  <button
                    type="button"
                    class="btn btn-secondary mr-2"
                    @click="editForm = false"
                  >Close</button>
                  <button type="submit" class="btn btn-primary" :disabled="invalid">Update changes</button>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>

    <!-- EDIT FROM END -->
  </div>
</template>

<script>
import { required } from "vee-validate/dist/rules";
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";

import { mapState } from "vuex";
import pagination from "laravel-vue-pagination";

extend("required", {
  ...required,
  message: "This field is required"
});

export default {
  data() {
    return {
      name: "",
      edit_name: "",
      edit_id: "",
      loading: false,
      addForm: false,
      editForm: false
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  computed: {
    ...mapState("category", ["categories"])
  },
  methods: {
    getResults(page = 1) {
      this.loading = true;
      this.$store
        .dispatch("category/setCategory", page)
        .then(e => (this.loading = false));
    },
    store() {
      this.addForm = false;
      this.$store.dispatch("category/storeCategory", this.name);
      this.name = "";
    },
    edit(id) {
      this.editForm = true;
      this.edit_id = id;
      axios.get(`/api/categories/${id}`).then(({ data }) => {
        this.edit_name = data.data.name;
      });
    },
    update() {
      this.editForm = false;
      let payload = {
        name: this.edit_name,
        id: this.edit_id
      };
      this.$store.dispatch("category/update", payload);
      this.edit_name = "";
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
    this.loading = true;
    this.$store
      .dispatch("category/setCategory")
      .then(e => (this.loading = false));
  }
};
</script>

<style scoped>
.main-card.mb-3.card {
  width: 50%;
  margin: 0 auto;
  float: none;
  margin-top: 6%;
}
</style>