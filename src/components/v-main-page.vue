<template>
  <div class="main flex items-center">
    <VOffer></VOffer>
    <VSlider></VSlider>
  </div>

  <!-- /.grid -->
</template>

<script>
import VOffer from '@/components/v-offer.vue'
import VSlider from '@/components/v-slider.vue'

export default {
  name: 'Home',
  components: {
    VOffer,
    VSlider
  }
}
</script>

<style lang="sass">
.main
  height: calc(100vh - 200px)
</style>
