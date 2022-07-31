import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import loginService from '../services/login.service';
import usersService from '../services/users.service';

const usersController = {
  async add(req: Request, res: Response) {
    const newUser = await usersService.add(req.body);

    const token = await loginService.makeToken(newUser);

    res.status(StatusCodes.CREATED).json({ token });
  },
};

export default usersController;