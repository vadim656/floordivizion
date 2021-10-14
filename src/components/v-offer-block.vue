<template>
  <div class="offer_block">
    <span>Получите скидку 10% на первый заказ</span>
    <a href="" class="btn_txt">Заказать</a
    ><!-- /.btn_txt -->
  </div>
</template>
<script>
export default {}
</script>
<style lang="sass">
@import '../styles/_adaptive.sass'

.offer_block
    width: 100%
    max-width: 425px
    height: 150px
    background-color: #1A1A1A
    display: flex
    flex-wrap: wrap
    padding: 25px
    font-weight: 400
    overflow: hidden
    border-radius: 10px
    +mobile
        height: 120px
    span
        color: #fff
        width: 100%
        +mobile
            font-size: 16px
    a
        color: #fff
        font-size: 24px
        text-transform: uppercase
        text-decoration: none
        box-sizing: border-box
        +mobile
            font-size: 18px
        // &::after
        //     content: ''
        //     width: 95px
        //     position: absolute
        //     display: block
        //     height: 1px
        //     left: 75px
        //     background-color: #C4C4C4
        //     transition: all .6s cubic-bezier(.45,-0.58,.67,1.51)
        //     +mobile
        //         width: 55px
        //         left: 62px
        //         width: 80px
        // &:hover
        //     &::after
        //         width: 10%
</style>
