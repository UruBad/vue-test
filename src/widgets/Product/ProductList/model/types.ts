import { ProductModel } from '@/entities/Product';
import { Ref } from 'vue';

export interface IProductListModel {
  products: Ref<ProductModel.IProduct[]>
  loadProducts: () => Promise<void>
}
