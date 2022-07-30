import { Router } from 'express';
import usersController from '../controllers/users.controller';

const usersRoute = Router();

usersRoute.route('/')
  .post(usersController.add);

export default usersRoute;
