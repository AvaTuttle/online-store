import { Link, Links } from "react-router-dom";
import "./styles/admin.css"; 
import {useEffect, useState} from "react";
import dataService from "../services/dataService";


function Admin(){
    const [allCoupons, setAllCoupons] = useState([]);
    const [coupon, setCoupon] = useState({
        code:"",
        discount:""
    });
    const [allProducts, setAllProducts] = useState([]);
    const [product, setProduct] = useState({
        title: "",
        category: "",
        image: "",
        price: ""
    });

    function handleCouponInputs(e){
        const val =e.target.value;
        const name = e.target.name;
        console.log(name, val);
        
            // rule for state variables (if array or obj -> 3 steps)
            //create a copy
            let copy = {...coupon}
            if(name === "discount"){
                copy.discount = val;                
            }
            //modify the copy
            else{
                copy.code = val;
            }
            //set the copy back
            setCoupon(copy);
    }
    
    function saveCoupon(){
        console.log(coupon);

        dataService.saveCoupon(coupon);


        var copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }


    
    function handleProductInput(e){
        const val =e.target.value;
        const name =e.target.name;
        
        let copy = {...product};
        copy[name] = val;
        setProduct(copy);
    }
    
    async function saveProduct(){
        console.log(product);

        let fixedProd = {...product};
        fixedProd.price = parseFloat(fixedProd.price);
        let x = await dataService.saveProduct(fixedProd);

        var copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

    async function loadProducts(){
        let prods = await dataService.getProducts();
        setAllProducts(prods);
    }

    async function loadCoupons() {
        let cps = await dataService.getCoupons();
        setAllCoupons(cps);
    
    useEffect(() => {
        loadProducts();
        loadCoupons();
    })
    }

    return (
        <div className="admin page">
            <h1>Store Administration</h1>
            <div className="parent">
                <div className="products form">
                    <h3>create products</h3> 
                    <div>
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" onBlur={handleProductInput} name="title" />
                    </div>                   
                    <div>
                        <label className="form-label">Category</label>
                        <input type="text" className="form-control" onBlur={handleProductInput} name="category" />
                    </div>                   
                    <div>
                        <label className="form-label">Image</label>
                        <input type="text" className="form-control" onBlur={handleProductInput} name="image" />
                    </div>                   
                    <div>
                        <label className="form-label">Price</label>
                        <input type="number" className="form-control" onBlur={handleProductInput} name="price" />
                    </div>
                    <div className="mb-5 btn-container">
                        <button className="button btn-outline-dark" onClick={saveProduct}>Save</button>
                    </div> 
                    <ul className="product-list">
                        {allProducts.map(prod =>
                            <li className="product-item">
                                {prod.title} - <img className="img" src={prod.image} alt="" /> - ${parseFloat(prod.price).toFixed(2)}
                            </li>)}
                    </ul>                
                </div>

                <div className="coupons form">
                    <h3>create coupons</h3>
                    <div>
                        <label className="form-label">Code:</label>
                        <input type="text" className="form-control" onBlur={handleCouponInputs} name="code"/>
                    </div>
                    <div>
                        <label className="form-label">Discount</label>
                        <input type="number" className="form-control" onBlur={handleCouponInputs} name="discount"/>
                    </div>
                    <div className="mb-5 btn-container">
                        <button className="button btn-outline-dark" onClick={saveCoupon}>Save Coupon</button>
                    </div>
                    <ul className="coupon-list">
                        {allCoupons.map(cp => <li className="coupon-item">{cp.code} - {cp.discount}%</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Admin;


