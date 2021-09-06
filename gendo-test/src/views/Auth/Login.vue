<template>
  <main class="homepage">
    <div class="container">
      <button
        @click="requestLogin"
        class="btn btn--block btn--primary"
      >
        LOGIN
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
  methods: {
    requestLogin() {
      location.href =
        "https://github.com/login/oauth/authorize?redirect_uri=http://localhost:8080/auth/&client_id=" +
        process.env.VUE_APP_GH_CLIENT_ID;
    },
  },
};
</script>

<style lang="scss">
.homepage {
  width: 100vw;
  height: 100vh;
  @include flex;
  flex-direction: column;
}
</style>