import React from 'react';


const Imagebar = () => {
    return(
        <div>
            <nav className="navbar navbar-light bg-light shadow p-1 mb-2 bg-white rounded">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src="/assets/lbm.jpg" alt="Logo" width="80" height="40"/>
    </a>
    <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Accueil</a>
  </li>
  <li className="nav-item"> 
    <a className="nav-link" href="#">Se connecter</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Pannier</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled">Notification</a>
  </li>
</ul>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Chercher votre produir" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Lancer</button>
    </form>
  </div>
</nav>
  
  </div>
    );
}

export default Imagebar;