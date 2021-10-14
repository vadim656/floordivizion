<template>
  <div class="container flex-col v-offer-slider h-full">
    <div class="justify-between flex flex-col">
      <h3 class="text-2xl lg:text-9xl font-bold ">Стенды</h3>
      <!-- /.name -->
      <h3 class="text-2xl lg:text-9xl font-bold -mr-8">Оборудование</h3>
      <!-- /.name -->
      <h3 class="text-2xl lg:text-9xl font-bold ">Материалы</h3>
      <!-- /.name -->
      <div class="link_btn">
        <router-link to="/catalog">Перейти в каталог</router-link>
      </div>
      <!-- /.link_btn -->
    </div>
    <div class="slide_img">
      <div class="slide_item">
        <img class="hidden lg:block" src="../img/Rectangle1.webp" alt="" />
      </div>
      <!-- /.slide_item -->
    </div>
    <!-- /.slide_img -->
  </div>
  <!-- /.container -->
</template>
<script>
export default {}
</script>
<style lang="sass" scoped>
@import '../styles/_adaptive.sass'

</style>
