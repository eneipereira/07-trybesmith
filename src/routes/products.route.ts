import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRoute = Router();

productsRoute.route('/')
  .get(productsController.getAll)
  .post(productsController.add);

export default productsRoute;