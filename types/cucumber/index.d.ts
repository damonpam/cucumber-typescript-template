export interface Product {
  id: string;
  name: string;
}

declare module 'cucumber' {
  interface World {
    timestamp: string;
    productList: Product[];
  }
}
