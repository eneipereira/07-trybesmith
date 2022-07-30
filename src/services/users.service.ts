import usersModel from '../models/users.model';
import { AddUser, NewUser } from '../types';

const usersService = {
  async add(data: AddUser): Promise<NewUser> {
    const newUser = await usersModel.add(data);

    return newUser;
  },
};

export default usersService;