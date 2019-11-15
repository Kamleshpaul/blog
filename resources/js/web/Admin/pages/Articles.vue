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
              <label for="content" class="col-sm-12 col-form-label">Content</label>
              <div class="col-sm-12">
                <textarea
                  v-model="content"
                  cols="30"
                  rows="10"
                  class="form-control"
                  placeholder="Enter Content"
                ></textarea>
                <ckeditor editor="ClassicEditor"></ckeditor>
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
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Model from "../components/Model";
export default {
  data() {
    return {
      title: "",
      content: ""
    };
  },
  components: {
    Model,
    ClassicEditor
  },
  methods: {
    seo() {
      document.title = "Articles";
    }
  },
  mounted() {
    this.seo();
  }
};
</script>

<style>
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