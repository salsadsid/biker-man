import React, { useState } from 'react';
import Cartitem from '../Cartitem/Cartitem';
import './Cart.css'
const Cart = (props) => {
    const [choose, setChoose] = useState([])
    const chooseOne = () => {
        if (props.cart.length) {
            const randomProductNumber = Math.floor(Math.random() * props.cart.length)
            setChoose(props.cart[randomProductNumber])
        }
        else {
            let emptyCart = [];
            setChoose(emptyCart)
        }

    }

    return (
        <div>
            {
                props.cart.map(cartItem => <Cartitem cartitem={cartItem} key={cartItem.id}></Cartitem>)
            }
            <button onClick={() => chooseOne()} className="choose-btn">CHOOSE 1 ITEM</button>
            <button onClick={() => props.removecart()} className='remove-btn'>CHOOSE AGAIN</button>
            <h2>{choose.name}</h2>
        </div>
    );
};

export default Cart;