<script setup>
import {useHomeItemsStore} from '@/stores/homeStore.js'
import BioRada from "@/components/HomePage/bioRada.vue";
import Article from '@/components/HomePage/article.vue'

import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const store = useHomeItemsStore()

const darkTheme = (computed(()=> useHomeItemsStore().themeCheck))

const articles = computed(()=> store.articleItems)

const articles2 = computed(()=> store.articleItems2)

const isModalVisible = ref(false);
const selectedArticle = ref({});

const handleArticleSelect = (item) => {
  selectedArticle.value = item;
  isModalVisible.value = true;
};

const showButton = ref(false);

const scrollToHeader = () => {
  const header = document.getElementById("Header");
  if (header) {
    header.scrollIntoView({ behavior: "smooth" });
  }
};

const handleScroll = () => {
  showButton.value = window.scrollY > 300;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

</script>

<template>

  <div class="fixed top-0 left-0 w-full h-full bg-gray-500 opacity-80 z-50" v-if="isModalVisible" @click="isModalVisible = !isModalVisible"></div>

  <div
      class="fixed flex flex-col font-inter items-center justify-between top-[9%] left-1/3 max-2xl:left-[31%] max-xl:left-[20%] max-1lg:left-[13%] max-1lg:top-[5%] max-xsm:left-[5%] max-xsm:top-[7%] transform -translate-x-1/2 z-[51] w-[90%] max-w-[600px] h-auto max-h-[90%] py-[22px] rounded-2xl space-y-8 overflow-y-auto shadow-lg px-[20px]"
      v-if="isModalVisible"
      :class="darkTheme ? 'background-card-1' : 'background-card-2'"
      :style="{
    animation: isModalVisible ? 'flyIn 1.0s ease-in-out forwards' : ''
  }"
  >
    <h1 class="text-2xl font-bold text-center tracking-[1px]" :class="darkTheme ? 'text-[#f5e1e2]' : 'text-[#bf3f42]'">Magical {{selectedArticle.text}} Brewing Method</h1>

    <div class="space-y-1" :class="darkTheme ? 'text-[#f5e1e2]' : 'text-[#bf3f42]'">
      <h2 class="text-lg font-black tracking-[2px]">Description:</h2>
      <p class="text-sm leading-relaxed font-inter">
        Magical coffee isn’t just a drink; it’s a ritual that awakens inspiration and energy.
        It unveils unique flavor nuances and brings warmth to even the coldest mornings.
        This method suits any type of coffee beans and reflects your personal mood and intentions.
      </p>
    </div>

    <div class="space-y-1" :class="darkTheme ? 'text-[#f5e1e2]' : 'text-[#bf3f42]'">
      <h2 class="text-lg font-black tracking-[1px]">Ingredients:</h2>
      <ul class="list-disc list-inside text-sm leading-relaxed font-inter">
        <li><strong>Coffee beans</strong> — freshly ground to preserve the aroma. Choose your flavor: vibrant fruity notes or rich chocolate undertones.</li>
        <li><strong>Water</strong> — clean and filtered, heated to the ideal temperature (92–96°C).</li>
        <li><strong>Heart and intention</strong> — the secret ingredient.</li>
      </ul>
    </div>

    <div class="space-y-1" :class="darkTheme ? 'text-[#f5e1e2]' : 'text-[#bf3f42]'">
      <h2 class="text-lg font-black tracking-[2px]">Brewing Method:</h2>
      <ol class="list-decimal list-inside text-sm leading-relaxed space-y-2 font-inter">
        <li><strong>Preparation:</strong> Find a quiet space where you can immerse yourself in the process. Treat this as your personal ritual. Warm your brewing device.</li>
        <li><strong>Measure:</strong> Use 1–2 tablespoons (about 10–15 g) of freshly ground coffee per cup. Adjust to your taste.</li>
        <li><strong>Brewing:</strong> Slowly pour hot water over the coffee, using circular motions for even saturation. If using a cezve, heat gently until it foams 2–3 times.</li>
        <li><strong>Steeping:</strong> Let it steep for 2–4 minutes. Breathe in the aroma as you wait.</li>
        <li><strong>The Finishing Touch:</strong> Add your favorite elements: milk, syrup, or spices like cinnamon. Get creative!</li>
      </ol>
    </div>

    <div class="space-y-1" :class="darkTheme ? 'text-[#f5e1e2]' : 'text-[#bf3f42]'">
      <h2 class="text-lg font-black tracking-[1px]">The Ritual of Enjoyment:</h2>
      <p class="text-sm leading-relaxed font-inter">
        Before your first sip, close your eyes and take in the aroma. Let it fill you with inspiration. Drink slowly, savoring every sip. Feel the magic unfold.
      </p>
    </div>

  </div>

  <div class="relative font-anton_regular pt-[44px] px-[375px] max-2xl:px-[125px] pb-[140px] max-xl:min-w-[768px] max-1lg:w-[630px] max-xsm:w-[375px] max-xl:my-0 max-xl:mx-auto max-xl:px-[24px] max-md:min-w-[375px] max-md:my-0 max-md:mx-0 max-md:px-[15px] relative" :class="darkTheme ? 'bg-[#0E1219]' : 'bg-[#f5e1e2]'">


    <div class="flex justify-between min-w-[1380px] max-2xl:min-w-[1024px] max-xl:min-w-[728px] max-1lg:w-[630px] max-xsm:min-w-[360px] max-xsm:w-[360px]">

      <div class="mr-[39px] w-[1140px] max-xl:mr-0 max-xl:pr-0 max-xl:w-[1024px] max-md:mr-[5px] max-md:w-full max-xsm:w-[360px]">

        <div>

          <div id="Menu" class="text-[14px] leading-[18px] tracking-[0.5px] font-anton_regular font-bold flex items-center align-baseline max-md:block  max-md:text-center max-md:h-[36px] max-md:w-full max-xl:pl-[20px] max-xsm:pl-0 max-xsm:w-[200px]"
               :class="darkTheme ? 'text-[#f9eded]' :'text-[#bf3f42]'">
            Головна  <span class="pt-[1px] px-[4px] h-[18px]">></span>

            <span class="font-normal text-center w-auto h-[18px]"> Red Horns</span>

          </div>

          <bio-rada class="mb-40"/>

          <h1 class=" uppercase text-[42px] leading-[54px] tracking-[1.5px] font-anton_regular font-black max-md:text-center max-md:text-[35px] max-md:leading-[45.5px] max-xl:w-full max-xl:text-center max-xsm:w-[360px] max-xsm:text-[28px]"
              :class="darkTheme ? 'text-[#f9eded]' :'text-[#bf3f42]'">

            Our coffee - your power

          </h1>

          <div class="w-[440px] h-[8px] rounded-3xl mt-[9px] max-xl:ml-[270px] max-1lg:ml-[145px] max-xsm:ml-[10px] max-xsm:w-[340px]"
               :class="darkTheme ? 'background2' : 'background'"></div>

        </div>

        <div id="About" class="text-[20px] text-[#707070]
        tracking-[0.5px] font-inter font-normal mt-[30px] mb-[60px] max-xl:w-full max-xl:text-center max-1lg:w-[700px] max-xsm:w-[360px] max-1lg:text-left"
             :class="darkTheme ? 'text-[#f9eded]' :'text-[#bf3f42]'">

          Step into a world where every cup fuels your ambition and awakens your spirit.

          At Red Horns, we believe coffee is more than just a drink — it’s your daily boost, your moment of focus, and your spark of energy.

          To charging everyone with energy and inspiration by creating

          an atmosphere of freedom, creativity and strength, what a pleasure

          conquer the day and feel unique.

          Whether you're chasing dreams, conquering goals, or simply recharging, our expertly crafted drinks are here to power your journey.

        </div>

        <h1 class=" uppercase text-[42px] leading-[54px] tracking-[1.5px] font-anton_regular font-black max-md:text-center max-md:text-[35px] max-md:leading-[45.5px] max-xl:w-full max-xl:text-center max-xsm:w-[360px] max-xsm:text-[28px]"
            :class="darkTheme ? 'text-[#f9eded]' :'text-[#bf3f42]'">

          Coffee magic

        </h1>

        <div class="w-[235px] h-[8px] rounded-3xl mt-[9px] max-xl:ml-[370px] max-1lg:ml-[245px] max-xsm:ml-[95px] max-xsm:w-[180px]"
             :class="darkTheme ? 'background2' : 'background'"></div>

        <div id="About" class="text-[20px] text-[#707070] leading-[32px] tracking-[0.5px] font-inter font-normal mt-[30px] mb-[60px] max-xl:w-full max-xl:text-center max-1lg:w-[700px] max-xsm:w-[356px] max-1lg:text-left"
             :class="darkTheme ? 'text-[#f9eded]' :'text-[#bf3f42]'">

          Our baristas are not just coffee makers—they’re coffee artists.
          With years of experience, exceptional skill, and a genuine love for coffee, they transform premium beans into masterpieces.
          Friendly, attentive, and always smiling, our team is here to recommend the perfect blend to suit your mood.
          Every cup they serve is a reflection of their dedication and craftsmanship.
          Come for the coffee, stay for the people. Let us make your day unforgettable—one cup at a time.
          Whether you're chasing dreams, conquering goals, or simply recharging, our expertly crafted drinks are here to power your journey.

        </div>

        <div class="flex flex-col max-xl:w-full">

          <div class="flex flex-col">

            <div class="relative flex flex-col mb-[20px]">

              <h2 class=" uppercase text-center text-[42px] leading-[54px] tracking-[0.5px] font-anton_regular font-black max-md:text-center max-md:text-[35px] max-md:leading-[45.5px] max-xsm:w-[360px] max-xsm:text-[28px]"
                  :class="darkTheme ? 'text-[#f9eded]' :'text-[#bf3f42]'">
                Menu
              </h2>

              <div class="absolute bottom-[-9px] left-[44%] w-[136px] h-[8px] background rounded-3xl mt-[9px] max-1lg:left-[41%] max-xl:left-[43%] max-xsm:left-[39%] max-xsm:w-[81px]"
                  :class="darkTheme ? 'background2' : 'background'"></div>

            </div>

            <div class="flex w-full justify-between items-center max-xsm:flex-col ">

              <div class="">
                <img src="../assets/images/menus/menu-red-1.png" alt="">
              </div>


              <div class="font-inter font-normal text-center align-middle w-full max-xsm:w-[340px]"
                   :class="darkTheme ? 'text-[#f9eded]' :'text-[#bf3f42]'">

                <p class="text-left mb-16"> <span class="block mb-2 text-center font-black">🔥 Hot drinks to warm your day:<br></span>
                From the rich Red Velvet Latte to the energizing Forest Energy and classic Wild Cappuccino,<br> we've crafted the perfect lineup of cozy flavors.<br><br></p>

                <p class="text-left" :class="darkTheme ? 'linear4' :'linear3'"><span class="block mb-2 text-center font-black">❄️ Cold drinks to keep you refreshed:<br></span>
                Cool down with our signature Ice Red Energy, refreshing Citrus Horn Cooler,<br> or creamy Maple Cream Fizz — perfect for any mood.<br><br></p>

              </div>

              <div class="pb-[45px]">
                <img src="../assets/images/menus/menu-yellow-1.png" alt="" >
              </div>


            </div>

          </div>

          <div id="Works" class="relative flex flex-col my-12">

            <h3 class=" uppercase text-center text-[36px] leading-[54px] tracking-[0.5px] font-anton_regular font-black max-md:text-center max-md:text-[35px] max-md:leading-[45.5px] max-xsm:w-[360px] max-xsm:text-[28px]"
                :class="darkTheme ? 'text-[#f9eded]' :'text-[#bf3f42]'">
              Hot drinks
            </h3>

            <div class="absolute bottom-[-9px] left-[41%] w-[200px] h-[8px] background rounded-3xl mt-[9px] max-xl:left-[40%] max-1lg:left-[36%] max-xsm:left-[30%] max-xsm:w-[141px]"
                 :class="darkTheme ? 'background2' : 'background'"></div>

          </div>


          <div class="w-full grid grid-rows-3 grid-flow-col gap-4 max-xl:grid-rows-4 pl-0 max-xl:pl-20 max-1lg:pl-0 max-xsm:grid-rows-8 max-xsm:w-[360px]">

            <Article v-for="item in articles" :item="item" :key="item.id" :attribute="'1'" @click="handleArticleSelect(item)"/>

          </div>


          <div class="relative flex flex-col my-12">

            <h3 class=" uppercase text-center text-[36px] leading-[54px] tracking-[0.5px] font-anton_regular font-black max-md:text-center max-md:text-[35px] max-md:leading-[45.5px] max-xsm:w-[360px] max-xsm:text-[28px]"
                :class="darkTheme ? 'text-[#f9eded]' :'text-[#bf3f42]'">
              Cold drinks
            </h3>

            <div class="absolute bottom-[-9px] left-[41%] w-[205px] h-[8px] background rounded-3xl mt-[9px] max-xl:left-[40%] max-1lg:left-[36%] max-xsm:left-[29%] max-xsm:w-[152px]"
                 :class="darkTheme ? 'background2' : 'background'"></div>

          </div>

          <div class="w-full grid grid-rows-3 grid-flow-col gap-4 max-xl:grid-rows-4 pl-0 max-xl:pl-20 max-1lg:pl-0 max-xsm:grid-rows-8 max-xsm:w-[360px]">

            <Article
              v-for="item in articles2"
              :key="item.id"
              :item="item"
              @click="handleArticleSelect(item)"
              class="transition-all"
            />

          </div>

        </div>

      </div>

    </div>

    <button
        v-if="showButton"
        @click="scrollToHeader"
        class="fixed bottom-5 right-5 p-3.5 px-4 text-base font-red_display border-0 cursor-pointer rounded-[50%]"
        :class="darkTheme ? 'background2 text-black' : 'background text-white'"
    >
      On Top
    </button>

  </div>

</template>

<style>

.linear {
  color: #bf3f42
}

.background{
  background: linear-gradient(90deg, #401516 0%, #bf3f42 60%,  #ff5458 100%)
}

.background-card-1{
  background: #401516;
}

.background-card-2{
  background: #f5e1e2;
}

.linear2 {
  color: #f7e7e8;
}

.linear3 {
  background: -webkit-linear-gradient(90deg, #12283a 0%, #345b73 60%, #5f88a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.linear4 {
  background: -webkit-linear-gradient(90deg, #d4ebf2 0%, #a3cde3 60%, #7aaac9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.background2 {
  background: linear-gradient(90deg, #f5e1e2 0%, #e9bfc0 60%, #d99a9b 100%);
}

@keyframes flyIn {
  0% {
    transform: translateY(-100px) scale(0.95);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

.fly-in-enter-active {
  transition: all 0.5s ease-out;
}
.fly-in-enter-from {
  transform: translateY(50px);
  opacity: 0;
}
.fly-in-enter-to {
  transform: translateY(0);
  opacity: 1;
}

</style>
