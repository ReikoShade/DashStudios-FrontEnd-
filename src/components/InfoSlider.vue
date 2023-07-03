<template>
    <swiper 
    :autoplay="{
      delay: 6000,
      disableOnInteraction: false,
    }" 
    :modules="modules"
    class="info-slider">
    <swiper-slide class="info-slider__slide"  v-for="slide in this.slidesInfo" :key="slide.id">
      <router-link to="#" class="info-slider__link">
        <div class="info-slider__slide-wrapper">
          <div class="info-slider__content-container">
            <div class="info-slider__text-container">
              <h2 class="info-slider__headline headline">
                {{slide.attributes.name}}
              </h2>
              <p class="info-slider__text text">
                {{slide.attributes.description}}
              </p>
            </div>
            <BtnItem :isSecondary=true>Подробнее</BtnItem>
          </div>
          <div class="info-slider__img-container">
            <img :src="slide.images[1].attributes.imgURL" class="info-slider__img">
          </div>
        </div>
      </router-link>  
      </swiper-slide>
    </swiper>
</template>
<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay } from 'swiper';
    import BtnItem from '@/components/BtnItem.vue';

    // Import Swiper styles
    import 'swiper/css';
    

    export default {
      name: 'InfoSlider',
        components: {
            Swiper,
            SwiperSlide,
            BtnItem
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

  <style lang="scss">

  .info-slider{
    display: block;
    width: 100%;
    box-sizing: border-box;
    border-radius: var(--borderRadius);

    &__slide{
      width: 100%;
      box-sizing: border-box;
      border-radius: var(--borderRadius);
    }

    &__link{
      text-decoration: none;
    }

    &__slide-wrapper{
      display: flex;
      width: 100%;
      aspect-ratio: 18/5;
      box-sizing: border-box;
    }

    &__content-container{
      display: flex;
      flex-direction: column;
      gap: 3rem;
      box-sizing: border-box;
      align-items: flex-start;
      justify-content: center;
      padding: 0 4em;
      background-color: var(--LightSmoothBlack);
      border-radius: var(--borderRadius) 0 0 var(--borderRadius);
      width: 40%;
      aspect-ratio: 1/1;
    }

    &__text-container{
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    &__text{
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }

    &__img-container{
      display: flex;
      width: 100%;
    }
    
    &__img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0px var(--borderRadius) var(--borderRadius) 0px;
    }

  }

  @media screen and (max-width: 1439px) {
   
   .info-slider{

     &__slide-wrapper{
       aspect-ratio: 16/6;
     }

     &__text{
       -webkit-line-clamp: 4;
       font-size: 1.1rem;
     }
   }

 }

  @media screen and (max-width: 1023px) {
   
    .info-slider{

      &__slide-wrapper{
        aspect-ratio: 16/9;
      }

      &__text{
        -webkit-line-clamp: 4;
        font-size: 1.1rem;
      }
    }

  }

  @media screen and (max-width: 767px) {

    .info-slider{

      &__content-container{
        display: none;
      }
    }
  }

</style>