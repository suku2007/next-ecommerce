import ProductCard from "./components/ProductCard/ProductCard";
import UpdateCart from "./components/UpdateCart/UpdateCart";
import { products } from "./utilities/data";
import { Product } from "./utilities/types";
import style from "@/app/style.module.css"
export default function Home() {
  return (
    <div className={style.productWrap}>
      <UpdateCart/>
      <div className="container mx-auto">
        <div className={`$product-grid grid grid-cols-3 gap-8`}>
          {
            products.map((product : Product, key)=> <ProductCard product={product}/>)
          }
        </div>
        
      </div>
    </div>
  );
}
