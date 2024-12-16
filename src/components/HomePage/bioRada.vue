<script setup>
import { useHomeItemsStore } from "@/stores/homeStore.js";
import { computed } from "vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
const darkTheme = (computed(()=> useHomeItemsStore().themeCheck))
</script>

<template>
  <div class="flex flex-col items-center justify-between text-center">

    <div class="relative flex flex-col items-center justify-center max-xsm:mt-[100px]">
      <img v-if="darkTheme" src="@/assets/icons/logos/mask-group-1.png" class="w-min-[916px] h-min-[289px] max-xsm:w-min-[300px] max-xsm:h-min-[189px]" alt="red-horns">
      <img v-else src="@/assets/icons/logos/red-horns-3.png" class="w-min-[916px] h-min-[289px] max-xsm:w-min-[300px] max-xsm:h-min-[189px]" alt="red-horns">

    </div>

    <Splide :options="{ type: 'loop', autoplay: true }" class="rounded-xl w-full flex max-xl:w-[768px] max-1lg:w-[630px] max-xsm:hidden">
      <SplideSlide class="flex items-center justify-center"><img src="@/assets/images/carousel/01.png" alt="" class="rounded-2xl"></SplideSlide>
      <SplideSlide class="flex items-center justify-center"><img src="@/assets/images/carousel/04.png" alt="" class="rounded-2xl"></SplideSlide>
      <SplideSlide class="flex items-center justify-center"><img src="@/assets/images/carousel/02.png" alt="" class="rounded-2xl"></SplideSlide>
    </Splide>

  </div>
</template>

<style>

.linear {
  background: -webkit-linear-gradient(90deg, #401516 0%, #bf3f42 60%,  #ff5458 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

.background{
  background: linear-gradient(90deg, #0DD0BA 0%, #2A86E5 100%)
}


</style>