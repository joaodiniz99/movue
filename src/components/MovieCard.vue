<template>
  <b-col cols="12" sm="6" md="6" lg="3" xl="3" class="my-2">
    <router-link class="movie-link" :to="{ name: 'movie-show', params: { id: movie.id} }">
      <div class="movie-card">

        <div>
          <b-skeleton-wrapper :loading="isLoading">
            <template #loading>
              <b-skeleton-img height="300px"></b-skeleton-img>
            </template>

            <b-img :src="movie.poster" fluid :alt="movie.title"></b-img>
          </b-skeleton-wrapper>
        </div>
        

        <p class="my-2">
          <b-skeleton-wrapper :loading="isLoading">
            <template #loading>
              <b-skeleton width="55px" height="17.6"></b-skeleton>
            </template>

            <b-icon icon="star-fill" variant="warning"></b-icon> 
            <span class="px-2 rating">{{ movie.rating }}/5</span>
          </b-skeleton-wrapper>
        </p>


        <h5>
          <b-skeleton-wrapper :loading="isLoading">
            <template #loading>
              <b-skeleton width="100%" height="25"></b-skeleton>
            </template>

            {{ titYear }}
          </b-skeleton-wrapper>
        </h5>
        

        <b-skeleton-wrapper :loading="isLoading">
          <template #loading>
            <b-skeleton width="60%"></b-skeleton>
          </template>

          <ul class="genres">
            <li v-for="(genre, index) in movie.genres" :key="index">{{ genre }}</li>
          </ul>
        </b-skeleton-wrapper>

      </div>
    </router-link>
  </b-col>
</template>

<script>
import helper from '../utils/utils';

export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    titYear: function () {
      const date = helper.getDate(this.movie.release_date);
      const title = this.movie.title.length >= 15 ? this.movie.title.substr(0, 15) + '...' : this.movie.title 
      return `${title} (${date.getFullYear()})`;
    }
  }
}
</script>

<style scoped>
/* Animations */

/* Movie Card */
.movie-card {
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s;
}

.movie-card:hover {
  transform: scale(1.1);
}

.movie-card img {
  border-radius: 20px 20px 0 0;
}

.movie-card h5 {
  font-family: 'Oxygen', sans-serif;
  font-weight: 700;
}

.rating {
  color: rgb(149, 153, 156);
}

.genres {
  display: flex;
  flex-wrap: wrap;

  list-style-type: none;
  font-size: 0.9rem;
  padding: 0;
}

.genres li {
  text-decoration-line: underline;
  padding-right: 5px;
}

/* Movie link */
.movie-link {
  color: #F3F3F3;
  text-decoration: none;
}
</style>