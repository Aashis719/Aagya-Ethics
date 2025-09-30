export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  comingSoon?: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
}
