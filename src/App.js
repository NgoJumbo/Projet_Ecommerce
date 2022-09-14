import './App.css';
import React from 'react';
import Navbar from './Component/Navbar';
import Imagebar from './Component/Imagebar';
import Carousel from './Component/Carousel';
import Footer from './Component/Footer';
import ProductsContextProvider from './Component/ProductsContext';
import Products from './Component/Products';
import Router from './Router';
import { useSelector } from 'react-redux';
import Login from './Component/Login';




function App() {
  const islogin = useSelector((state) => state.login.logged )
  return (
    <>
      {islogin ?
        <ProductsContextProvider>
          <Navbar />
          <Imagebar />
          <Router />
          <Footer />
        </ProductsContextProvider>
        :
        <Login />
      }
    </>
  )
} 



export default App;
