import React from 'react'
import { useSelector } from 'react-redux'
import RestaurantMenu from './RestaurantMenu';

const Cart = () => {
    const cartItems = useSelector((Store) => Store.cart.items);
    return (
        <div className='text-center m-4 p-4 font-bold text-xl'>Cart
            <RestaurantMenu items={cartItems} />
        </div>
    )
}

export default Cart