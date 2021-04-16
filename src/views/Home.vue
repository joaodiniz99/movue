<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col class="p-0">
          <b-img
            id="imgBanner"
            src="../assets/img/movie_banner.jpg"
            alt="Movue Banner"
          ></b-img>
          <h2 class="hero-text">Welcome to MoVue!</h2>
        </b-col>
      </b-row>
    </b-container>
    <MoviesTab />
  </div>
</template>

<script>
import MoviesTab from "@/components/MoviesTab.vue";

export default {
  name: "Home",
  components: {
    MoviesTab,
  },
};
</script>

<style scoped>
/* Banner */
#imgBanner {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.hero-text {
  font-family: "Kiwi Maru", serif;
  font-size: 3rem;
  font-weight: bold;
  position: absolute;
  top: 30%;
  right: 20%;
  color: white !important;

  animation-name: deslizar;
  animation-duration: 1s;
}

/* Transitions */
@keyframes deslizar {
  0% {
    opacity: 0;
    top: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
