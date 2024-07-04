import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchasesThunk } from '../store/slices/purchase.slice';
import PurchaseCard from '../components/Purchases/PurchaseCard';
import './styles/Purchases.css'

const Purchase = () => {

    const purchases = useSelector(store => store.purchases);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPurchasesThunk());
    }, [])

    console.log(purchases);

    return (
        <div className='purchase'>
            {
                purchases.map(purchase => (<PurchaseCard
                    key={purchase.id}
                    purchase={purchase}
                />))
            }
        </div>
    )
}

export default Purchase;