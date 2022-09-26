import React from 'react';
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    //console.log(props.product);

    //console.log(props);


    const { img, name, price, seller, ratings } = props.product;

    const { HandelAddToCard } = props;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>{name.slice(0, 20)}</h4>
                <h5>Prices $:  {price}</h5>
                <p> <small>Seller:  {seller}</small></p>
                <p> <small>Ratings: {ratings}</small></p>

            </div>

            <button className='button-card'>
                <p className='btn-text' onClick={() => HandelAddToCard(props.product)}>Add To Card</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;