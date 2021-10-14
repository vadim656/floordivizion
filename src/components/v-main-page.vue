<template>
  <div class="grid h-full">
    <VHeaderTop/>
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
import VHeaderTop from './v-header-top.vue'


export default {
  name: 'Home',
  components: {
    VOffer,
    VSlider,
    VFooter,
    VHeaderTop
  }
}
</script>

<style></style>
