import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth';
import './styles/register.css';

const Register = () => {

    const createUser = useAuth();

    const { handleSubmit, register, reset } = useForm();

    const submit = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users';
        createUser(url, data);
        reset({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phone: ''
        });
    }

    return (
        <div className='register'>
            <form onSubmit={handleSubmit(submit)}>
                <div className='register__item'>
                    <label htmlFor="firstName">First Name</label>
                    <input {...register('firstName')} id='firstName' type="text" />
                </div>
                <div className='register__item'>
                    <label htmlFor="lastName">Last Name</label>
                    <input {...register('lastName')} id='lastName' type="text" />
                </div>
                <div className='register__item'>
                    <label htmlFor="email">Email</label>
                    <input {...register('email')} id='email' type="email" />
                </div>
                <div className='register__item'>
                    <label htmlFor="password">Password</label>
                    <input {...register('password')} id='password' type="password" />
                </div>
                <div className='register__item'>
                    <label htmlFor="phone">Phone</label>
                    <input {...register('phone')} id='phone' type="number" />
                </div>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register;