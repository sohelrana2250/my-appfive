import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';

import './Shop.css'

const Shop = () => {
    // npm run build ----> deploy process
    const [shop, setShop] = useState([])
    const [card, setCard] = useState([])
    useEffect(() => {

        fetch('products.json').then((res) => res.json()).then((data) => setShop(data)).catch((error) => console.log(error.message))



    }, [])

    console.log(shop)

    const HandelClick = (product) => {

        console.log(product)

        const newCard = [...card, product];

        setCard(newCard);

        // console.log(newCard);
    }
    return (
        <div className='Shop'>

            <div className="product-container">
                {
                    shop.map((v, index) => <Product key={index} product={v} HandelAddToCard={HandelClick}></Product>)
                }

            </div>
            <div className="card-container">

                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Shop;