<template>
  <main class="homepage">
    <div class="container">
      <router-link class="btn btn--block btn--primary" to="profile">LOGIN</router-link>
    </div>
  </main>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss">
.homepage {
  width: 100vw;
  height: 100vh;
  @include flex
}
</style>