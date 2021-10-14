<template>
  <div id="nav" class="nav_bar">
    <vHeaderTop></vHeaderTop>
  </div>
  <div class="wrap mt-1 h-auto">
    <router-view />
  </div>
</template>

<script>
import VHeaderTop from './components/v-header-top.vue'

export default {
  components: {
    VHeaderTop
  }
}
</script>

<style lang="sass">

#app
  height: 100%
</style>
