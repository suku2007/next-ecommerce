'use client'

import { updateCartIcon } from "@/app/utilities/common";
import { useEffect } from "react";


const UpdateCart = () =>{ 
    useEffect(() => {
        // On component mount, initialize the cart icon with the current cart data
        const storedCart = localStorage.getItem('cart');
        const cart = storedCart ? JSON.parse(storedCart) : [];
        updateCartIcon(cart);
    }, []);


    return(
<></>
    );
}
export default UpdateCart;