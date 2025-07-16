<template>
  <div
    class="product-list"
  >
    <ProductCard
      v-for="product of products"
      :key="`product-${product.id}`"
      :product="product"
    >
      <template v-slot:button-add-to-favorites>
        <AddToFavorites :id="product.id" />
      </template>
    </ProductCard>
  </div>
</template>

<script setup lang="ts">
import { ProductCard, ProductModel } from '@/entities/Product';
import { AddToFavorites } from '@/features/Product';
import { defineProps } from 'vue';

defineProps<{
  products: ProductModel.IProduct[]
}>();
</script>

<style scoped lang="less">
.product-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 336px));
  gap: 20px;
  align-items: start;
  justify-content: center;
}
</style>
