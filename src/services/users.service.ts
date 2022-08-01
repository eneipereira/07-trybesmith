import Joi from 'joi';
import UnauthorizedError from '../errors/UnauthorizedError';
import usersModel from '../models/users.model';
import { AddUser, Login, NewUser, User } from '../types';
import runSchema from './runSchema';

const usersService = {
  async validateBodyAdd(body: AddUser) {
    const result = runSchema(Joi.object<AddUser>({
      username: Joi.string().required().min(3),
      classe: Joi.string().required().min(3),
      level: Joi.number().required().min(1),
      password: Joi.string().required().min(8),
    }).messages({
      'string.empty': '{{#label}} is required',
    }))(body);

    return result;
  },

  async add(data: AddUser): Promise<NewUser> {
    const newUser = await usersModel.add(data);

    return newUser;
  },

  async getByUser(user: Login): Promise<User> {
    const exists = await usersModel.getByUser(user);

    if (!exists || user.password !== exists.password) throw new UnauthorizedError();

    return exists;
  },
};

export default usersService;