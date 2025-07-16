import { ProductApi, ProductModel } from '@/entities/Product';
import { ref } from 'vue';
import type { IProductListModel } from './types';

export function useProductsList(): IProductListModel {
  const products = ref<ProductModel.IProduct[]>([]);

  const loadProducts = async () => {
    const data = await ProductApi.getProducts();

    products.value = data;
  };

  return {
    products,
    loadProducts,
  };
}

export default useProductsList;
