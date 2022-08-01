export type Indexable = {
  id: number,
};

export type Product = Indexable & {
  name: string,
  amount: string,
  orderId?: number
};

export type AddProduct = Omit<Product, 'id'>;

export type User = Indexable & {
  username: string,
  classe: string,
  level: number,
  password: string,
};

export type AddUser = Omit<User, 'id'>;

export type NewUser = Omit<User, 'password'>;

export type Order = Indexable & {
  userId: number,
};

export type AddOrder = Omit<FinalOrder, keyof Order>;

export type PartialOrder = Order & {
  productsIds: string,
};

export type FinalOrder = Order & {
  productsIds: Array<number>,
};

export type Login = Pick<User, 'username' | 'password'>;

export type Payload = Pick<User, 'id' | 'username'>;
