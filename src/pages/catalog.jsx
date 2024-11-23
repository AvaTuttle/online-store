import "./styles/catalog.css"
import Product from "../components/product.jsx";
import { useEffect, useState } from "react";
import dataService from "../services/dataService.js";
import { Button } from "bootstrap";


function Catalog(){

    const [catalog, setCatalog] = useState([]);
    const [categories, setCategories] = useState([]);

    function loadData() {
        let productList = dataService.getProducts();
        setCatalog(productList);

        let categoriesList = dataService.getCategories();
        setCategories(categoriesList);
    }

    useEffect(function() {
        loadData();    
    }, []);

    return(
        <div className="content">
            <div>
            <h1>this is the catalog</h1>
            </div>
            <div className="filters">
                {categories.map(cat => <button className="btn btn-small btn-outline-success">{cat}</button>)}
            </div>
            <div>
                {catalog.map(prod => <Product data={prod}></Product>)}
            </div>
        </div>
    );
}

export default Catalog;