<template>
  <div class="container mt-2">
    <div class="w-full h-full h-6 bg-gray-200 px-5 py-5">
      <h3 class="w-full text-center text-warm-gray-900 font-bold text-6xl">
        Каталог
      </h3>
    </div>
  </div>
  <VCatalogItems />
  <!-- /.container -->
</template>

<script>
import VCatalogItems from './v-catalog-items.vue'
export default {
  components: {
    VCatalogItems
  }
}
</script>

<style></style>
