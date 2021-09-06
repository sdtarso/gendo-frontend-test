<template>
  <div class="container">
    <search-box />
    <div class="reposlistcontainer">
      <ul class="reposlist">
        <item v-for="repo in repositories" :key="repo.id" :repo="repo" />
      </ul>
    </div>
  </div>
</template>

<style src="./main.scss" lang="scss"></style>

<script>
import Item from "./Item";
import SearchBox from "./SearchBox";

export default {
  name: "RepositoriesList",
  components: {
    Item,
    SearchBox,
  },
  props: {
    repositories: Array,
  },
};
</script>