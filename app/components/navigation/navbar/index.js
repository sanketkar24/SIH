import React from "react";
import Link from "next/link";
import Image from "next/image";
import navbarLogo from "../../../../images/navbarLogo.png";
import {Button} from 'antd';
import "./index.css";
const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="navbarLogo">
                <Image src={navbarLogo} alt="navbar logo" />
            </div>
            <div className="nav-items">
                <Link href="/">Listing</Link>
                <Link href="/about">List Your Shelf</Link>
                <Link href="/contact">About Us</Link>
                <Link href="/contact">Sign Up</Link>
                <Button type="primary" className="loginButton">Log In</Button>
            </div>
        </div>
    </>
  );
};

export default Navbar;