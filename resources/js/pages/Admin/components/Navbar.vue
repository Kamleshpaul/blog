<template>
  <nav class="navbar navbar-dark navbar-expand-lg bg-primary">
    <router-link class="navbar-brand" to="/">Home</router-link>
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
          <router-link to="users">User</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/">Dashboard</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
