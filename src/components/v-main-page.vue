<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 h-full">
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

<style></style>
