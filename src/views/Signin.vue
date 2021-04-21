<template>
  <b-container>
    <b-row>
      <b-col class="signinCard">
        <SigninForm/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SigninForm from '@/components/SigninForm.vue';
export default {
  components: {
    SigninForm
  }
}
</script>

<style scoped>
.signinCard {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>