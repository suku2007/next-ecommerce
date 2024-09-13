'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import style from './style.module.css';
import { AddToCartButtonProps } from '@/app/utilities/types';
import { useEffect } from 'react';
import { updateCartIcon } from '@/app/utilities/common';

export default ({product, className} : AddToCartButtonProps) =>{

    const handleAddToCart = () => {
        const storedCart = localStorage.getItem('cart');
        let cart = storedCart ? JSON.parse(storedCart) : [];

        const existingProductIndex = cart.findIndex((item: any) => item.id === product.id);

        if (existingProductIndex >= 0) {
            cart[existingProductIndex].quantity += 1;
        } else {
            const newProduct = {
                ...product,
                quantity: 1
            };
            cart.push(newProduct);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartIcon(cart);
    };

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        const cart = storedCart ? JSON.parse(storedCart) : [];
        updateCartIcon(cart);
    }, []);


    return(
        <button className={`${style.addBtn} ${className}`}
        onClick={handleAddToCart} 
        > <FontAwesomeIcon icon={faCartArrowDown} /> Add To Cart</button>
    );
}