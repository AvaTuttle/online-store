import "./styles/admin.css"; 

function Admin(){
    return (
        <div className="admin page">
            <h1>Store Administration</h1>
            <div className="parent">
                <div className="products form">
                    <h3>create products</h3> 
                    <div>
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" />
                    </div>                   
                    <div>
                        <label className="form-label">Catergory</label>
                        <input type="text" className="form-control" />
                    </div>                   
                    <div>
                        <label className="form-label">Image</label>
                        <input type="text" className="form-control" />
                    </div>                   
                    <div>
                        <label className="form-label">Price</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="mb-5 btn-container">
                        <button className="button btn-outline-dark">Save</button>
                    </div>                 
                </div>

                <div className="coupons form">
                    <h3>create coupons</h3>
                    <div>
                        <label className="form-label">Code:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Discount</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-5 btn-container">
                        <button className="button btn-outline-dark">Save Coupon</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;


