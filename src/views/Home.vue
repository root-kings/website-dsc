<template lang="pug">
  layout
    .background
      .background-shape.blue.tilted-left

    section.hero
      //- img(src="../assets/images/banners/dsc-large-green.png")

    section.section
      .container
        .card-panel
</template>

<script>
import Layout from '@/components/Layout.vue'
export default {
  name: 'home',
  components: { Layout }
}
</script>

<style lang="scss" scoped>
.hero {
  min-height: 50vh;
  img {
    width: 100%;
    height: auto;
  }
}

.background {
  overflow: hidden;
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: -5;

  .background-shape {
    position: relative;

    width: 200vw;
    height: 200vh;
    margin-left: -50vw;
    margin-top: -50vh;

    &.tilted-left {
      transform: rotateZ(-30deg);
    }

    &.tilted-right {
      transform: rotateZ(30deg);
    }
  }
}
</style>