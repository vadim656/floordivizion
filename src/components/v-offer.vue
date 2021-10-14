<template>
  <div class="v-offer-text">
    <vOfferText></vOfferText>
  </div>
  <!-- /.v-offer -->
  <div class="v-offer-block">
    <vOfferBlock></vOfferBlock>
  </div>
  <!-- /.v-offer-block -->
</template>
<script>
import vOfferText from './v-offer-text.vue'
import vOfferBlock from './v-offer-block.vue'

export default {
  components: {
    vOfferText,
    vOfferBlock
  }
}
</script>
<style lang="sass"></style>
