<template>
  <div class="scroll-trigger" ref="trigger"></div>
</template>

<script setup lang="ts">
import {
  onMounted, onUnmounted, ref, defineEmits,
} from 'vue';
import useIntersectionObserver from '@/shared/lib/useIntersectionObserver';

const emits = defineEmits(['intersection']);

const trigger = ref(null);

const handler = () => {
  emits('intersection');
};

const { startObserver, stopObserver } = useIntersectionObserver(handler);

onMounted(() => {
  if (!trigger.value) {
    return;
  }

  startObserver(trigger.value);
});

onUnmounted(stopObserver);
</script>

<style lang="less" scoped></style>
