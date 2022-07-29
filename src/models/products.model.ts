import { ResultSetHeader } from 'mysql2';
import { AddProduct, Product } from '../types';
import db from './connection';

const productsModel = {
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
};

export default productsModel;