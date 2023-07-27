import logo from './logo.svg';
import './App.css';
import ProductsList from './Components/ProductsList/ProductsList';
import CreateProduct from './Components/CreateProduct/CreateProduct';
import React, { useState } from 'react';
import FilterProduct from './Components/FilterProduct/FilterProduct';

let products = [
  {
      pID: 1, 
      pName: 'Fresh Milk', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: 'images/fresh-milk.png',
      price: 12,
      maxStoke : 15
  },
  {
      pID: 2, 
      pName: 'Cottage Cheese', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: false,
      image: "images/cottage-cheese.png",
      price: 10,
      maxStoke : 10
  },
  {
      pID: 3, 
      pName: 'Brocoli', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: "images/brocoli.png",
      price: 15,
      maxStoke : 5
  },
  {
      pID: 4, 
      pName: 'oranges', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: true,
      image: "images/oranges.png",
      price: 20,
      maxStoke : 2
  },
  {
      pID: 5, 
      pName: 'Olive oil', 
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      isAvailable: false,
      image: "images/olive-oil.png",
      price: 14,
      maxStoke : 20
  }
];
function App() {
  let msg = "ReactJS Products";
  let [newProductList, updateProduct] = useState(products);
  let [filterValueTxt, filterValTxtFun] = useState('all');

  let filterProductList = newProductList.filter((filProduct)=>{
     if(filterValueTxt === 'available'){
       return filProduct.isAvailable === true;
     }else if(filterValueTxt === 'unavailable'){
      return filProduct.isAvailable === false;
     }else{
      return filProduct;
     }
  })

  function CreateProductApp(product){
    product.pID = products.length + 1;
    updateProduct([product, ...newProductList]);
  }

  function filrerValueSelected(selectedValue){
    filterValTxtFun(selectedValue);
  }

  return (<div>
    <h2 className='hh'>{msg}</h2>
    <hr></hr>
    <CreateProduct createP={CreateProductApp}></CreateProduct>
    <FilterProduct filterSelected = {filrerValueSelected}></FilterProduct>
    <ProductsList productList={filterProductList}></ProductsList>
  </div>

  );
}

export default App;
