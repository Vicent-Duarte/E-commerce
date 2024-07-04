import React, { useState } from 'react'
import "./styles/CartProd.css"
import { deleteCartThunk, putCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'

const CartProd = ({ product }) => {

    // const [counter, setCounter] = useState(product.quantity)

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteCartThunk('/cart', product.id));
    }

    const handleLess = () => {
        if (product.quantity > 1) {
            dispatch(putCartThunk(
                '/cart',
                { quantity: product.quantity - 1 },
                product.id
            ))
        }
    };

    const handlePlus = () => {
        dispatch(putCartThunk(
            '/cart',
            { quantity: product.quantity + 1 },
            product.id
        ))
    };

    return (
        <article className='cartProduct'>
            <h3 className='cartProduct__title'>{product.product?.title}</h3>
            <figure className='cartPorduct__img'>
                <img src={product.product?.images[0].url} alt="product img" />
            </figure>
            <div className='cartProduct__container'>
                <button onClick={handleLess}>-1</button>
                <span>{product.quantity}</span>
                <button onClick={handlePlus}>+1</button>
            </div>
            <button onClick={handleDelete}>Delete</button>
            <span className='cartProduct__price'>Total: $ {product.product?.price}</span>
        </article>
    )
}

export default CartProd;