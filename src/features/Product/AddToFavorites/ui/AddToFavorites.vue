<template>
  <button @click="addOnClick">Add</button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ProductApi } from '@/entities/Product';

const props = defineProps<{
  id: number
}>();

const addOnClick = async () => {
  try {
    await ProductApi.addToFavorite(props.id);
    console.log('added to favorites');
  } catch (e: any) {
    console.log('error', e);
  }
};
</script>

<style lang="scss"></style>
