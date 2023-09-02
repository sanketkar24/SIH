import React from "react";
import Link from "next/link";
import Image from "next/image";
import navbarLogo from "../../../../images/navbarLogo.png";
import {Button} from 'antd';
const Navbar = () => {
  return (
    <>
        <div className="w-full fixed bg-white flex flex-row justify-between py-4 px-10 m-0 border-b border-black" style={{zIndex:"99999"}}>
            <div className="h-30 w-24 md:h-30 md:w-40">
                <Image src={navbarLogo} alt="navbar logo" height={50} />
            </div>
            <div className=" items-center hidden gap-10 tablet:flex">
                <Link className="hover:text-sky-500 hover:underline-offset-8 hover:underline " href="/">Home</Link>
                <Link className="hover:text-sky-500 hover:underline-offset-8 hover:underline " href="/listings">Listing</Link>
                <Link className="hover:text-sky-500 hover:underline-offset-8 hover:underline " href="/about">List Your Shelf</Link>
                <Link className="hover:text-sky-500 hover:underline-offset-8 hover:underline " href="/contact">About Us</Link>
                <Link className="hover:text-sky-500 hover:underline-offset-8 hover:underline " href="/signup">Sign Up</Link>
                <Button type="primary" className="bg-sky-500 text-base" href="/login">Log In</Button>
            </div>
        </div>
    </>
  );
};

export default Navbar;