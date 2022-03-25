import React from 'react';
import './Cartitem.css'
const Cartitem = (props) => {
    const { name, img } = props.cartitem
    return (
        <div className='cart-item'>
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default Cartitem;