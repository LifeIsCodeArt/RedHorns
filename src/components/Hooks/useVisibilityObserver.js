import { ref, onUnmounted } from 'vue';

export function useVisibilityObserver() {
  const isVisible = ref(false); // Tracks if the element is visible

  let observer = null;

  const observerCallback = (entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true;
      observer.disconnect();
    }
  };

  const observe = (el) => {
    if (el) {
      observer = new IntersectionObserver(observerCallback, {
        threshold: 0.5,
      });
      observer.observe(el);
    }
  };

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return { isVisible, observe };
}
