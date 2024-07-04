import React from 'react';
import './styles/purchaseCard.css';

const PurchaseCard = ({ purchase }) => {

    console.log(purchase);

    return (
        <article className='purchaseCard'>
            <h3 className='purchaseCard__title'>{purchase.product.title}</h3>
            <figure className='purchaseCard__img'>
                <img src={purchase.product.images[0].url} alt="product image" />
            </figure>
            <p className='purchaseCard__date'>{purchase.updatedAt?.slice(0, 10)}</p>
            <span className='purchaseCard__quantity'>{purchase.quantity}</span>
            <span className='purchaseCard__price'>Total price: ${purchase.product?.price * purchase.quantity}</span>
        </article>
    )
}

export default PurchaseCard;