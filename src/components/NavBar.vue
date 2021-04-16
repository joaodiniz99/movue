<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <router-link to="/" class="navbar-brand">
      <img
        src="../assets/img/logo.png"
        class="d-inline-block align-center"
        alt="Movue Logo"
        width="100"
        height="100"
      />
      MoVue
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/movies">Movies</router-link>
        <router-link to="/contacts">Contacts</router-link>
        <router-link to="/about">About</router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto"> </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
/* Animations */
@keyframes logoHover {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.1, 1.1);
  }
  100% {
    transform: scale(1, 1);
  }
}

/* Styles */
.navbar {
  background: #2c3e50 !important;
}

a {
  font-weight: bold;
  color: rgb(149, 153, 156);
  text-decoration: none !important;
  transition: all 0.3s;
  padding: 10px;
}

a:hover {
  color: rgb(255, 0, 55) !important;
}

a.router-link-exact-active {
  color: rgb(255, 0, 55) !important;
}

.navbar-brand img {
  margin: 0 10px 0 0;
}

.navbar-brand {
  font-size: 1.7rem;
}

.navbar-brand:hover img {
  animation: logoHover 1.7s 0s ease infinite;
}
</style>