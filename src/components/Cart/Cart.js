import React, { useState } from 'react';
import Cartitem from '../Cartitem/Cartitem';

const Cart = (props) => {
    const [choose, setChoose] = useState([])
    const chooseOne = () => {
        const randomProductNumber = Math.floor(Math.random() * props.cart.length)
        setChoose(props.cart[randomProductNumber])
    }

    return (
        <div>
            {
                props.cart.map(cartItem => <Cartitem cartitem={cartItem} key={cartItem.id}></Cartitem>)
            }
            <button onClick={() => chooseOne()}>Choose 1 Item</button>
            <h2>{choose.name}</h2>
        </div>
    );
};

export default Cart;