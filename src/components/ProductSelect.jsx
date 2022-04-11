import React from 'react';

const ProductSelect = ({ value, onChange }) => {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}>
            <option disabled value=''>Сортировка</option>
            <option value="title">По названию</option>
            <option value="description">По описанию</option>
            <option value="price">По цене</option>
        </select>
    );
};

export default ProductSelect;