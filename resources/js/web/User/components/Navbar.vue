<template>
  <nav class="navbar navbar-expand-lg navbar-light shadow p-3  bg-white rounded">
    <router-link class="navbar-brand" to="/">Blog Logo</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" exact>Home</router-link>
        </li>
        
        <li class="nav-item">
          <router-link to="/contact" class="nav-link" exact>Contact</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/about" class="nav-link" exact>About</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style  scoped>
.navbar-brand {
  background: none;
}
</style>