<template>
    <swiper 
    :autoplay="{
      delay: 6000,
      disableOnInteraction: false,
    }" 
    :modules="modules"
    class="game-slider">
    <swiper-slide class="game-slider__slide"  v-for="slide in this.slidesInfo" :key="slide.id">
        <div class="game-slider__slide-wrapper">
            <img :src=slide.attributes.imgURL class="game-slider__img">
        </div>
      </swiper-slide>
    </swiper>
</template>
<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay } from 'swiper';

    // Import Swiper styles
    import 'swiper/css';
    

    export default {
        name: 'GameSlider',
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            return {
              modules: [Autoplay],
            };
        },
        props:{
            slidesInfo:[
              
            ]
        }
    };
</script >

  <style scoped lang="scss">

  .game-slider{
    display: block;
    width: 100%;
    box-sizing: border-box;
    border-radius: var(--borderRadius);

    &__slide-wrapper{
      display: flex;
      width: 100%;
      aspect-ratio: 5/2;
      box-sizing: border-box;
    }

    &__img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0px var(--borderRadius) var(--borderRadius) 0px;
    }

  }

</style>