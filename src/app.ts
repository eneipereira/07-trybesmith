import express from 'express';
import ordersRoute from './routes/orders.route';
import productsRoute from './routes/products.route';
import usersRoute from './routes/users.route';

const app = express();

app.use(express.json());

app.use('/orders', ordersRoute);
app.use('/products', productsRoute);
app.use('/users', usersRoute);

export default app;
