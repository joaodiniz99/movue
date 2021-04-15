<template>
  <div>
    <h1>Movie id: {{ id }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Movie',
    props: ['id'],
    data() {
      return {
        movie: {}
      }
    },
  }
</script>

<style scoped>

</style>