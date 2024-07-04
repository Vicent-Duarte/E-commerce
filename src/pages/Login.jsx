import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {

    const [hasToken, setHasToken] = useState();
    const navigate = useNavigate();
    const loginUser = useAuth();

    useEffect(() => {
        setHasToken(localStorage.getItem('token'));
    }, [])

    const { handleSubmit, register, reset } = useForm();

    const submit = async data => {

        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login';
        try {
            await loginUser(url, data);
            reset({
                email: '',
                password: '',
            });

            const token = localStorage.getItem('token');
            if (token) {
                setHasToken(token);
                navigate('/cart');
            } else {
                console.log('existe un error');
            }
        } catch (error) {
            console.error('algun error ocurrio', error);
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        setHasToken();
    }

    return (
        <>
            {
                hasToken ?
                    <button onClick={handleLogout}>Logout</button>
                    :
                    <div>
                        <form onSubmit={handleSubmit(submit)}>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input {...register('email')} id='email' type="email" />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input {...register('password')} id='password' type="password" />
                            </div>
                            <button>Login</button>
                        </form>
                        <p>if you're not registered yet <Link to={'/register'}>Register</Link> </p>
                    </div>
            }
        </>
    )
}

export default Login;