<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" :sticky="sticky">
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
      <b-navbar-nav class="ml-auto">
        <router-link to="/signin" class="signinBtn">Sign In</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      sticky: true
    }
  },
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
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.3);
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

/* Sign In */
.signinBtn {
  color: white;
  /* color: rgb(255, 0, 55); */
  /* background-color: #2c3e50; */
  background-color: rgba(255, 0, 55, 0.767);
  border-radius: 20px;
  box-shadow: 0 0 23px rgba(0, 0, 0, 0.3);
  transition: color 0.2s;
}

.signinBtn:hover {
  color: #2c3e50 !important;
}

.signinBtn.router-link-exact-active {
  color: #2c3e50 !important;
}
</style>