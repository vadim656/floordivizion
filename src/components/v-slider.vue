<template>
  <div class="container v-offer-slider h-full">
    <div class="name_block justify-between flex flex-col">
      <h3 class="name my-4">Стенды</h3>
      <!-- /.name -->
      <h3 class="name p-l my-4">Оборудование</h3>
      <!-- /.name -->
      <h3 class="name my-4">Материалы</h3>
      <!-- /.name -->
      <div class="link_btn">
        <a href="">Перейти в каталог</a>
      </div>
      <!-- /.link_btn -->
    </div>
    <div class="slide_img">
      <div class="slide_item">
        <img src="../img/Rectangle1.webp" alt="" />
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

.container
    display: flex
    +mobile
        flex-direction: column
    .name_block
        +mobile
            width: 100%
            margin: 0 auto
            padding-top: 25px

        a
            color: #212121
            font-size: 24px
            text-transform: uppercase
            text-decoration: none
            box-sizing: border-box
            // &::after
            //     content: ''
            //     width: 190px
            //     position: absolute
            //     display: block
            //     height: 1px
            //     background-color: #212121
            //     transition: all .6s cubic-bezier(.45,-0.58,.67,1.51)
            // &:hover
            //     &::after
            //         width: 15%
    .link_btn
        +mobile
            width: 100%
            display: flex
            justify-content: center
            padding: 25px 0


h3
    font-size: 96px
    font-weight: bold
    line-height: 0.5em
    text-transform: uppercase
    +mobile
        font-size: 36px
        padding-left: 20px
.slide_img
    margin-left: -300px
    z-index: -1
    +mobile
        margin: 0 auto
    img
        border-radius: 10px
        width: 100%
        height: auto
        +mobile
            max-width: 320px


.p-l
    padding-left: 50px
</style>
