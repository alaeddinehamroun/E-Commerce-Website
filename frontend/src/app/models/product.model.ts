
export interface ProductModelServer {
    id: number;
    name: string;
    category: string;
    description: string;
    image: string;
    price: Number;
    quantity: number;
    images: string;
  }
  
  
  export interface serverResponse  {
    count: number;
    products: ProductModelServer[]
  };