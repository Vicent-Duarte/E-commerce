import React, { useEffect, useRef, useState } from 'react';
import useFetch from '../hooks/useFetch';
import ProductCard from '../components/HomePage/ProdCard';
import "./styles/homePage.css";
import FilterPrice from '../components/HomePage/FilterPrice';
import FilterCategory from '../components/HomePage/FilterCategory';

const HomePage = () => {

    const body = document.querySelector('body');

    const [productsCategory, setProductsCategory] = useState("")
    const [productsPrice, setProductsPrice] = useState({
        from: 0,
        to: Infinity
    })

    const [productName, setProductName] = useState('')

    const [products, getProducts] = useFetch();

    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/products";

    useEffect(() => {
        getProducts(url);
    }, [])

    const textInput = useRef();

    const handleChange = () => {
        setProductName(textInput.current.value.toLowerCase().trim());
    }

    const productsFilters = (product) => {
        const perName = product.title.toLowerCase().includes(productName);
        const perPrice = +product.price <= +productsPrice.to && +product.price >= +productsPrice.from;
        const perCategory = productsCategory ? product.categoryId === +productsCategory : product;
        return perName && perPrice && perCategory;
    }

    const handleDark = () => {
        body.classList.toggle('dark');
    }

    return (
        <div className='homePage'>
            <div className='homePage__filters'>
                <div className='homePage__filterName'>
                    <input ref={textInput} onChange={handleChange} type="text" />
                    <button><ion-icon name="search-outline"></ion-icon></button>
                </div>
                <FilterPrice
                    setProductsPrice={setProductsPrice}
                />
                <FilterCategory
                    setProductsCategory={setProductsCategory}
                />
                <button className='homePage__btn' onClick={handleDark}></button>
            </div>
            <div className='homePage__container'>
                {
                    products?.filter(productsFilters).map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage;