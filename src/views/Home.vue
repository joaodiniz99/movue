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
/* IMG Banner */
#imgBanner {
  width: 100%;
  height: 450px;
  object-fit: cover;
}
</style>
