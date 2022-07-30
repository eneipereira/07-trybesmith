import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ordersService from '../services/orders.service';

const ordersController = {
  async getAll(_req: Request, res: Response) {
    const orders = await ordersService.getAll();

    res.status(StatusCodes.OK).json(orders);
  },
};

export default ordersController;