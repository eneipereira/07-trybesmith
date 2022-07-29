import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRoute = Router();

productsRoute.route('/')
  .post(productsController.add);

export default productsRoute;