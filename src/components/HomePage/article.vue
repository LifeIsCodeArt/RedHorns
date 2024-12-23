<script setup>

import { computed, onMounted, ref } from "vue";
import { useHomeItemsStore } from "@/stores/homeStore.js";
import { useVisibilityObserver } from "@/components/Hooks/useVisibilityObserver.js";

const darkTheme = (computed(()=> useHomeItemsStore().themeCheck))

const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    },
  attribute: String
})

const { isVisible, observe } = useVisibilityObserver();
const articleRef = ref(null);

onMounted(() => {
  observe(articleRef.value);
});

</script>


<template>
  <div
      ref="articleRef"
      class="flex flex-col items-center px-[20px] py-[20px] h-auto w-[387px] rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] max-xl:w-[350px] transition-all"
      :class="[
      isVisible ? 'animate-fly-in' : 'opacity-0',
      darkTheme ? 'bg-[#202434]' : 'bg-[#f5e1e2]',
    ]"
  >
    <img
        :src="item.image"
        :alt="item.image_description"
        class="rounded-2xl"
        :class="attribute === '0' ? 'h-[320px] object-contain' : 'h-[340px] object-cover'"
    />
    <div class="flex flex-col mt-[18px]">
      <p
          class="font-red_display font-normal text-[22px]  leading-[26.4px] tracking-[1.5px] max-xl:text-center pointer"
          :class="darkTheme ? 'text-[#f9eded]' : 'text-[#bf3f42]'"
      >
        {{ item.text }}
      </p>
      <div class="flex items-center justify-center mt-[10px]">
        <div class="mr-[22px] flex">
          <img src="@/assets/icons/article/human.svg" alt="human icon" />
          <p
              class="uppercase font-anton_regular text-[18px]  leading-[14px] tracking-[0.5px] ml-[6px]"
              :class="darkTheme ? 'text-[#f9eded]' : 'text-[#bf3f42]'"
          >
            {{ item.author }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

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