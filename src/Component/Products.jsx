import React, {useContext} from 'react';
import {ProductsContext} from './ProductsContext';
import '../Styles/contenu.css';

const Products = () => {
    const {products} = useContext(ProductsContext);
    return(
        <div className="products">
            <div className="container my-2 py-2">
            <div className="row">
              <div className="col-12 mb-5">
                <h1 className="display-6 fw-bolder text-center">Produits disponible</h1>
                <hr />
              </div>
            </div>
          </div>
          {products.map((product) =>(
            <div className="product" key={product.id}>
            <div className="product-image">
            <img src={product.image} alt="not found"/>
            </div>
            <div className="product-details">
            <div className="product-name">
                {product.name}
            </div> 
             <div className="product-price">
                {product.price}fcfa
            </div>   
            </div>
            <div className="ajout-panier"> Ajouter au panier</div>
            </div>
          ))}
        </div>
    );
}
export default Products;