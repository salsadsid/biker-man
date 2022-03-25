import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddProduct = (selectedProduct) => {
        setCart(selectedProduct)
    }
    console.log(cart);
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        handleaddtocart={handleAddProduct}
                        product={product}
                        key={product.id}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>

            </div>
        </div>
    );
};

export default Shop;