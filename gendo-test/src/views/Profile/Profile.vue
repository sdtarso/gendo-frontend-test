<template>
  <main>
    <section class="header">
      <nav>
        <div class="container py-2">
          <router-link to="/">
            <img
              src="@/assets/imagens/github-profiles.png"
              alt="GitHub Profiles"
              width="210"
            />
          </router-link>
        </div>
      </nav>
      <div class="bio mb-4">
        <div class="container">
          <div class="bio__profilepicture">
            <img :src="user.avatar_url" class="imgfluid" />
          </div>
          <div class="bio__resume">
            <h2 class="username mb-1" v-text="user.name"></h2>
            <p class="small textmuted m-0" v-text="user.bio"></p>
          </div>
        </div>
      </div>
      <div class="navtabs">
        <ul class="listinline">
          <li class="listinline__item">
            <router-link to="repositories">
              Repos
              <small class="item__count" v-text="repoCount"></small>
            </router-link>
          </li>
          <li class="listinline__item ml-0">
            <router-link to="starred">
              Starred
              <small class="item__count" v-text="starredCount"></small>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
    <router-view @listLoaded="updateTabCount" />
  </main>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      user: {},
      repoCount: 0,
      starredCount: 0,
    };
  },
  methods: {
    getUserInfo() {
      this.axios.get("https://api.github.com/user").then((response) => {
        this.user = response.data;
      });
    },
    updateTabCount($event) {
      this[$event.tab] = $event.count;
    },
  },
  beforeMount() {
    this.getUserInfo();
  },
};
</script>

<style src="./profile.scss" lang="scss"></style>