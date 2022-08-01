import Joi from 'joi';
import productsModel from '../models/products.model';
import { AddProduct, Product } from '../types';
import runSchema from './runSchema';

const productsService = {
  async validateBodyAdd(body: Product): Promise<Product> {
    const result = runSchema(Joi.object<Product>({
      name: Joi.string().required().min(3),
      amount: Joi.string().required().min(3),
    }).messages({
      'string.empty': '{{#label}} is required',
    }))(body);

    return result;
  },

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