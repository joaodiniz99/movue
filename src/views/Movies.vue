<template>
  <div>
    <h1>Welcome to Movie's page!</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie }}
      </li>
    </ul>
  </div>
</template>

<script>
import moviesApi from '../services/moviesApi';

export default {
  name: 'Movies',
  data() {
    return {
      movies: []
    }
  },
  created() {
    moviesApi.getMovies().then(res => {
      // console.log(res);
      this.movies = res;
    }).catch(err => {
      alert("ERRO, verificar consola!");
      console.log(err);
    });
  }
}
</script>

<style scoped>

</style>