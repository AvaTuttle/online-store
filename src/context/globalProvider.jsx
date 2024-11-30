import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props){
    const[cart, setCart] = useState([]);
    const[user, setUser] = useState({name:"Ava",id:87870614});

    function addToCart(){
        console.log("adding to cart...");
    }
    function removeFromCart(){
        console.log("removing from cart...");
    }
    function clearCart(){
        console.log("cart clear...");
    }




    return(
        <GlobalContext.Provider value={{
            cart: cart,
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            clearCart: clearCart
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;