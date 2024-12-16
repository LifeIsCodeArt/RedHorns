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

    <a class="h-full w-[29px] flex justify-center items-end mr-[5px] pb-[7px]" :href="item.link">

        <img v-if="!darkTheme" :src="item.icon" :alt="item.icon_description" class="w-[16px] h-[18px]">

        <img v-else :src="item.icon_dark" :alt="item.icon_description" class="w-[16px] h-[18px]">

    </a>

</template>

<style scoped>


</style>