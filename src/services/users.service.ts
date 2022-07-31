import UnauthorizedError from '../errors/UnauthorizedError';
import usersModel from '../models/users.model';
import { AddUser, Login, NewUser, User } from '../types';

const usersService = {
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