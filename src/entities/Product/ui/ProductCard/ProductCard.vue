<template>
  <article class="product-card">
    <img :src="product.image" :alt="product.name" class="product-card-image">
    <span>{{ product.name }}</span>
    <slot name="button-add-to-favorites" />
  </article>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

import type { IProduct } from '../../model';

interface IProps {
  product: IProduct;
}

defineProps<IProps>();
</script>

<style scoped lang="less">
.product-card {
  display: flex;
  flex-direction: column;
}
</style>
