import Home from "../Component/Home";
import Login from "../Component/Login";
import Notif from "../Component/Notif";
import Pannier from "../Component/Pannier";

const { BrowserRouter, Routes, Route } = require("react-router-dom")

const Router  = () =>{
    return (
       
            <Routes>
                <Route path = "/" element= {<Home/>}/>
                <Route path = "/pannier" element={<Pannier/>}/>
                <Route path = "/notif" element={<Notif/>}/>
            </Routes>
       
    )
}



export default Router;