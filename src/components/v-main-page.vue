<template>
  <div class="grid min-h-72 px-2">
    <VOffer></VOffer>
    <VSlider></VSlider>
    <VFooter></VFooter>
  </div>
  <!-- /.grid -->
</template>

<script>
import VOffer from '@/components/v-offer.vue'
import VSlider from '@/components/v-slider.vue'
import VFooter from '@/components/v-footer'

export default {
  name: 'Home',
  components: {
    VOffer,
    VSlider,
    VFooter
  }
}
</script>

<style></style>
