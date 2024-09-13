import { ProductCardProps } from "@/app/utilities/types";
import Image from "next/image";
import style from "./style.module.css"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    return(
        <Link href={`/${product.id}`} className={style.productCard}>
            <div className=" bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                    <Image className={`${style.productImg} w-full object-cover`} src={product.thumb} alt="Product Image"/>
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-slate-200 rounded flex items-center">
                    {product.rating} <FontAwesomeIcon icon={faStar} width={13} height={13} color="#e5a717" className="ms-2"/>
                </div>
                </div>
                <div className="p-5">
                    <div className="flex items-center justify-between">
                        <h3 className="text-gray-700 text-xl font-semibold">{product.name}</h3>
                        <p className="text-gray-500 font-medium">₹ {product.price}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;