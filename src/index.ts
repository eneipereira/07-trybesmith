import app from './app';
import vars from './vars';

const PORT = vars.apiPort;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
