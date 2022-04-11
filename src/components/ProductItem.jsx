import React from 'react';

const ProductItem = ({ product, removeProduct }) => {
    //console.log(props);
    return (
        <div className="product-item">
            {/* <img src="https://html5book.ru/wp-content/uploads/2015/10/black-dress.jpg"/> */}
            {/* <img src="https://via.placeholder.com/600/1b9d08"/> */}
            <img src="https://media.fortniteapi.io/images/552cd39-3307b68-2aef1e3-414c094/transparent.png" />


            <div className="product-list">
                <h3>{product.title}</h3>
                <span>{product.description}</span>
                <span className="price">{product.price} Р</span>
                <a href="" className="button">Кнопка</a>
                <a style={{ marginLeft: '10px' }} onClick={() => removeProduct(product.id)} className="button">Удалить</a>
            </div>
        </div>
    );
};

export default ProductItem; 