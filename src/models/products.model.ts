import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { AddProduct, Product } from '../types';
import db from './connection';

const productsModel = {
  async getAll(): Promise<Product[]> {
    const sql = 'select * from Trybesmith.Products;';
  
    const [products] = await db.query<RowDataPacket[]>(sql);
  
    return products as Product[];
  },
  
  async add(data: AddProduct): Promise<Product> {
    const { name, amount, orderId } = data;

    const toInsert = {
      withOrder: '(name, amount, orderId) values (?, ?, ?)',
      noOrder: '(name, amount) values (?, ?)',
    };

    const values: Array<string | number> = [name, amount];

    let sql = 'insert into Trybesmith.Products ';

    if (orderId) {
      sql = sql.concat(toInsert.withOrder);
      values.push(orderId);
    }

    sql = sql.concat(toInsert.noOrder);

    const [{ insertId }] = await db.query<ResultSetHeader>(sql, values);

    return { id: insertId, ...data };
  },

  async edit(orderId: number, productId: number): Promise<void> {
    const sql = 'update Trybesmith.Products set orderId = ? where id = ?';

    await db.query(sql, [orderId, productId]);
  },
};

export default productsModel;