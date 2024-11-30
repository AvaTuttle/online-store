import "./styles/admin.css"; 
import {useState} from "react";

function Admin(){

    const [coupon, setCoupon] = useState({
        code:"",
        discount:""
    });
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
    }

    
    function handleProductInput(e){
        const val =e.target.value;
        const name =e.target.name;
        
        let copy = {...product};
        copy[name] = val;
        setProduct(copy);
    }
    
    function saveProduct(){
        console.log(product);
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
                        <label className="form-label">Catergory</label>
                        <input type="text" className="form-control" onBlur={handleProductInput} name="catergory" />
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
                </div>
            </div>
        </div>
    );
}

export default Admin;


