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
import { usePathname } from "next/navigation";

const NavbarMain = ({ params }) => {
  const currentPath = usePathname();
  const { cart } = useContext(CartContextProvider);
  const [cartItem, setCartItem] = cart;
  const [toggleNav, setToggleNav] = useState(false);
  const [width, setWidth] = useState(window?.innerWidth);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const calcSize = () => {
        setWidth(window.innerWidth);
      };

      setToggleNav(true);
      window.addEventListener("resize", calcSize);
      return () => {
        window.removeEventListener("resize", calcSize);
      };
    }
  }, []);

  // ? Navbar Toggle Functionality...
  const handleToggle = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-lime-100 sm:relative sm:bg-[#71f171ea] md:backdrop-blur-sm">
      <div className="container py-4">
        {width > 768 ? (
          <nav className="flex w-full max-w-7xl items-center justify-between gap-2">
            <div>
              <Link href="/">
                <h2 className="flex items-center gap-2 text-2xl font-bold uppercase text-lime-700">
                  <span className="text-pink-500">
                    <RiShoppingBagFill />
                  </span>
                  repliq
                </h2>
              </Link>
            </div>
            <div className="flexRow gap-2">
              <Link
                className={
                  currentPath === "/"
                    ? "navList navLink text-pink-600"
                    : "navLink navList"
                }
                href="/"
              >
                Home
              </Link>
              <Link
                className={
                  currentPath === "/product"
                    ? "navLink navList text-pink-600"
                    : "navLink navList"
                }
                href="/product"
              >
                Product
              </Link>
              <Link
                className={
                  currentPath === "/dashboard"
                    ? "navLink navList text-pink-600"
                    : "navLink navList"
                }
                href="/dashboard"
              >
                Dashboard
              </Link>

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
                <Link
                  className={
                    currentPath === "/register"
                      ? "navLink text-pink-600"
                      : "navLink"
                  }
                  href="/register"
                >
                  {" "}
                  Account
                </Link>
              </li>
              <li className="flex items-center gap-2 ">
                <span className="countCart">
                  <BsCartPlus />
                </span>
                <Link
                  className={
                    currentPath === "/cart"
                      ? "navLink relative text-pink-600"
                      : "navLink relative"
                  }
                  href="/cart"
                >
                  Cart{" "}
                  <span>
                    <p
                      className={
                        currentPath === "/cart"
                          ? "absolute left-full top-0 mb-1 ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-300 text-extraSmall font-bold text-lime-900"
                          : "absolute left-full top-0 mb-1 ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-300 text-extraSmall font-bold"
                      }
                    >
                      {cartItem.length}
                    </p>
                  </span>
                </Link>
              </li>
            </div>
          </nav>
        ) : (
          <nav className="relative z-20 flex w-full max-w-7xl items-center justify-between gap-4">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-bold uppercase text-lime-600">
                <span className="text-pink-600">
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
                  ? "mobileNav top fixed left-0 z-50 bg-[#1e1e1c89] px-4 py-20 backdrop-blur-md backdrop-filter sm:px-32"
                  : "mobileNav-active top fixed left-0 z-50 bg-[#1e1e1c89] px-4 py-20 backdrop-blur-md backdrop-filter sm:px-32 "
              }
            >
              <div className="">
                <div>
                  <li>
                    <SearchButton />
                  </li>
                </div>
                <div className="mt-4 gap-2">
                  <Link
                    className={
                      currentPath === "/"
                        ? "navLink navList text-pink-600"
                        : "navLink navList"
                    }
                    href="/"
                  >
                    Home
                  </Link>

                  <Link
                    className={
                      currentPath === "/product"
                        ? "navLink navList text-pink-600"
                        : "navLink navList"
                    }
                    href="/product"
                  >
                    Product
                  </Link>

                  <Link
                    className={
                      currentPath === "/dashboard"
                        ? "navLink navList text-pink-600"
                        : "navLink navList"
                    }
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>

                  <li className="navList flex items-center justify-start gap-2 py-2">
                    
                    <Link
                      className={
                        currentPath === "/register"
                          ? "navLink text-pink-600"
                          : "navLink"
                      }
                      href="/register"
                    >
                      {" "}
                      <span>
                      <VscAccount />
                    </span> Account
                    </Link>
                  </li>
                  <li className="navList flex items-center justify-start gap-2 py-2">
                    
                    <Link
                      className={
                        currentPath === "/cart"
                          ? "navLink text-pink-600"
                          : "navLink"
                      }
                      href="/cart"
                    >
                      {" "}
                      <span>
                      <BsCartPlus />
                    </span> Cart
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default NavbarMain;
