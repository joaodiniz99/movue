<template>
  <b-container>
    <b-row>
      <b-col class="text-center">
        <h1 class="title mt-4">Welcome to Movie's page!</h1>
      </b-col>
    </b-row>
    <b-row>
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" :isLoading="loading"/>
    </b-row>
  </b-container>
</template>

<script>
import moviesApi from "../services/moviesApi";
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: "Movies",
  components: {
    MovieCard
  },
  data() {
    return {
      movies: [],
      loading: true
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
        })
        .finally(() => { 
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped>
.title {
  color: #F3F3F3;
}
</style>