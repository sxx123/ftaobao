<template>
    <div class="header">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <img src="http://gw.alicdn.com/imgextra/i2/1277853/O1CN018tjaod27sitRWj1Mo_!!1277853-0-lubanu.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="http://img.alicdn.com/imgextra/i3/35/O1CN01B42PSj1C84S2jyUYm_!!35-0-luban.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="http://gw.alicdn.com/imgextra/i2/138/O1CN01pYoWiJ1CtFFMPZIcw_!!138-0-lubanu.jpg" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "index_top",
        components:{
          Swiper,
          SwiperSlide
        },
      data(){
          return{
            swiperOptions:{
              autoplay:true,
              slidesPerView: 'auto',
              centeredSlides:true,
              spaceBetween: 10,
              loop:true,
              speed:600, //config参数同swiper4,与官网一致
            }
          }
      },
    }
</script>

<style scoped>
  .swiper-container{
    width: 100%;
    height: 1.5rem;
    border-radius:25px ;
    margin-top: 10px;
  }
  .swiper-slide{
    width: 100%;
    height: 1.5rem;
  }
  .swiper-slide img{
    width: 100%;
    height: 100%;
  }
</style>
