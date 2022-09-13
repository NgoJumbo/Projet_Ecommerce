import './App.css';
import Navbar from './Component/Navbar';
import Imagebar from './Component/Imagebar';
import Carousel from './Component/Carousel';
import Footer from './Component/Footer';
import ProductsContextProvider from './Component/ProductsContext';
import Products from './Component/Products';


function App() {
  return (
    <>
      <ProductsContextProvider>
        <Navbar /><Imagebar /><Carousel />
       <div className="container">
        <Products />
        </div>
        <Footer />
      </ProductsContextProvider>
    </>
  );
}

export default App;
