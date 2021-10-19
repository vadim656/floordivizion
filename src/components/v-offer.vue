<template>
  <div class="v-offer-text flex flex-col">
    <vOfferText />
    <vOfferBlock class="mt-14" />
  </div>
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
