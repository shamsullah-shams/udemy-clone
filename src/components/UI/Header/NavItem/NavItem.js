import React from "react";
import "./NavItem.css";


const NavItem = props => {
    return (
        <div {...props}>
            {props.children}
        </div>
    );
};


export default NavItem;


