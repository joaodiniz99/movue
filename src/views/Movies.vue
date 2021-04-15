<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h1>Welcome to Movie's page!</h1>
      </b-col>
    </b-row>
    <b-row>
      <!-- <MovieCard//> -->
    </b-row>
  </b-container>

  <!-- <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie }}
      </li>
    </ul> -->
</template>

<script>
import moviesApi from "../services/moviesApi";

export default {
  name: "Movies",
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    getMovies: function() {
      moviesApi
        .getMovies()
        .then((res) => {
          // console.log(res);
          this.movies = res;
        })
        .catch((err) => {
          alert("ERRO, verificar consola!");
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
</style>