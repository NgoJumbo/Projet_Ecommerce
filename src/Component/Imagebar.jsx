import React from "react";
import { Link } from "react-router-dom";
import { isLogged } from "../redux/Login/LoginAction";
import { useSelector, useDispatch } from "react-redux";


const Imagebar = () => {

  const dispatch = useDispatch();
  const isLogin = useSelector((state)=> state.login.logged)
  console.log(isLogin)
  return (
    <div>
      <nav className="navbar navbar-light bg-light shadow p-1 mb-2 bg-white rounded">
        <div className="container">
          <Link to="/">
            <a className="navbar-brand" href="#">
              <img src="/assets/lbm.jpg" alt="Logo" width="80" height="40" />
            </a>
          </Link>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link active" aria-current="page" href="#">
                  Accueil
                </a>
              </Link>
            </li>
            {isLogin == false ?
            <li className="nav-item">
              <Link to="/login">
                <a className="nav-link" onClick={()=>dispatch(isLogged())}>
                  Se connecter
                </a>
              </Link>
            </li>
            :null
            }
            <li className="nav-item">
              <Link to="/panier">
                <a className="nav-link" href="#">
                  Pannier
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Notif">
                <a className="nav-link disabled">Notification</a>
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Chercher votre produir"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Lancer
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Imagebar;
