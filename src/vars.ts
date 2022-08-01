const { env } = process;

export default {
  username: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  host: env.MYSQL_HOST,
  apiPort: Number(env.PORT || 3000),
  jwtSecret: env.JWT_SECRET || 'sanduichedepresunto',
};