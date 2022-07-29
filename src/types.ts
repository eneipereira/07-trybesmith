export type Indexable = {
  id: number,
};

export type Product = Indexable & {
  name: string,
  amount: string,
  orderId?: number
};

export type AddProduct = Omit<Product, 'id'>;
