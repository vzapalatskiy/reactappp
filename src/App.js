import React, { useEffect, useMemo, useState } from 'react';
import ProductCreate from './components/ProductCreate';
import ProductList from "./components/ProductList";
import ProductSelect from './components/ProductSelect';
import './styles/App.css'
//import uuid from 'uuidv4';
//const { uuid } = require('uuidv4');

function App() {
  const [products, setProducts] = useState([
    { id: 1, title: 'Товар', description: 'Описание для товара1', price: '1000' },
    { id: 2, title: 'Товар2', description: 'Описание для товара1', price: '2000' },
    { id: 3, title: 'Товар3', description: 'Описание для товара1', price: '3000' }

  ]);

  const [sortValue, setSortValue] = useState('');
  const [search, setSearch] = useState('');

  console.log(search);
  //поиск
  const searchProduct = useMemo(() => {
    return products.filter(products => products.title.toLowerCase().includes(search.toLowerCase()))
  }, [search, products])

  const sortProducts = (sortValue) => {
    //console.log(e);
    console.log(sortValue);
    setSortValue(sortValue);
    setProducts([...products].sort((a, b) => a[sortValue].localeCompare(b[sortValue])));// .localeCompare(b[sortValue])));



  }
  //создаем товар
  const createProduct = (newProduct) => {
    console.log(newProduct)
    setProducts([...products, newProduct]);

  }

  //удаляем товар
  const removeProduct = (id) => {
    setProducts(products.filter(p => p.id !== id))

  }

  //const [title, setTitle] = useState('');
  //const [price, setPrice] = useState('');
  //const { uuid } = require('uuidv4');


  return (
    <div className="App">

      <ProductCreate createProduct={createProduct} products={products} />
      <input
        className='myInput'
        value={search}
        onChange={e => setSearch(e.target.value)}
        type='text'
        placeholder='Введите поиск.....'
      />

      <ProductSelect
        value={sortValue}
        onChange={sortProducts} />
      <ProductList removeProduct={removeProduct} products={searchProduct} />




    </div>
  );
}

export default App;
