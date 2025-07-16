<template>
  <div class="products">
    <h1>This is an products page</h1>

    <ProductList
      :products="products"
    />
  </div>
</template>
<script setup lang="ts">
import { ProductList, ProductListModel } from '@/widgets/Product';
import { onBeforeMount } from 'vue';

const { products, loadProducts } = ProductListModel.useProductsList();

onBeforeMount(loadProducts);
</script>
