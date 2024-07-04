import React, { useEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch';

const FilterCategory = ({ setProductsCategory }) => {

    const [categories, getCatergories] = useFetch();

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
        getCatergories(url);
    }, []);

    const selectOption = useRef();

    const handleChange = () => {
        setProductsCategory(selectOption.current.value);
    }

    return (
        <select ref={selectOption} onChange={handleChange}>
            <option value=""> All products</option>
            {
                categories?.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))
            }
        </select>
    )
}

export default FilterCategory;