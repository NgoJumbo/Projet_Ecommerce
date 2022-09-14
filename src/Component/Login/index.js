import  './style.css';

import { useSelector, useDispatch } from "react-redux/es/exports";
import { isLogged } from '../../redux';
import {logged} from '../../redux';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Login = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <div class="containers">
                <div class="screen">
                    <div class="screen__content">
                        <form class="login">
                            <div class="login__field">
                                <i><FaUser/></i>
                                <input type="text" class="login__input" placeholder="User name / Email"></input>
                            </div>
                            <div class="login__field">
                                <i></i>
                                <input type="password" class="login__input" placeholder="Password"></input>
                            </div>
                            <Link to='/'>
                            <button class="button login__submit" onClick={()=>dispatch(isLogged())}>
                                
                                <span class="button__text" >Log In Now</span>
                                
                                <i></i>
                            </button>
                            </Link>
                        </form>
                        <div class="social-login">
                            <h3>log in via</h3>
                            <div class="social-icons">
                                <a href="#" class="social-login__icon fab fa-instagram"></a>
                                <a href="#" class="social-login__icon fab fa-facebook"></a>
                                <a href="#" class="social-login__icon fab fa-twitter"></a>
                            </div>
                        </div>
                    </div>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;