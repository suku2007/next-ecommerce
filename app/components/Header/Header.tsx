import Image from "next/image";
import logo from "@/app/assets/images/dummylogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import style from './style.module.css';
export default () =>{
    return(
        <header className={style.header}>
            <Link className={style.logo} href="/">
                <Image className={style.logoImg} src={logo} alt=""/>
            </Link>
            <div className="cart-icn">
                <Link href="/cart"><FontAwesomeIcon className={style.cartIcnSvg} icon={faCartShopping} /></Link>
            </div>
        </header>
    );
}