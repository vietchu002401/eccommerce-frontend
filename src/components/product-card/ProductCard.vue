<template>
    <router-link :to="'/detail/' + product.id">
        <div class="product-card">
            <div class="img">
                <img :src="imageUrl" alt="" />

            </div>
            <div class="product-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="5" viewBox="0 0 52 5" fill="none">
                    <rect y="0.757812" width="14" height="4.10557" rx="2.05279" fill="#05E6B7" />
                    <rect x="19" y="0.757812" width="14" height="4.10557" rx="2.05279" fill="#F701A8" />
                    <rect x="38" y="0.757812" width="14" height="4.10557" rx="2.05279" fill="#00009D" />
                </svg>
                <div>
                    <strong>{{ product.name }}</strong>
                    <p>Price: {{ product.price }} VND</p>
                </div>
            </div>
        </div>
    </router-link>
</template>
  





<script>
export default {
    name: 'ProductCard',
    props: {
        product : Object
    },
    setup(props) {
        const serverUrl = process.env.VUE_APP_SERVER_URL
        let imageUrl = serverUrl + props.product.productImages[0].sourceImage
        return {
            imageUrl
        }
    }
}
</script>
  





  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./product-card.scss"
</style>