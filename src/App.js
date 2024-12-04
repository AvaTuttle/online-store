import "./App.css";
import Footer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";
import About from "./pages/about.jsx";
import Catalog from "./pages/catalog.jsx";
import Admin from "./pages/admin.jsx";
import Home from "./pages/home.jsx";
import Cart from "./pages/cart.jsx";
import ShoppingList from "./pages/shoppingList.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalProvider from "./context/globalProvider.jsx";

function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
      <div className="App page">
        <Navbar />

        <Routes>
          <Route path="/" element={ <Home />}></Route>
          <Route path="/home" element={ <Home />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/admin" element={ <Admin />}></Route>
          <Route path="/about" element={ <About />}></Route>
          <Route path="/shoppingList" element={ <ShoppingList />}></Route>
          <Route path="/cart" element={ <Cart />}></Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
