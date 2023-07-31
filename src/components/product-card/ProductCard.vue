<template>
    <div class="product-card">
            <div class="img">
                <img :src="image" alt="" />

            </div>
            <div class="product-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="5" viewBox="0 0 52 5" fill="none">
                    <rect y="0.757812" width="14" height="4.10557" rx="2.05279" fill="#05E6B7" />
                    <rect x="19" y="0.757812" width="14" height="4.10557" rx="2.05279" fill="#F701A8" />
                    <rect x="38" y="0.757812" width="14" height="4.10557" rx="2.05279" fill="#00009D" />
                </svg>
                <strong>{{name}}</strong>
                <p>Description: {{description}}</p>
            </div>

        </div>
</template>
  





<script>
export default {
    name: 'ProductCard',
    props : {
        name : String, 
        image : String, 
        description: String
    }
}
</script>
  





  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./product-card.scss"
</style>