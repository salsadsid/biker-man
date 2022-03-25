import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = (props) => {
    // const { handleAddProduct } = props.handleaddtocart;
    // console.log(props)
    const { name, price, img } = props.product
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h1 className='product-name'>{name}</h1>
                <p className='product-price'>Price: ${price}</p>
            </div>
            <button onClick={() => props.handleaddtocart(props.product)} className='add-btn'>Add To Cart
                <FontAwesomeIcon icon={faShoppingCart}> </FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;