import "./styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div>
            <nav>
                <div className="navbar-menu">
                    <h1>The Store</h1>
                    <Link to="/home">Home</Link>
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/about">About</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/admin">Administarion</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;