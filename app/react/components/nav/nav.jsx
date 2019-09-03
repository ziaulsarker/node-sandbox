
import React from "react";
import "./nav.scss";

const li = (i,e) => {
    return <li key={ i }> { e } </li>
}

function navItems(items = []){
    return items.map(li);
}

export const Nav = props => (
    <nav>
        <ul>
           { navItems(props.items) }
        </ul>
    </nav>
) 




