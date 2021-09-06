<template>
  <main class="homepage">
    <h1>Aguarde...</h1>
    <p>Carregando</p>
  </main>
</template>

<script>
export default {
  name: "Home",
  methods: {
    requestToken() {
      // Using gatekeeper to get this token since this is a know issue [https://github.com/isaacs/github/issues/330]
      let code = new URLSearchParams(location.search).get("code").trim();
      this.axios
        .get(`http://localhost:8081/authenticate/${code}`)
        .then((response) => {
          localStorage.setItem("GH_TOKEN", response.data.token);
        })
        .catch(() => {
          this.$swal
            .fire(
              "Ops...",
              "Não foi possível recuperar o token de acesso, tente fazer login novamente",
              "error"
            )
            .then(() => {
              this.$router.push("login");
            });
        });
    },
  },
  mounted() {
    // this.requestToken();
  },
};
</script>

<style lang="scss">
.homepage {
  width: 100vw;
  height: 100vh;
  @include flex;
}
</style>