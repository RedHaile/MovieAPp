import React from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";

function Navigation(){
    return(
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to={{
                pathname: "/about",
                state:{
                    fromNavigation: true
                }
            }}>About</Link>
        </div>
    )
}

export default Navigation;