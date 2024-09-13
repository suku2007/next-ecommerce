import { StaticImageData } from "next/image";

export type Product = {
    id: number;
    name: string;
    price: number;
    thumb: StaticImageData;
    images: StaticImageData[];
    description: string;
    rating: number;
}
export type CartItem = Product & {
  quantity: number;
};

export type ProductCardProps = {
    product: Product;
    
  };

export type AddToCartButtonProps = {
  product: Product;
  className?: string;
};

export type RatingProps = {
  rating: number;
};

export type ImageSliderProps = {
  productImages: StaticImageData[];
};

export type DetailPageProps = {
    params: {
        id: string;
      };
    
  };