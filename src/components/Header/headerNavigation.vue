<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})

import { computed } from "vue";
import { useHomeItemsStore } from "@/stores/homeStore.js";

const darkTheme = (computed(()=> useHomeItemsStore().themeCheck))

</script>


<template>

    <li class="mr-[23px] flex items-center justify-center">

        <img v-if="!darkTheme" :src="item.icon" :alt="item.icon_description" class="w-[40px] h-[31px] max-xsm:w-[30px] max-xsm:h-[26px] max-xsm:pt-[5px] pt-[2px]">

        <img v-else :src="item.icon_dark" :alt="item.icon_description" class="w-[40px] h-[31px] max-xsm:w-[30px] max-xsm:h-[26px] max-xsm:pt-[5px] pt-[2px]">
        
        <RouterLink :to="item.link" class="font-anton_regular pt-[1px] pl-[4.5px] max-xsm:pl-0 max-xsm:text-[9px]"
                    :class="darkTheme ? 'text-[#ff5458]' : 'text-[#f5e1e2]'">

            {{item.text}}

        </RouterLink>

    </li>

</template>

<style scoped>

svg {
    fill: #5046e5;
}

.linear {
  background: -webkit-linear-gradient(90deg, #401516 0%, #bf3f42 60%,  #ff5458 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.linear2 {
  background: linear-gradient(90deg, #f5e1e2 0%, #e9bfc0 60%, #d99a9b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>