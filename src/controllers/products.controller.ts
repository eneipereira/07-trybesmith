import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import productsService from '../services/products.service';

const productsController = {
  async getAll(_req: Request, res: Response) {
    const products = await productsService.getAll();

    res.status(StatusCodes.OK).json(products);
  },

  async add(req: Request, res: Response) {
    const newProduct = await productsService.add(req.body);

    res.status(StatusCodes.CREATED).json(newProduct);
  },
};

export default productsController;