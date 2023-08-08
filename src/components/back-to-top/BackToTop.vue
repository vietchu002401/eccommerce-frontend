<template>
  <div @click="backToTop" :style="'opacity : ' + show + ';'" class="back-to-top">

  </div>
</template>


<script setup>

import {onMounted, ref} from "vue";

let show = ref(0)
let backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
onMounted(()=>{
  let scrollEvent = ()=>{
    if(window.scrollY > 0){
      show.value = 1
    }else{
      show.value = 0
    }
  }
  window.addEventListener("scroll",scrollEvent)
  return ()=> window.removeEventListener("scroll",scrollEvent)
})
</script>

<style lang="scss" scoped>
@import "./back-to-top.scss";
</style>