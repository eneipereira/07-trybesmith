import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import loginService from '../services/login.service';
import ordersService from '../services/orders.service';

const ordersController = {
  async getAll(_req: Request, res: Response) {
    const orders = await ordersService.getAll();

    res.status(StatusCodes.OK).json(orders);
  },

  async add(req: Request, res: Response) {
    const user = await loginService.readToken(req.headers.authorization);

    const { productsIds } = await ordersService.validateBodyAdd(req.body);

    const newOrder = await ordersService.add(user.id, productsIds);

    res.status(201).json(newOrder);
  },
};

export default ordersController;