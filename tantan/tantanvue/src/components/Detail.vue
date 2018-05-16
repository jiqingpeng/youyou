<template>
    <div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">slider1</div>
            <div class="swiper-slide">slider2</div>
            <div class="swiper-slide">slider3</div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import swiper from 'swiper'
import 'swiper/dist/css/swiper.css';
export default {
  name:"Home",
  data () {
    return {
     
    }
  },
  mounted () {
    let mySwiper = new swiper('.swiper-container',{
      initialSlide :2,
      pagination: {
        el: '.swiper-pagination',
      },
    }) 
  },
  components: {
  
  },
  methods: {
    
  },
  created(){
    
  },
  
}
</script>
<style scoped>
  .swiper-slide{
      border:1px solid red;
      height:120px;
  }
</style>
