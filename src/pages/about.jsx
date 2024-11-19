import "./styles/about.css";
import {useState} from "react";



function About(){

    const [visibleEmail, setVisibleEmail] = useState(false);

    function showEmail(){
        setVisibleEmail(true);
    }

    return(
        <div className="about">
            <h3>About Us</h3>
            <div className="box">
                <h2>Ava Tuttle</h2>
                {visibleEmail ? <h5>Ava.lenore.614@email.com</h5> : <label>Click to ssee my email</label>}
                <br/>
                {
                    !visibleEmail
                        ? <button onClick={showEmail} className="btn btn-outline-primary">Show Email</button>
                        : null
                }            
            </div>
        </div>
    );
}

export default About;