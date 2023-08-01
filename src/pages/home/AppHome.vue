<template>
    <div class="home">
        <div class="banner"></div>
        <ProductList :isBestSales=true />
        <ProductList :isBestSales=false />
    </div>
</template>
  





<script>
import ProductList from "../../components/product-list/ProductList.vue"
export default {
    name: 'AppHome',
    components : {
        ProductList
    }
}
</script>
  





  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./home.scss";
</style>