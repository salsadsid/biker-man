import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
        let newCart = []
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            newCart = [...cart, selectedProduct]
        }
        else {
            newCart = [...cart]
        }
        setCart(newCart)
    }
    // console.log(cart);
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
                <h2>Selected Items</h2>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;