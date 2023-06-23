"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProductCategory from "./components/productCategory";
import ProductOfList from "./components/ProductOfList";
import { useQuery } from "@tanstack/react-query";
import { HiOutlineArrowUpCircle, HiArrowUpCircle } from "react-icons/hi2";
import { animateScroll as scroll } from "react-scroll";
// import { useProductData } from "../Data/productData";

const Page = () => {
  //   const { data, isLoading, error } = useProductData();
  // const [cartValue, setCartValue] = cart;
  const [backToTop, setBackToTop] = useState(false);
  //   const [productValue, setProductValue] = useState(data);
  const [productValue, setProductValue] = useState([]);
  const [button, setButton] = useState([]);
  const [filterProduct, setFilterProduct] = useState("All");

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (!res.ok) throw Error("Url might be not found.");

    setProductValue([...data]);
    return data;
  };

  const productList = useQuery({
    queryKey: ["productData"],
    queryFn: fetchData,
  });
  // !!! Back To Top

  const handleTop = () => {
    setBackToTop(!backToTop);
  };

  // !! Fetching the Unique Category>>>
  const handleClick = (e) => {
    setFilterProduct(e.target.dataset.name);
  };
  const fetchCat = () => {
    let unique = productValue.map((but) => but.category);
    unique = [...new Set(unique)];
    setButton(unique);
  };
  useEffect(() => {
    fetchCat();
  }, [, filterProduct]);
  console.log(button);

  return (
    <div className="container py-24 px-8 md:px-0">
      <div id="buttonSection" className="btn_container">
        <button className="btn" onClick={handleClick} data-name="All">
          All
        </button>
        <div className="flex items-center justify-center flex-wrap gap-2">
          {button.map((btns) => {
            return (
              <>
                <button
                  key={btns.id}
                  className="btn"
                  onClick={handleClick}
                  data-name={btns}
                >
                  {btns}
                </button>
              </>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-productLayout gap-4 mt-10">
        {filterProduct === "All" ? (
          <ProductOfList
            filterProduct={filterProduct}
            product={productValue}
            // setProduct={setProductValue}
          />
        ) : (
          <ProductCategory
            filterProduct={filterProduct}
            product={productValue}
            // setProduct={setProductValue}
          />
        )}
      </div>

      <div className="fixed bottom-5 left-3/4 z-50">
        <button
          className="border-2 border-lime-200 rounded-full p-1"
          onClick={handleTop}
        >
          <Link
            href="#buttonSection"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {backToTop ? (
              <HiOutlineArrowUpCircle className="topBtn" />
            ) : (
              <HiArrowUpCircle className="topBtn" />
            )}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Page;
