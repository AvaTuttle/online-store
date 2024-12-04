import { useContext } from "react";
import "./styles/navbar.css";
import { Link } from "react-router-dom";
import GlobalContext from "../context/globalContext";

function Navbar(){
    const user = useContext(GlobalContext).user;
    const cart = useContext(GlobalContext).cart;

    function getProdCount(){
        let total =0;

        for (let index = 0; index < cart.length; index++) {
            let prod = cart[index];
            total += prod.quantity;
        }

        return total;
    }
    
    return (
        <div>
            <nav>
                <div className="navbar-menu">
                    <h1>The Store</h1>
                    <Link to="/home">Home</Link>
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/admin">Admin</Link>
                    <Link to="/shoppingList">List</Link>
                    <Link to="/about">About</Link>
                    <Link to="/cart">
                    <span className="badge text-bg-primary me-1">{getProdCount()}</span> 
                    Cart
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;