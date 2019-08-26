import React, { Component } from "react";

function navItems(items = []){
    return items.map( (e,i) => ( <li key={ i }> { e } </li> ) );
}

export const Nav = props => (
    <nav>
        <ul>
           { navItems(props.items) }
        </ul>
    </nav>
) 




