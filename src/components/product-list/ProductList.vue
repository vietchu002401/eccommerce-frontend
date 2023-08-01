<template>
    <div class="product-list">
        <h1>{{ isBestSales ? "Best Sales" : "Products" }}</h1>
        <div class="category-list" v-if="!isBestSales">
            <p @click="changeCategory(index)" v-for="(item, index) in listCategory" :key="item.id">{{ item.name }}</p>
        </div>
        <div class="product">
            <ProductCard v-for="item in data" :key="item.id" :product="item" />
        </div>
        <button @click="fetchMore()" v-if="!isBestSales && data.length >= (page+1)*8">Load more</button>
    </div>
</template>
  



<script>
import { ref, onMounted } from "vue";
import ProductCard from "../product-card/ProductCard.vue"
import axios from "axios"
export default {
    name: 'ProductList',
    components: {
        ProductCard
    },
    props: {
        isBestSales: Boolean
    },
    setup(props) {
        let data = ref([])
        let listCategory = ref([])
        let indexOfCategory = ref(0)
        let page = ref(0)


        let fetchData = async () => {
            const api = props.isBestSales ? "http://localhost:8082/home/best-sales" : `http://localhost:8082/product-list/${listCategory.value[indexOfCategory.value].id}?page=0`
            try {
                let response = await axios.get(api)
                data.value = [...response.data.data]
            } catch (e) {
                console.log(e)
            }
        }
        onMounted(async () => {
            if (!props.isBestSales) {
                try {
                    let listCategoryResponse = await axios.get(`http://localhost:8082/home/category-list?page=0`)
                    listCategory.value = [...listCategoryResponse.data.data]
                } catch (e) {
                    console.log(e)
                }
            }
            fetchData()
        })

        let changeCategory = (index) => {
            indexOfCategory.value = index
            page.value = 0
            fetchData()
        }
        let fetchMore = async() => {
            page.value++
            try {
                let response = await axios.get(`http://localhost:8082/product-list/${listCategory.value[indexOfCategory.value].id}?page=${page.value}`)
                data.value = [...data.value, ...response.data.data]
            } catch (e) {
                console.log(e)
            }
        }
        return {
            data,
            listCategory,
            changeCategory,
            page,
            fetchMore
        }
    }
}
</script>
  





  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./product-list.scss";
</style>