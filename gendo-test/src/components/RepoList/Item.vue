<template>
  <li class="reposlist__item">
    <h3 class="repoinfo">
      <a href="#" class="repoinfo__owner" v-text="repo.owner"></a>
      <a href="#" class="repoinfo__title" v-text="repo.title"></a>
    </h3>
    <p class="repodesc" v-text="repo.description"></p>
    <div class="repodata">
      <badge v-if="repo.stared" icon="code" :label="repo.mainLanguage" />
      <badge v-else icon="star" :label="repo.starCount" />
      <badge icon="fork" :label="repo.forkCount" />
    </div>
  </li>
</template>

<script>
import Badge from "../../components/Badge/Badge";

export default {
  name: "Item",
  components: {
    Badge,
  },
  props: {
    repo: Object,
  },
};
</script>