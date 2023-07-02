"use client";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { VscAccount } from "react-icons/vsc";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import SearchButton from "../SearchButton";
import CartContextProvider from "@/app/context/cartContext";

const NavbarMain = () => {
  // const [width, setWidth] = useState(768);
  const {cart} = useContext(CartContextProvider);
  const [toggleNav, setToggleNav] = useState(false);
  const [width, setWidth] = useState(window?.innerWidth);
  

  useEffect(() => {
    const calcSize = () => {
      setWidth(window.innerWidth);
    };

    setToggleNav(false);
    window.addEventListener("resize", calcSize);
    return () => {
      window.removeEventListener("resize", calcSize);
    };
  }, []);

  // ? Navbar Toggle Functionality...
  const handleToggle = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <div className="bg-gray-100">
      <div className="container py-4">
        {width > 768 ? (
          <nav className="flex items-center justify-between gap-2 max-w-7xl w-full">
            <div>
              <h2 className="uppercase text-blue-600 text-2xl font-bold flex gap-2 items-center">
                <span className="text-green-600">
                  <RiShoppingBagFill />
                </span>
                repliq
              </h2>
            </div>
            <div className="flexRow gap-2">
              <li className="navList">
                <Link className="navLink" href="/">
                  Home
                </Link>
              </li>
              <li className="navList">
                <Link className="navLink" href="/Product">
                  Product
                </Link>
              </li>
              <li className="navList">
                <Link className="navLink" href="/Dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="navList">
                <Link className="navLink" href="/PracticePage">
                  Practice
                </Link>
              </li>
            </div>
            <div className="flexRow gap-4">
              <li>
                <SearchButton />
              </li>
            </div>
            <div className="flexRow gap-4">
              <li className="flex items-center gap-2">
                <span>
                  <VscAccount />
                </span>
                <Link href="/Register"> Account</Link>
              </li>
              <li className="flex items-center gap-2 ">
                <span className="countCart">
                  <BsCartPlus />

                </span>
                <Link className="relative" href="/Cart">Cart <span>
                <p className='absolute top-0 left-full flex items-center justify-center w-4 h-4 rounded-full font-bold text-extraSmall bg-gray-200 ml-1 mb-1'>{cart.length}</p></span></Link>
              </li>
            </div>
          </nav>
        ) : (
          <nav className="relative z-20 flex items-center justify-between gap-4 max-w-7xl w-full">
            <div>
              <h2 className="uppercase text-blue-600 text-2xl font-bold flex gap-2 items-center">
                <span className="text-green-600">
                  <RiShoppingBagFill />
                </span>
                repliq
              </h2>
            </div>
            <div className="cursor-pointer" onClick={handleToggle}>
              {toggleNav ? <FaBars /> : <RxCross1 />}
            </div>
            <div
              className={
                toggleNav
                  ? "mobileNav z-50 py-20 fixed top left-0 px-4 sm:px-32 backdrop-blur-md backdrop-filter bg-[#1e1e1c89]"
                  : "mobileNav-active z-50 py-20 fixed top left-0 px-4 sm:px-32 backdrop-blur-md backdrop-filter bg-[#1e1e1c89] "
              }
            >
              <div className="">
                <div>
                  <li>
                    <SearchButton />
                  </li>
                </div>
                <div className="gap-2 mt-4">
                  <li className="navList">
                    <Link className="navLink" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="navList">
                    <Link className="navLink" href="/Product">
                      Product
                    </Link>
                  </li>
                  <li className="navList">
                    <Link className="navLink" href="/Dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <li className="navList">
                    <Link className="navLink" href="/PracticePage">
                      Practice
                    </Link>
                  </li>
                  <li className="navList flex items-center justify-start gap-2 py-2">
                    <span>
                      <VscAccount />
                    </span>
                    <Link href="/Register"> Account</Link>
                  </li>
                  <li className="navList flex items-center justify-start gap-2 py-2">
                    <span>
                      <BsCartPlus />
                    </span>
                    <Link href="/cart"> Cart</Link>
                  </li>
                </div>
                {/*                 <div className="gap-4 m-auto">
                  <li className="flex items-center justify-center gap-2 py-2">
                    <span>
                      <VscAccount />
                    </span>
                    <Link href="/Register"> Account</Link>
                  </li>
                  <li className="flex items-center justify-center gap-2 py-2">
                    <span>
                      <BsCartPlus />
                    </span>
                    <Link href="/cart"> Cart</Link>
                  </li>
                </div> */}
              </div>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default NavbarMain;
