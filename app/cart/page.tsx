'use client'
import { useEffect, useState } from "react";
import { CartItem } from "../utilities/types";
import Image from "next/image";
import { updateCartIcon } from "../utilities/common";
import style from "./style.module.css"

const Cart = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [total, setTotal] = useState<number>(0);
    

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        const items = storedCart ? JSON.parse(storedCart) : [];
        const cart = storedCart ? JSON.parse(storedCart) : [];
        setCartItems(items);
        calculateTotal(items);
        updateCartIcon(cart);
    }, []);

    const calculateTotal = (items: CartItem[]) => {
        const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotal(totalAmount);
    };

    const handleQuantityChange = (id: number, newQuantity: number) => {
        const updatedItems = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedItems);
        calculateTotal(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
        updateCartIcon(updatedItems);

    };

    const handleRemoveItem = (id: number) => {
        const updatedItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedItems);
        calculateTotal(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
        updateCartIcon(updatedItems);
    };

    return (
        <div className="container mx-auto block">
            <div className="p-6">
                <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
                
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <ul>
                            {cartItems.map((item : CartItem) => (
                                <li key={item.id} className="flex justify-between items-center mb-4">
                                    {/* Product Thumbnail */}
                                    <div className="w-20 h-20 relative">
                                        <Image 
                                            src={item.thumb}
                                            alt=""
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    
                                    {/* Product Info */}
                                    <div className="flex-grow px-4">
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p className="text-gray-500">Price: ${item.price}</p>
                                    </div>
                                    
                                    {/* Quantity Controls */}
                                    <div className="flex items-center">
                                        <button 
                                            className="px-2 py-1 border rounded bg-gray-200"
                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span className="px-4">{item.quantity}</span>
                                        <button 
                                            className="px-2 py-1 border rounded bg-gray-200"
                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Remove Button */}
                                    <button
                                        className="ml-4 px-4 py-2 bg-red-500 text-white rounded"
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
                            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;