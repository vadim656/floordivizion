<template>
  <div class="container flex flex-col v-offer-slider h-full lg:flex-row lg:items-center">
    <div class="justify-between flex flex-col mt-4">
      <router-link to="/stand"  class="text-4xl border-b-2 pb-2 lg:text-9xl font-bold my-2 ">Стенды</router-link>
      <router-link to="/equipment"  class="text-4xl border-b-2 pb-2 lg:text-9xl font-bold my-2 ">Оборудование</router-link>
      <router-link to="/materials"  class="text-4xl border-b-2 pb-2 lg:text-9xl font-bold my-2 ">Материалы</router-link>

      <div class="link_btn w-full flex justify-center lg:justify-start mt-4">
        <router-link to="/catalog" class="text-2xl">Перейти в каталог</router-link>
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
