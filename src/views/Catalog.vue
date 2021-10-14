<template>
  <div class="container mt-2">
    <VCatalogName/>
    <div class="flex flex-wrap w-full justify-center mx-auto md:-ms-2 lg:-mx-2 mt-4">
      <VCatalogProduct />
      <VCatalogProduct />
      <VCatalogProduct />
      <VCatalogProduct />
      <VCatalogProduct />
      <VCatalogProduct />
    </div>
  </div>
</template>

<script>
import VCatalogProduct from '@/components/v-catalog-product.vue'
import VCatalogName from '@/components/v-catalog-name.vue'
export default {
  components: {
    VCatalogProduct,
    VCatalogName
  }
}
</script>

<style></style>
