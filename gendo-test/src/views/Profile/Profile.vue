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
      <div class="bio">
        <div class="container">
          <div class="bio__profilepicture">
            <img :src="user.profilePicture" class="imgfluid" />
          </div>
          <div class="bio__resume">
            <h2 class="maintitle mb-1" v-text="user.name"></h2>
            <p class="textmuted" v-text="user.bio"></p>
          </div>
        </div>
      </div>
      <div class="navtabs">
        <ul class="listinline">
          <li class="listinline__item">
            <router-link to="/">
              Repos
              <span
                class="item__count"
                v-text="repositories.length - staredRepos.length"
              ></span>
            </router-link>
          </li>
          <li class="listinline__item">
            <router-link to="/stared">
              Stared
              <span class="item__count" v-text="staredRepos.length"></span>
            </router-link>
          </li>
        </ul>
      </div>
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
                <h3 class="repotitle" v-text="repo.title"></h3>
                <p class="small textmuted" v-text="repo.description"></p>
                <div class="repodata">
                  <div class="badge">
                    <div class="badge__icon">
                      <span class="material-icons" v-text="repo.icon"></span>
                    </div>
                    <div class="badge__text" v-text="repo.mainLanguage"></div>
                  </div>
                  <div class="badge">
                    <div class="badge__icon">
                      <span class="material-icons" v-text="repo.icon"></span>
                    </div>
                    <div class="badge__text" v-text="repo.mainLanguage"></div>
                  </div>
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
export default {
  name: "Profile",
  data() {
    return {
      user: {
        name: "Saulo Araújo",
        bio: "Front end Developer",
        profilePicture: "https://www.dtarso.com.br/imagens/profile.jpg",
      },
      repositories: [
        {
          stared: false,
        },
        {
          stared: false,
        },
        {
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