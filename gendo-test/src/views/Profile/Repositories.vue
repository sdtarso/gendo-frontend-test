<template>
  <section class="pagecontent">
    <div class="navpanel">
      <repositories-list :repositories="repositories" />
    </div>
  </section>
</template>

<script>
import RepositoriesList from "../../components/RepoList/List";

export default {
  name: "Repositories",
  components: {
    RepositoriesList,
  },
  data() {
    return {
      repositories: []
    }
  },
  methods: {
    getUserRepos() {
      this.axios.get("https://api.github.com/user/repos").then((response) => {
        this.repositories = response.data;
        this.$emit('listLoaded', {
          tab: "repoCount",
          count: this.repositories.length
        })
      });
    },
  },
  beforeMount() {
    this.getUserRepos();
  },
};
</script>