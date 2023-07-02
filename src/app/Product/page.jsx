"use client";
import { useContext, useEffect, useRef, useState } from "react";
import ProductCategory from "./components/productCategory";
import ProductOfList from "./components/ProductOfList";
import { useQuery } from "@tanstack/react-query";
import { HiOutlineArrowUpCircle, HiArrowUpCircle } from "react-icons/hi2";
// import { useProductData } from "../Data/productData";
import CartContextProvider from "../context/cartContext";


const Page = () => {
  const sectionRef = useRef(null);
  //   const { data, isLoading, error } = useProductData();
  const { cart } = useContext(CartContextProvider);
  const [cartValue, setCartValue] = cart;
  const [backToTop, setBackToTop] = useState(false);
  //   const [productValue, setProductValue] = useState(data);
  const [productValue, setProductValue] = useState([]);
  const [button, setButton] = useState([]);
  const [filterProduct, setFilterProduct] = useState("All");

  const fetchCat = (data) => {
    let unique = data.map((but) => but.category);
    unique = [...new Set(unique)];
    setButton(unique);
  };
  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (!res.ok) throw Error("Url might be not found.");

    fetchCat(data);
    setProductValue([...data]);
    return data;
  };

  const {data,isLoading, error} = useQuery({
    queryKey: ["productData"],
    queryFn: fetchData,
  });
  // !!! Back To Top

  const handleTop = () => {
    sectionRef.current?.scrollIntoView({
      behavior :"smooth"
    })
  };

  // !! Fetching the Unique Category>>>
  const handleClick = (e) => {
    setFilterProduct(e.target.dataset.name);
  };

  return (
    <div className="container py-24 px-3 md:px-0">
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
    <div ref={sectionRef} className="grid grid-cols-productLayout place-items-start gap-4 mt-10">
        {filterProduct === "All" ? (
          <ProductOfList
            filterProduct={filterProduct}
            product={productValue}
            // setProduct={setProductValue}
            loading={isLoading}
            cart={cartValue}
            setCart={setCartValue}
          />
        ) : (
          <ProductCategory
            filterProduct={filterProduct}
            product={productValue}
            // setProduct={setProductValue}
            loading={isLoading}
            cart={cartValue}
            setCart={setCartValue}
          />
        )}
      </div>

      <div className="fixed bottom-5 left-3/4 z-50">
        <button
          className="border-2 border-lime-200 rounded-full p-1"
          onClick={handleTop}
        >
            {backToTop ? (
              <HiOutlineArrowUpCircle className="topBtn" />
            ) : (
              <HiArrowUpCircle className="topBtn" />
            )}
        </button>
      </div>
    </div>
  );
};

export default Page;
