import "./styles/catalog.css"
import Product from "../components/product.jsx";
import { useEffect, useState } from "react";
import dataService from "../services/dataService.js";



function Catalog(){

    const [catalog, setCatalog] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    function loadData() {
        let productList = dataService.getProducts();
        setCatalog(productList);

        let categoriesList = dataService.getCategories();
        setCategories(categoriesList);
    }

    useEffect(function() {
        loadData();    
    }, []);

    function onCategorySelected(category){
        setSelectedCategory(category);
    }

    function clearFilter(){
        onCategorySelected(null);
    }

    return(
        <div className="content page">
            <div>
            <h1>this is the catalog</h1>
            </div>
            <div className="filters">
                <button className="btn btn-small btn-outline-success" onClick={clearFilter}>All</button>
                {categories.map(cat => <button onClick={()  => onCategorySelected(cat)} key={cat} className="btn btn-small btn-outline-success">{cat}</button>)}
            </div>
            <div>
                {catalog
                .filter(prod => !selectedCategory || prod.category === selectedCategory)
                .map(prod => <Product data={prod} key={prod._id}></Product>)
                }
            </div>
        </div>
    );
}

export default Catalog;