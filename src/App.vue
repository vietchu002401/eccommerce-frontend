<template>
  <AppHeader/>
  <router-view/>
  <AppFooter/>
</template>





<script>
// import AppHome from "./pages/home/AppHome.vue"
import AppHeader from "./components/header/AppHeader.vue"
import AppFooter from "./components/footer/AppFooter.vue"
export default {
  name: 'App',
  components: {
    // AppHome,
    AppHeader,
    AppFooter
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
  background: radial-gradient(23.09% 102.32% at 24.13% 80.28%, rgba(251, 202, 251, 0.25) 0%, rgba(243, 239, 246, 0.25) 51.56%, rgba(239, 228, 249, 0.25) 100%), radial-gradient(33.76% 100.17% at 94.72% 35.49%, rgba(190, 112, 255, 0.19) 43.75%, rgba(220, 178, 255, 0.08) 83.85%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.80) 100%), radial-gradient(38.82% 94.14% at 8.72% 24.82%, #64BEFF 43.23%, rgba(178, 223, 255, 0.26) 81.25%, rgba(255, 255, 255, 0.00) 100%);
}
h1, p, a, h2, h3, h4, h5, strong, li, ul, div {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
     -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none;
}
a{
  text-decoration: none;
}
</style>
