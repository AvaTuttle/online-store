import { Link } from "react-router-dom";
import "./styles/cart.css";
import GlobalContext from "../context/globalContext";
import { useContext } from "react";

function Cart(){

    const cart = useContext(GlobalContext).cart;

    function getProdCount(){
        let total =0;

        for (let index = 0; index < cart.length; index++) {
            let prod = cart[index];
            total += prod.quantity;
        }
        return total;
    }

    function getProdTotal(prod){
       const total = prod.price * prod.quantity;
        return total.toFixed(2);
    }

    function getOrderTotal(prod){
        let total = 0;
        for (let index = 0; index < cart.length; index++) {
            let prod = cart[index];
            total += prod.quantity * prod.price;
        }
        return total.toFixed(2);
    }

    return(
        <div className="cart page">
            <h1>Ready to finalize your order?</h1>
            <h3>You are one step away from your {getProdCount()} products!!</h3>  
            <div className="parent">
                <div className="list">
                    {cart.map(prod => 
                    <div className="prod-cart">                   
                            <div className="prod-container">
                                <img src={prod.image} alt="" />                           
                                    <h5>{prod.title}</h5>
                                    <label>Price: ${prod.price.toFixed(2)}</label>
                                    <h5>Quantity: {prod.quantity}</h5>
                                    <label>Total: ${getProdTotal(prod)}</label>
                                    <button className="btn">Remove</button>
                            </div>
                    </div>
                        
                    )}
                </div>

                <div className="side">
                    <h6>Total:</h6>
                    <h5>${getOrderTotal()}</h5>
                    <hr />
                    <button className="btn">Pay Now</button>
                </div>
            </div>
        </div>

    );
}

export default Cart;