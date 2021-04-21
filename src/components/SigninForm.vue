<template>
  <div id="signinForm">
    <h1 class="mb-4">Sign In</h1>
    <b-form  @submit.stop.prevent>
      <b-form-row>
        <b-form-input type="email" v-model="email" placeholder="Email"></b-form-input>
      </b-form-row>
      <!-- <b-form-invalid-feedback :state="emailValidation">
        Your user ID must be 5-12 characters long.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="emailValidation">
        Looks Good.
      </b-form-valid-feedback> -->
      <b-form-row>
        <b-form-input type="password" v-model="password" placeholder="Password"></b-form-input>
      </b-form-row>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: "SigninForm",
    data() {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      emailValidation() {
        return this.email.length > 4 && this.email.length < 13;
      }
    }
  }
</script>

<style scoped>
@keyframes signinEntry {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
}

#signinForm {
  /* background-color: rgba(0, 0, 0, 0.5); */
  padding: 50px;
  width: 40%;

  color: white;
  box-shadow: 0 0 23px rgba(0, 0, 0, 0.3);

  animation: signinEntry 1s 0s;
}
</style>