import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const ordersRoute = Router();

ordersRoute.route('/')
  .get(ordersController.getAll)
  .post(ordersController.add);

export default ordersRoute;