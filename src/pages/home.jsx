import { Link } from "react-router-dom";
import "./styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Home(){
    return(
        <div className="home page">
            <div>
                <header>
                <h1>Welcome to The Store!!!</h1>
                <p>we stock only the freshest local produce</p>
                </header>
            </div>
            <div className="card-container">
                <section>
                    <h2>From Farm</h2>
                    <div className="card-container">
                        <div className="card-block">
                            <div className="card-item">
                                <img src="/img/home1.jpg" alt="" />
                                <div className="card-item-text">
                                    <h3>a handful of placeholder text just for you</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h2> to Table</h2>
                    <div className="card-container">
                        <div className="card-block">
                            <div className="card-item">
                                <img src="/img/home2.jpeg" alt="" />
                                <div className="card-item-text">
                                    <h3>a handful of placeholder text just for you</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                <Link to="/catalog" className="btn">Check Out Our Products Here!</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;