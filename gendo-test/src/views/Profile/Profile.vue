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
            <router-link to="/">
              Repos
              <small
                class="item__count"
                v-text="repositories.length - staredRepos.length"
              ></small>
            </router-link>
          </li>
          <li class="listinline__item ml-0">
            <router-link to="/stared">
              Stared
              <small class="item__count" v-text="staredRepos.length"></small>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
    <section class="pagecontent">
      <div class="navpanel">
        <repositories-list :repositories="repositories" />
      </div>
    </section>
  </main>
</template>

<script>
import RepositoriesList from "../../components/RepoList/List";

export default {
  name: "Profile",
  components: {
    RepositoriesList,
  },
  data() {
    return {
      user: {},
      repositories: [],
    };
  },
  computed: {
    staredRepos() {
      return this.repositories.filter((r) => r.stared);
    },
  },
  methods: {
    getUserInfo() {
      this.axios.get("https://api.github.com/user").then((response) => {
        this.user = response.data;
      });
    },
    getUserRepos() {
      this.axios.get("https://api.github.com/user/repos").then((response) => {
        this.repositories = response.data;
      });
    },
  },
  beforeMount() {
    this.getUserInfo();
    this.getUserRepos();
  },
};
</script>

<style src="./profile.scss" lang="scss"></style>