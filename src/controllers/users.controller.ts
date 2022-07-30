import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import usersService from '../services/users.service';
import vars from '../vars';

const secret = vars.jwtSecret;

const usersController = {
  async add(req: Request, res: Response) {
    const newUser = await usersService.add(req.body);

    const token = jwt.sign(newUser, secret);

    res.status(StatusCodes.CREATED).json({ token });
  },
};

export default usersController;