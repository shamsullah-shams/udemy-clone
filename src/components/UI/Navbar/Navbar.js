import React from "react";
import NavItem from "../Header/NavItem/NavItem";
import "./Navbar.css";

const Navbar = props => {
    return (
        <div className="NewNavbar">
            <NavItem className="NewNavbarItem">python</NavItem>
            <NavItem className="NewNavbarItem">excel</NavItem>
            <NavItem className="NewNavbarItem">web development</NavItem>
            <NavItem className="NewNavbarItem">javascript</NavItem>
            <NavItem className="NewNavbarItem">Data Science</NavItem>
            <NavItem className="NewNavbarItem">AWS Certification</NavItem>
            <NavItem className="NewNavbarItem">Drawing</NavItem>
        </div>
    );
};



export default Navbar;