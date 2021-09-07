<template>
  <div class="container">
    <div class="searchcontainer">
      <input
        v-model="search"
        type="text"
        class="searchcontainer__input"
        placeholder="Filter by name"
      />
    </div>
    <div class="reposlistcontainer">
      <ul class="reposlist">
        <item v-for="repo in filteredList" :key="repo.id" :repo="repo" />
      </ul>
    </div>
  </div>
</template>

<style src="./main.scss" lang="scss"></style>

<script>
import Item from "./Item";

export default {
  name: "RepositoriesList",
  components: {
    Item,
  },
  props: {
    repositories: Array,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    filteredList() {
      const vm = this;
      return this.repositories.filter((r) => {
        return (
          r.name.toLocaleLowerCase().includes(vm.search.toLocaleLowerCase()) ||
          (!!r.description &&
            r.description
              .toLocaleLowerCase()
              .includes(vm.search.toLocaleLowerCase()))
        );
      });
    },
  },
};
</script>