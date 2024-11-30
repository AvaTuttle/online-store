import { useContext } from "react";
import "./styles/navbar.css";
import { Link } from "react-router-dom";
import GlobalContext from "../context/globalContext";

function Navbar(){
    const user = useContext(GlobalContext).user;
    return (
        <div>
            <nav>
                <div className="navbar-menu">
                    <h1>The Store</h1>
                    <Link to="/home">Home</Link>
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/about">About</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/admin">Admin</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;