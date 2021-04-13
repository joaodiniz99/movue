<template>
  <div id="app">
    <transition name="fade" appear>
      <NavBar />
    </transition>
    <router-view />
  </div>
</template>


<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@400;500&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* Navbar transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, margin 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  margin-left: -30px;
}
</style>
