<template>
  <div class="badge">
    <div class="badge__icon">
      <img :src="iconSvg" />
    </div>
    <div class="badge__text" v-text="label"></div>
  </div>
</template>

<style src="./badge.scss" lang="scss"></style>

<script>
export default {
  name: "Badge",
  props: {
    icon: [String, Number],
    label: [String, Number],
  },
  computed: {
    iconSvg() {
      return require(`../../assets/imagens/icons/${this.icon}.svg`);
    },
  },
};
</script>