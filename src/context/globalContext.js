import { createContext } from "react";

//its an interface
//a description of the data structure that we want to share
//there is no implimentation here

const GlobalContext = createContext({
    cart: [],
    user: {},

    addToCart:() => {},
    removeFromCart: () => {},
    clearCart: () => {},

});

export default GlobalContext;