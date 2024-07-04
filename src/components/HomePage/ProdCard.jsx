import React from 'react'
import "./styles/prodCard.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postCartThunk } from '../../store/slices/cart.slice'

const ProductCard = ({ product }) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleView = e => {
        e.preventDefault();
        navigate(`/product/${product.id}`)
    };

    const handleBuy = e => {
        e.preventDefault();
        dispatch(postCartThunk('/cart', {
            quantity: 1,
            productId: product.id,
        }));
    };

    return (
        <article className='productCard'>
            <figure className='productCard__img'>
                <img className='productCard__img-1' src={product?.images[0].url} alt="product img" />
                <img className='productCard__img-2' src={product?.images[1].url} alt="product img" />
            </figure>
            <hr />
            <ul className='productCard__list'>
                <li className='productCard__item'><span>{product?.brand}</span><span>{product?.title}</span></li>
                <li className='productCard__item'><span>Price: </span><span>$ {product?.price}</span></li>
            </ul>
            <div className='productCard__btn'>
                <button onClick={handleView}>View details</button>
                <button onClick={handleBuy}>Add to cart</button>
            </div>

        </article>
    )
}

export default ProductCard;