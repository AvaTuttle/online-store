import "./styles/catalog.css"
import Product from "../components/product.jsx";
import { useEffect, useState } from "react";
import dataService from "../services/dataService.js";


function Catalog(){

    const [catalog, setCatalog] = useState([]);

    function loadData() {
        let productList = dataService.getProducts();
        setCatalog(productList);
    }

    useEffect(function() {
        loadData();    
    }, []);

    return(
        <div className="content">
            <div>
            <h1>this is the catalog</h1>
            </div>
            <div>
                <Product data={catalog[0]}></Product>
                <Product data={catalog[1]}></Product>
                <Product data={catalog[2]}></Product>
                <Product data={catalog[3]}></Product>
                <Product data={catalog[4]}></Product>
                <Product data={catalog[5]}></Product>
                <Product data={catalog[6]}></Product>
                <Product data={catalog[7]}></Product>
                <Product data={catalog[8]}></Product>
                <Product data={catalog[9]}></Product>
                <Product data={catalog[10]}></Product>
                <Product data={catalog[11]}></Product>

            </div>
        </div>
    );
}

export default Catalog;