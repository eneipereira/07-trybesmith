const { env } = process;

export default {
  username: env.DB_USER,
  password: env.DB_PASSWD,
  host: env.DB_HOST,
  apiPort: Number(env.PORT || 3000),
  jwtSecret: env.JWT_SECRET,
};