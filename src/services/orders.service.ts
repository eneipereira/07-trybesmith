import Joi from 'joi';
import ordersModel from '../models/orders.model';
import productsModel from '../models/products.model';
import { AddOrder, FinalOrder } from '../types';
import runSchema from './runSchema';

const ordersService = {
  async validateBodyAdd(body: AddOrder): Promise<AddOrder> {
    const result = runSchema(Joi.object<AddOrder>({
      productsIds: Joi.array().required().items(Joi.number().required()),
    }).messages({
      'array.includesRequiredUnknowns': '{{#label}} must include only numbers',
    }))(body);

    return result;
  },

  async getAll(): Promise<FinalOrder[]> {
    const ordersList = await ordersModel.getAll();

    const orders = ordersList.map((order) => ({
      id: order.id,
      userId: order.userId,
      productsIds: order.productsIds.split(',').map((prodId) => Number(prodId)),
    }));

    return orders as FinalOrder[];
  },

  async add(userId: number, productsIds: Array<number>):
  Promise<Omit<FinalOrder, 'id'>> {
    const newOrderId = await ordersModel.add(userId);

    await Promise.all(productsIds.map((prodId) => {
      productsModel.edit(newOrderId, prodId);

      return prodId;
    }));

    return { userId, productsIds };
  },
};

export default ordersService;