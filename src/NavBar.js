import React from "react";
import {Link} from "react-router-dom";

function NavBar({dogs}) {
    return (
        <ul>
            <li><Link to="/dogs">Home</Link></li>
            {dogs.map(d => {
                return (<li><Link to={`/dogs/${d.name}`}>{d.name}</Link></li>)
            })}
        </ul>
    )
}

export default NavBar;