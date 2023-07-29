<template>
  <HeroSection></HeroSection>
  <ProjectsSection></ProjectsSection>
  <SkillsSection></SkillsSection>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";

export default {
  setup() {
    return {};
  },
  components: { HeroSection, ProjectsSection, SkillsSection },
};
</script>

<style lang="scss" scoped></style>
