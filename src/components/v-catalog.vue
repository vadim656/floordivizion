<template>
  <VCatalogName />
  <div class="container mt-2">
    <div
      class="grid grid-cols-4 gap-4 md:-ms-2 lg:-mx-2 mt-4"
    >
      <VCatalogProduct
        :product_data="item"
        v-for="item in items"
        :key="item.id"
      />
    </div>
    <p></p>
  </div>
</template>

<script>
import VCatalogName from './v-catalog-name.vue'
import VCatalogProduct from './v-catalog-product.vue'
import axios from 'axios'
export default {
  components: {
    VCatalogName,
    VCatalogProduct
  },
  data () {
    return {
      items: [],
      errors: []
    }
  },
  props: {},
  created () {
    axios
      .get('http://home-prestige.shop/wp-json/wc/store/products/?per_page=9')
      .then(response => {
        this.items = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
