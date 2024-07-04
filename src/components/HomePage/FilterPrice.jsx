import React from 'react';
import { useForm } from 'react-hook-form';
import './styles/FilterPrice.css';

const FilterPrice = ({ setProductsPrice }) => {

    const { handleSubmit, register, reset } = useForm();

    const submit = data => {
        setProductsPrice({
            from: data.from || 0,
            to: data.to || Infinity
        })
        reset({
            from: '',
            to: '',
        });
    }

    return (
        <form onSubmit={handleSubmit(submit)} className='filterPrice'>
            <div className='filterPrice__item'>
                <label htmlFor="from">From</label>
                <input {...register('from')} id='from' type="text" />
            </div>
            <div className='filterPrice__item'>
                <label htmlFor="to">To</label>
                <input {...register('to')} id='to' type="text" />
            </div>
            <div className='filterPrice__containerBtn'>
                <button className='filterPrice__btn'>Filter Price</button>
            </div>
        </form>

    )
}

export default FilterPrice;