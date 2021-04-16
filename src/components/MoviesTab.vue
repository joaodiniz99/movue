<template>
  <b-container>
    <b-row class="my-5">
      <span
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: selectedTab === tab, 'movie-tab': true }"
        @click="selectedTab = tab"
        >{{ tab }}
      </span>
    </b-row>
    <b-row class="my-5" v-if="selectedTab === 'Latest'">
      <MovieCard
        v-for="movie in latestMovies"
        :key="movie.id"
        :movie="movie"
        :isLoading="loadingL"
      />
    </b-row>
    <b-row class="my-5" v-if="selectedTab === 'Most Rated'">
      <MovieCard
        v-for="movie in ratedMovies"
        :key="movie.id"
        :movie="movie"
        :isLoading="loadingR"
      />
    </b-row>
  </b-container>
</template>

<script>
import moviesApi from "../services/moviesApi";

export default {
  name: "MoviesTab",
  components: {
    MovieCard: () => import("@/components/MovieCard.vue"),
  },
  data() {
    return {
      tabs: ["Latest", "Most Rated"],
      selectedTab: "Latest",
      latestMovies: null,
      ratedMovies: null,
      loadingL: true,
      loadingR: true,
    };
  },
  created() {
    this.getLatestMovies();
    this.getRatedMovies();
  },
  methods: {
    getLatestMovies: function () {
      moviesApi
        .getLatestMovies()
        .then((res) => {
          // console.log(res);
          this.latestMovies = res;
        })
        .catch((err) => {
          alert("ERRO, verificar consola!");
          console.log(err);
        })
        .finally(() => {
          this.loadingL = false;
        });
    },
    getRatedMovies: function () {
      moviesApi
        .getRatedMovies()
        .then((res) => {
          // console.log(res);
          this.ratedMovies = res;
        })
        .catch((err) => {
          alert("ERRO, verificar console!");
          console.log(err);
        })
        .finally(() => {
          this.loadingR = false;
        });
    },
  },
};
</script>

<style scoped>
/* Tab */
.movie-tab {
  font-weight: 600;
  color: #f3f3f3;
  cursor: pointer;
  margin: 0 5px;

  transition: color 0.3s;
}

.movie-tab:after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  border-bottom: 3px solid rgb(255, 0, 55);
  transition: 0.5s;
}

.movie-tab:hover {
  color: #f3f3f3;
}

.movie-tab:hover:after {
  width: 100%;
}

.active {
  color: #f3f3f3;
}

.active:after {
  content: "";
  display: block;
  width: 100%;
  border-bottom: 3px solid rgb(255, 0, 55);
}
</style>