import React from "react";
import Logo from "../../../assets/logo.svg";
import NavItem from "./NavItem/NavItem";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';
import "./Header.css";

const Header = () => {

    return (
        <div className="Navbar">
            <Link to="/">
                <NavItem>
                    <img src={Logo} className="Logo" />
                </NavItem>
            </Link>
            <NavItem >
                <nav className="NavbarItems">Catagories</nav>
            </NavItem>
            <form className="SearchBar" >
                <button className="SearchButton">search</button>
                <input placeholder="search any thing" className="SearchBarInput" />
            </form>
            <NavItem className="UdemyBussness NavbarItems">udemy Bussness</NavItem>
            <NavItem className="TeachOnUdemy NavbarItems">Teach On udemy</NavItem>
            <NavItem className="Cart NavbarItems">
                <AddShoppingCartIcon />
            </NavItem>
            <Link className="Links" to="/signin" >
                <NavItem className="Login NavbarItems">Login</NavItem>
            </Link>
            <Link className="Links" to="/signup">
                <NavItem className="SignUp NavbarItems">Sign up</NavItem>
            </Link>
            <NavItem className="Language NavbarItems">
                <LanguageIcon />
            </NavItem>
        </div>
    )
}

export default Header;