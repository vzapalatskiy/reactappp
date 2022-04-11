import React, { useEffect, useMemo, useRef, useState } from 'react';

const ProductCreate = ({ createProduct, products }) => {
    const [product, setProduct] = useState({ title: '', description: '', price: '' });

    //создаем товар
    function createNewProduct(e) {
        console.log(products.length);
        e.preventDefault();
        const newProduct = { ...product, id: products.length + 1 };
        createProduct(newProduct);
        setProduct({ title: '', description: '', price: '' })
    }
    return (
        <form>
            {/* название товара */}
            <input
                className='myInput'
                value={product.title}
                onChange={e => setProduct({ ...product, title: e.target.value })}
                type='text'
                placeholder='товар'
            />

            {/* описание товара */}
            <input
                className='myInput'
                value={product.description}
                onChange={e => setProduct({ ...product, description: e.target.value })}
                type='text'
                placeholder='описание'
            />

            {/* цена товара */}
            <input
                className='myInput'
                value={product.price}
                onChange={e => setProduct({ ...product, price: e.target.value })}
                type='text'
                placeholder='цена'
            />
            <button onClick={createNewProduct} className='button'>добавить товар</button>
        </form>
    );
};

export default ProductCreate;