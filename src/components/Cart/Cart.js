import React from 'react';
import Cartitem from '../Cartitem/Cartitem';

const Cart = (props) => {

    return (
        <div>
            {
                props.cart.map(cartItem => <Cartitem cartitem={cartItem}></Cartitem>)
            }
        </div>
    );
};

export default Cart;