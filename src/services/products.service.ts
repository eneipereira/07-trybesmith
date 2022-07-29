import productsModel from '../models/products.model';
import { AddProduct, Product } from '../types';

const productsService = {
  async getAll(): Promise<Product[]> {
    const products = await productsModel.getAll();

    return products;
  },

  async add(data: AddProduct): Promise<Product> {
    const newProduct = await productsModel.add(data);
    
    return newProduct;
  },
};

export default productsService;