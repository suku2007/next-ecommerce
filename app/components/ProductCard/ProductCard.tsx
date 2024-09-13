import { ProductCardProps } from "@/app/utilities/types";
import Image from "next/image";
import style from "./style.module.css"
import Link from "next/link";

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    return(
        <Link href={`/${product.id}`}>
            <div className=" bg-white rounded-lg shadow-lg overflow-hidden">
                <Image className={`$style["product-image"] w-full h-48 object-cover`} src={product.thumb} alt="Product Image"/>
                <div className="p-5">
                <h3 className="text-gray-700 text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-500 mt-2">Rs {product.price}</p>
                </div>
            </div>
        </Link>
        
    );
}

export default ProductCard;