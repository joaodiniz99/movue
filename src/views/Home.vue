<template>
  <b-container fluid>
    <b-row>
      <b-col class="p-0">
        <!-- <h2>Bem-vindo ao melhor site de 🎬 do 🌎</h2> -->
        <!-- <img src="../assets/img/movie_banner.jpg" alt="Movue Banner" /> -->
        <b-img
          id="imgBanner"
          src="../assets/img/movie_banner.jpg"
          alt="Movue Banner"
        ></b-img>
        <h2 class="hero-text">The Best Movie App</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" sm="3" md="3" lg="3" xl="3">
        <div class="movie-card"></div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Home",
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
  font-weight: bold;
  position: absolute;
  top: 30%;
  right: 25%;
  color: white;

  animation-name: deslizar;
  animation-duration: 2s;
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
