<template>
  <div class="container mt-8">
    <div class="flex flex-wrap w-full justify-evenly">
      <VCatalogProduct />
      <VCatalogProduct />
      <VCatalogProduct />
      <VCatalogProduct />
      <VCatalogProduct />
      
    </div>
  </div>
</template>

<script>
import VCatalogProduct from './v-catalog-product.vue'
export default {
  components: {
    VCatalogProduct
  }
}
</script>

<style></style>
