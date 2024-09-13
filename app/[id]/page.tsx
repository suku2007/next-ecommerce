import { DetailPageProps } from "../utilities/types";
import { products } from "../utilities/data";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import AddToCartButton from "../components/AddToCartButton/AddToCartButton";
import style from "./style.module.css"

export default ({ params }: DetailPageProps) => {
  const { id } = params;
  const product = products.find((p) => p.id === Number(id));
  
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8 p-6">
            <ImageSlider productImages={product.images}/>
            
            <div className={style.productDetail}>
                <h1>{product.name}</h1>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
                <p>Rating: {product.rating}</p>
                <AddToCartButton className={style.addToCartButton} product={product}/>
            </div>
        </div>
    </div>
  );
};
