import { DetailPageProps } from "../utilities/types";
import { products } from "../utilities/data";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import AddToCartButton from "../components/AddToCartButton/AddToCartButton";
import style from "./style.module.css"
import Rating from "@/app/components/Rating/Rating";

const DetailPage = ({ params }: DetailPageProps) => {
  const { id } = params;
  const product = products.find((p) => p.id === Number(id));
  
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container mx-auto">
        <div className={`flex gap-6 ${style.mainWrap}`}>
          <div className="w-1/3">
            <ImageSlider productImages={product.images}/>
          </div>
            <div className={`${style.productDetail} w-2/3`}>
                <h1>{product.name}</h1>
                <p>Price: {product.price}</p>
                <p className="mb-4">Description: {product.description}</p>
                <Rating rating={product.rating}/>
                <div className="mb-4"></div>
                <AddToCartButton className={style.addToCartButton} product={product}/>
            </div>
        </div>
    </div>
  );
};

export default DetailPage;