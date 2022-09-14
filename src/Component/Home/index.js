import Carousel from "../Carousel"
import Products from "../Products"


const Home = () =>{
    return(
        <div>
        <Carousel/>
        <div className="container">
        <Products/>
        </div>
        </div>
    )
}

export default Home;