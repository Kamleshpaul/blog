<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12 text-right">
        <button
          class="mb-2 mr-2 btn-transition btn btn-outline-success"
          data-toggle="modal"
          data-target="#addCategory"
        >Add Category</button>

        <!-- model component -->
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
      </div>
      <hr />
      <div class="col-lg-12 pt-4">
        <div class="main-card card">
          <div class="card-body">
            <h5 class="card-title">All Categories</h5>
            <table class="mb-0 table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Model from "../components/Model";
export default {
  data() {
    return {
      name: ""
    };
  },
  components: {
    Model
  },
  methods: {
    store() {
      this.$store.dispatch("STORE_CATEGORY", this.name);
      $('#addCategory').modal('hide');
    }
  }
};
</script>

<style>
</style>