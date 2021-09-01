<template>
  <main>
    <section class="header">
      <nav>
        <router-link to="/">
          <!-- <img src="@/assets/imagens/github-profiles.png" alt="GitHub Profiles"> -->
        </router-link>
      </nav>
      <div class="bio"></div>
      <div class="navtabs">
        <ul class="listinline">
          <li class="listinline__item">
            <router-link to="/">Repos</router-link>
          </li>
          <li class="listinline__item">
            <router-link to="/stared">Stared</router-link>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Profile",
};
</script>
