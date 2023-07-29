<template>
  <nav-bar></nav-bar>
  <router-view />
  <FooterSection></FooterSection>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import FooterSection from "./components/FooterSection.vue";
export default {
  setup() {
    return {};
  },
  components: { NavBar, FooterSection },
};
</script>

<style lang="scss" scoped></style>
