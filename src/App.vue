<template>
  <div class="wrap pt-1 h-full">
    <VHeaderTop />
    <transition name="rout" mode="out-in" appear>
      <router-view></router-view>
    </transition>

    <VFooter />
  </div>
</template>

<script>
import VHeaderTop from './components/v-header-top.vue'
import VFooter from './components/v-footer.vue'
export default {
  components: {
    VHeaderTop,
    VFooter
  }
}
</script>

<style lang="sass">

*
  margin: 0
  padding: 0

.rout-enter-active
  transition: opacity .5s cubic-bezier(.45,-0.58,.67,1.51)
.rout-leave-active
  transition: opacity .3s cubic-bezier(.45,-0.58,.67,1.51)

.rout-enter-from
  opacity: 0
.rout-leave-to
  opacity: 0
</style>
