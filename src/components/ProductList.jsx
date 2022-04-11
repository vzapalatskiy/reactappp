import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, removeProduct }) => {
    return (
        <div>
            {products.map(product =>
                <ProductItem product={product} key={product.id} removeProduct={removeProduct} />
            )}

        </div>

    );
};

export default ProductList;