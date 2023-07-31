<template>
    <div class="product-list">
        <h1>{{ isCategory ? "Categories" : "Products" }}</h1>
        <div class="product"><pre>{{ state.data }}</pre>
            <ProductCard v-for="item in state.data" :key="item.id" :name="item.name"
                :image="item.categoryImage"
                :description="item.description"/>
        </div>
    </div>
</template>
  





<script>
import { reactive } from "vue";
import ProductCard from "../product-card/ProductCard.vue"
import axios from "axios"
export default {
    name: 'ProductList',
    components: {
        ProductCard
    },
    props: {
        isCategory: Boolean
    },
    setup(props) {
        let state = reactive({
            data: [],
            api: props.isCategory ? "http://localhost:8082/home/category-list?page=0" : "http://localhost:8082/home/best-sales"
        })

        let fetchData = async () => {
            try {
                let response = await axios.get(state.api)
                state.data = [...response.data.data]
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
        return {
            state
        }
    }
}
</script>
  





  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./product-list.scss";
</style>