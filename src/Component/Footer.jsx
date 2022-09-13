import React from 'react';
import '../Styles/Footer.css';
import {FaFacebook, FaWhatsapp, FaTwitter, FaSnapchat, } from 'react-icons/fa';

const Footer = () => {
    return (
       <div>
       <footer id="footerbg" className="p-4"> 
          
           <div className="container P-4">
           <div className="row">
           <div className="col-sm-4">
           <h4>A propos de nous</h4> 
           <img src="/assets/lbm.jpg" alt="Logo" width="80" height="40"/>   
               <p>La boutique des maillots est un site e-commerce, qui offre la possibilité aux amoureux
                de football de pouvoir se procuré des maillots de leurs club préféres en version fan et version players.
               </p>
            </div> 

           <div className="col-sm-2">
            <h4>Navigation</h4>
            <p><a href="#">Aide</a></p>
            <p><a href="#">Accueil</a></p>
            <p><a href="#">lol</a></p>
            </div>  

            <div className="col-sm-2">
            <h4>Ouverture</h4>
            <p>Ouvert à: 08h30</p>
            <p>Ferme à: 21h30</p>
            </div>  

            <div className="col-sm-2">
            <h4>Adresse</h4>
            <p>Cameroun-Yaoundé</p>
            <p>Poste centrale</p>
            </div>

             <div className="col-sm-2">
            <h4>Contact</h4>
            <p>Orange: +237 694575149</p>
            <p>MTN: +237 675208667</p>
            <p>Email: lbm@gmail.com</p>
            </div>  

             <section className="d-flex justify-content-center">
            <div className="me-5 d-none d-lg-block">
                <span>Rejoignez nous sur nos réseaux sociaux:</span>
            </div>
            <div>
                <a href=""><FaFacebook/></a>
                <a href=""><FaWhatsapp/></a>
                <a href=""><FaTwitter/></a>
                <a href=""><FaSnapchat/></a>
            </div>

           </section>  
       </div>
       </div>      
       </footer>  
       </div>
    );
}

export default Footer; 