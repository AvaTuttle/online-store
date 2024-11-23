import "./App.css";
import Footer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";
import About from "./pages/about.jsx";
import Catalog from "./pages/catalog.jsx";
import Admin from "./pages/admin.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Catalog></Catalog>
      <Admin></Admin>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
