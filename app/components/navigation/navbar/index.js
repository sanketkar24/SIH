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
            <div className=" h-30 w-20 md:h-30 md:w-40">
                <Image src={navbarLogo} alt="navbar logo" />
            </div>
            <div className=" md:items-center md:flex md:gap-10 hidden ">
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