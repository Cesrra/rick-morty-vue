<template>
  <div id="app">
    <pm-nav />
    <router-view />
    <pm-footer />
  </div>
</template>

<script>
import PmFooter from '@/components/layout/Footer.vue'
import PmNav from '@/components/layout/Header.vue'

export default {
  name: 'app',
  components: {
    PmFooter,
    PmNav,
  },
  data () {
    return { }
  },
}
</script>

<style>
@import './css/main.css';
@import '../node_modules/bulma/css/bulma.css';
</style>
