import productsModel from '../models/products.model';
import { AddProduct, Product } from '../types';

const productsService = {
  async add(data: AddProduct): Promise<Product> {
    const newProduct = await productsModel.add(data);
    
    return newProduct;
  },
};

export default productsService;