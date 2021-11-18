<template>
 
    <div
      class="flex bg-white shadow-md pb-2 
                overflow-hidden flex-col items-center justify-center rounded-2xl"
    >
      <img
        loading="lazy"
        class="object-cover object-center overflow-hidden max-h-80 w-full"
        :src="product_data.images[0].src"
        alt=""
      />
      <span class="font-bold mt-2 px-2">{{ product_data.name }}</span>
      <span class="font-bold mt-2 px-2">Price: {{ product_data.prices.price }} ₽</span>
      <span>
        Категория: {{ product_data.categories[0].name }}
      </span>
      <button class="my-4 border-2 border-black px-4 py-2 text-xl rounded w-40">
        Заказать
      </button>
    </div>
  

</template>

<script>
export default {
  props: {
    product_data: {
        type: Object,
        default() {
            return {}
        }
    }
  }
}
</script>

<style></style>
