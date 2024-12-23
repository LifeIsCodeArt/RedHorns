<script setup>

import { useHeaderItemsStore } from "@/stores/headerStore.js";
import { useHomeItemsStore } from "@/stores/homeStore.js";
import { computed } from "vue";

import NavItem from '@/components/Header/headerNavigation.vue'
import SocialItem from '@/components/Header/headerSocials.vue'

const darkTheme = (computed(()=> useHomeItemsStore().themeCheck))

const store = useHeaderItemsStore()

const navItems = (computed(()=>store.headerNavigation))

const navItemsThird = (computed(()=>store.menuThree))

const socials = (computed(()=>store.socialLinks))

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

</script>


<template>
    <div id="Header" class="min-w-full  max-xl:w-[768px] max-2xl:w-[1238px] max-xsm:w-[374px] max-xl:my-0 max-xl:mx-auto">

        <div class="px-[375px] max-2xl:pl-[115px] max-2xl:pr-[175px] max-xsm:px-0 background h-[50px] flex items-center justify-between max-xl:px-0 max-xl:pl-[24px] max-xl:pr-[14px]  max-md:justify-center"
             :class="darkTheme ? 'background2' : 'background'">

            <nav class="flex items-center">

                <ul class="flex items-center">

                    <NavItem v-for="item in navItems" :item="item" :key="item.id" class="text-white font-medium leading-[18px] text-[14px] max-xsm:text-[10px]" @click="scrollToSection(item.class_id)"/>

                </ul>

                <ul class="flex max-xl:flex xl:block max-md:hidden 2xl:hidden xl:hidden 1lg:hidden md:hidden">

                    <NavItem v-for="item in navItemsThird" :item="item" :key="item.id" class="text-white font-medium leading-[18px] text-[14px] pt-[1px] pl-[4.5px]"/>

                </ul>

            </nav>


            <div class="flex items-center justify-center h-[29px] ">

                <SocialItem class="max-xsm:hidden" v-for="item in socials" :item="item" :key="item.id" />
                
                <div class="ml-[15px] w-[54px] h-full rounded-[50px] flex items-center justify-center cursor-pointer max-md:ml-[85px] max-xsm:ml-[5px]"
                     :class="darkTheme ? 'bg-black' : 'bg-[#f5e1e2]'">

                    <button class=" justify-between block" @click="useHomeItemsStore().changeTheme">


                        <img v-show="!darkTheme" src="@/assets/icons/header-mode/light-theme.png" alt="Light theme" class="z-[10px] w-[25px] h-[25px] mr-[22px]">


                        <img v-show="darkTheme" src="@/assets/icons/header-mode/dark-theme.png" alt="Dark theme" class="z-[10px] w-[25px] h-[25px] ml-[22px]">

                    </button>

                </div>

            </div>

        </div>

    </div>
</template>

<style scoped>

    .background{
        background: linear-gradient(90deg, #401516 0%, #bf3f42 60%,  #ff5458 100%)
    }

    .background2 {
      background: linear-gradient(90deg, #f5e1e2 100%, #e9bfc0 60%, #f5e1e2 100%);
    }

</style>