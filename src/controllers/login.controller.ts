import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import loginService from '../services/login.service';
import usersService from '../services/users.service';

const loginController = {
  async login(req: Request, res: Response) {
    const data = await loginService.validateBodyLogin(req.body);

    const user = await usersService.getByUser(data);

    const payload = { id: user.id, username: user.username };

    const token = await loginService.makeToken(payload);

    res.status(StatusCodes.OK).json({ token });
  },
};

export default loginController;