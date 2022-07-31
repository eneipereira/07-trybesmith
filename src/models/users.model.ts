import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { AddUser, Login, NewUser, User } from '../types';
import db from './connection';

const usersModel = {
  async add(data: AddUser): Promise<NewUser> {
    const { username, classe, level, password } = data;

    const sql = `insert into Trybesmith.Users (username,
    classe, level, password) values (?, ?, ?, ?)`;

    const values = [username, classe, level, password];

    const [{ insertId }] = await db.query<ResultSetHeader>(sql, values);

    return { id: insertId, username, classe, level } as NewUser;
  },

  async getByUser(user: Login): Promise<User> {
    const { username } = user;

    const sql = 'select * from Trybesmith.Users where username = ?';

    const [[result]] = await db.query<RowDataPacket[]>(sql, [username]);

    return result as User;
  },
};

export default usersModel;