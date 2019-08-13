<template>
  <section>
    <div v-if="$route.query.message === 'login'" class="alert alert-danger">
      need login first
    </div>
    <h1>login page</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <input type="text" class="form-control">
      </div>
      <p>
        <nuxt-link to="/">home</nuxt-link>
      </p>
      <button class="btn btn-primary" type="submit">login</button>
    </form>
  </section>
</template>

<script>
  export default {
    name: "login",
    layout: 'empty',
    methods: {
      onSubmit() {
        this.$store.dispatch('login')
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  section {
    max-width: 500px;
    margin: 0 auto;
  }
</style>
