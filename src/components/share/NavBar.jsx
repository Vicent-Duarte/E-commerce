import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navBar.css';

const NavBar = () => {
    return (
        <header className='navBar'>
            <div className='navBar__container'>
                <h1 className='navBar__title'><Link to='/'>  <span className='navBar__title-deco'>Duarte</span><span>Express</span></Link></h1>
                <ul className='navBar__list'>
                    <li className='navBar__item'>
                        <Link to='/login'><ion-icon name="person-outline"></ion-icon></Link>
                    </li>
                    <li className='navBar__item'>
                        <Link to='/purchases'><ion-icon name="download-outline"></ion-icon></Link>
                    </li>
                    <li className='navBar__item'>
                        <Link to='/cart'><ion-icon name="cart-outline"></ion-icon></Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default NavBar;