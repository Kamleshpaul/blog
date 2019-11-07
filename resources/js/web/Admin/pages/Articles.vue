<template>
     <div class="container mt-5">
    <div class="row">
      <div class="col-md-12 text-right">
        <button class="mb-2 mr-2 btn-transition btn btn-outline-success">Add Article</button>
      </div>
      <hr>
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
    export default {
        
    }
</script>

<style>

</style>