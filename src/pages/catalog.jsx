import "./styles/catalog.css"
import Product from "../components/product.jsx";

function Catalog(){
    return(
        <div className="content">
            <div>
            <h1>this is the catalog</h1>
            </div>
            <div>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        </div>
    );
}

export default Catalog;