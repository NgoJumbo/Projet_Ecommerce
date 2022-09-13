import React, {createContext, useState} from 'react';

import acm from "../asset/acm.jpg";
import fcb from "../asset/fcb.jpg";
import juv from "../asset/juv.jpg";
import liv from "../asset/liv.jpg";
import marseille from "../asset/marseille.jpg";
import mct from "../asset/mct.jpg";
import psg from "../asset/psg.jpg";
import rbl from "../asset/rbl.jpg";
import rmd from "../asset/rmd.jpg";
import tot from "../asset/tot.jpg";

export const ProductsContext = createContext();

 const ProductsContextProvider = (props) => {
     const [products] = useState([
        {id: 1, name: "AC Milan", price:15000, image:acm, status:"new"},
        {id: 2, name: "FC Barcelona", price:25000, image:fcb, status:"new"},
        {id: 3, name: "Juventus", price:15000, image:juv, status:"new"},
        {id: 4, name: "Liverpool", price:20000, image:liv, status:"new"},
        {id: 5, name: "Marseille", price:18000, image:marseille, status:"new"},
        {id: 6, name: "City", price:20000, image:mct, status:"new"},
        {id: 7, name: "Paris", price:22000, image:psg, status:"new"},
        {id: 8, name: "Leipzig", price:2000, image:rbl, status:"new"},
        {id: 9, name: "Real de Madrid", price:10000, image:rmd, status:"new"},
        {id: 10, name: "Tothenan", price:11000, image:tot, status:"new"},
        
     ]);

     return(
        <ProductsContext.Provider value={{products: [...products]}}>
           {props.children}
        </ProductsContext.Provider>
     );
 }

 export default ProductsContextProvider;