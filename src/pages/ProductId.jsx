import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './styles/ProdId.css';
import ProdSlider from '../components/ProdID/ProdSlider';
import ProdInfo from '../components/ProdID/ProdInfo';
import ProdSimilar from '../components/ProdID/ProdSimilar';

const ProductId = () => {

    const [product, getProduct] = useFetch();

    const params = useParams();

    useEffect(() => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${params.id}`;
        getProduct(url);
    }, [params.id])


    return (
        <section className='productId'>
            <ProdSlider
                product={product}
            />
            <ProdInfo
                product={product}
            />
            <ProdSimilar
                product={product}
            />
        </section>
    )
}

export default ProductId;