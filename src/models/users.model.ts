import { ResultSetHeader } from 'mysql2';
import { AddUser, NewUser } from '../types';
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
};

export default usersModel;