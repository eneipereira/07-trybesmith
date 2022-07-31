import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler.middleware';
import loginRoute from './routes/login.route';
import ordersRoute from './routes/orders.route';
import productsRoute from './routes/products.route';
import usersRoute from './routes/users.route';

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/orders', ordersRoute);
app.use('/products', productsRoute);
app.use('/users', usersRoute);

app.use(errorHandler);

export default app;
