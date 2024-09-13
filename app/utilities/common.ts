export const updateCartIcon = (cart: any[]) => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartIcon = document.querySelector('.cart-icn');
    if (cartIcon) {
        if(totalItems > 0){
            cartIcon.setAttribute('totalitems', totalItems.toString());
        }else{
            cartIcon.removeAttribute('totalitems');
        }
        
    }
};