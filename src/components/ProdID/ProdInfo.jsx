import React, { useState } from 'react'
import './styles/prodInfo.css'
import { postCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProdInfo = ({ product }) => {

    const [counter, setCounter] = useState(1)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLess = e => {
        e.preventDefault();
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const handlePlus = e => {
        e.preventDefault();
        setCounter(counter + 1);
    }

    const handleBuy = () => {
        dispatch(postCartThunk('/cart', {
            quantity: counter,
            productId: product?.id,
        }));
        navigate('/cart');
    };

    return (
        <article className='productInfo'>
            <h3 className='productInfo__brand'>{product?.brand}</h3>
            <h2 className='productInfo__title'>{product?.title}</h2>
            <p className='productInfo__description'>{product?.description}</p>
            <div className='productInfo__container'>
                <p className='productInfo__price'><span>Price</span><span>$ {product?.price}</span></p>
                <div className='productInfo__counter'>
                    <p>quantity</p>
                    <button onClick={handleLess} className='productInfo__btnLess'>-1</button>
                    <span>{counter}</span>
                    <button onClick={handlePlus} className='productInfo__btnPlus'>+1</button>
                </div>
            </div>
            <button onClick={handleBuy} className='productInfo__btnBuy'>Add to cart</button>
        </article>
    )
}

export default ProdInfo;