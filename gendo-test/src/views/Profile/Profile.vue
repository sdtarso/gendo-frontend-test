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
            <img :src="user.profilePicture" class="imgfluid" />
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
            <router-link to="/profile">
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
        <div class="container">
          <div class="searchcontainer">
            <input
              type="text"
              class="searchcontainer__input"
              placeholder="Filter by name"
            />
          </div>
          <div class="reposlistcontainer">
            <ul class="reposlist">
              <li
                v-for="repo in repositories"
                :key="repo.uuid"
                class="reposlist__item"
              >
                <h3 class="repoinfo">
                  <a href="#" class="repoinfo__owner" v-text="repo.owner"></a> 
                  <a href="#" class="repoinfo__title" v-text="repo.title"></a>
                </h3>
                <p class="repodesc" v-text="repo.description"></p>
                <div class="repodata">
                  <badge icon="code" :label="repo.mainLanguage" />
                  <badge icon="star" :label="repo.starCount" />
                  <badge icon="fork" :label="repo.forkCount" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Badge from "../../components/Badge/Badge";

export default {
  name: "Profile",
  components: {
    Badge
  },
  data() {
    return {
      user: {
        name: "Saulo Araújo",
        bio: "Front end Developer",
        profilePicture: "https://www.dtarso.com.br/imagens/profile.jpg",
      },
      repositories: [
        {
          title: "Gendo",
          owner: "sdtarso",
          description: "Gendo",
          icon: "Gendo",
          mainLanguage: "java escripto",
          starCount: 666,
          forkCount: 666,
          stared: false,
        },
        {
          title: "Gendo",
          owner: "sdtarso",
          description: "Gendo",
          icon: "Gendo",
          mainLanguage: "java escripto",
          starCount: 666,
          forkCount: 666,
          stared: false,
        },
        {
          title: "Gendo",
          owner: "sdtarso",
          description: "Gendo",
          icon: "Gendo",
          mainLanguage: "java escripto",
          starCount: 666,
          forkCount: 666,
          stared: true,
        },
      ],
    };
  },
  computed: {
    staredRepos() {
      return this.repositories.filter((r) => r.stared);
    },
  },
};
</script>

<style src="./profile.scss" lang="scss"></style>