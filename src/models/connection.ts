import mysql from 'mysql2/promise';
import vars from '../vars';

export default mysql.createPool({
  host: vars.host,
  user: vars.username,
  password: vars.password,
});