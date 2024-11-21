import "./styles/navbar.css";

function Navbar(){
    return (
        <div>
            <nav>
                <div className="navbar-menu">
                    <h1>The Store</h1>
                    <a href="">Log In</a>
                    <a href="">Search</a>
                    <a href="">Subscribe</a>
                    <a href="">Menu</a>
                    <a href="">About</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;