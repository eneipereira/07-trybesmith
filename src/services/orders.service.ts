import ordersModel from '../models/orders.model';
import { FinalOrder } from '../types';

const ordersService = {
  async getAll(): Promise<FinalOrder[]> {
    const ordersList = await ordersModel.getAll();

    const orders = ordersList.map((order) => ({
      id: order.id,
      userId: order.userId,
      productsIds: order.productsIds.split(',').map((prodId) => Number(prodId)),
    }));

    return orders as FinalOrder[];
  },
};

export default ordersService;