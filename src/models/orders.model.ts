import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { PartialOrder } from '../types';
import db from './connection';

const ordersModel = {
  async getAll(): Promise<PartialOrder[]> {
    const sql = `select o.id, o.userId, group_concat(p.id)
    as productsIds from Trybesmith.Products p join
    Trybesmith.Orders o on p.orderId = o.id group by o.id order by o.userId;
    `;

    const [orders] = await db.query<RowDataPacket[]>(sql);

    return orders as PartialOrder[];
  },

  async add(userId: number): Promise<number> {
    const sql = 'insert into Trybesmith.Orders (userId) values (?)';

    const [{ insertId }] = await db.query<ResultSetHeader>(sql, [userId]);

    return insertId;
  },
};

export default ordersModel;
