<template>
  <AppHeader/>
  <AppHome/>
</template>





<script>
import AppHome from "./pages/home/AppHome.vue"
import AppHeader from "./components/header/AppHeader.vue"
export default {
  name: 'App',
  components: {
    AppHome,
    AppHeader
  }
}
</script>





<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background: var(--g-1, linear-gradient(42deg, #F4E8F3 0%, #F3EFF6 51.04%, #EEE0F9 100%));
}
</style>
