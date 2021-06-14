import React from 'react';
import s from "./Navbar.module.css"
import headerLogo from "../../../assets/header_logo.png"

import Link from "../../Reusable/Link" 
import Button from "../../Reusable/Button"

const Navbar: React.FC = () => {
    return (
        <div className={s.navbar}>
            <img src={headerLogo} alt="DigitalOcean logo" />
            <Link to="#Products">Products</Link>
            <Link to="#Solutions">Solutions</Link>
            <Link to="#Marketplace">Marketplace</Link>
            <Link to="#Community">Community</Link>
            <Link to="#Pricing">Pricing</Link>
            <Button color="#0069ff" bg="#ffffff">Sign In</Button>
            <Button color="#ffffff" bg="#1633ff">Sign Up</Button>
        </div>
    );
};

export default Navbar;