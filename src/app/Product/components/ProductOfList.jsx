"use client";
import React, { useEffect, useState } from "react";
// import Button from '../../Util/Button';
import Link from "next/link";

const ProductOfList = ({ product, setProduct }) => {
  // const [cart,setCart] = useState([]);
  const getProduct = (id) => {
    const fetchCartItem = product.find((item) => item.id === id);
    setCart((prevItem) => [...prevItem, fetchCartItem]);
  };

  return (
    <>
      {product.map((singleProduct) => {
        const {
          id,
          title,
          description: desc,
          image: img,
          price,
          rating,
          category: cat,
        } = singleProduct;
        const titleLength = title.split(" ").slice(0, 5).join(" ");
        return (
          <div key={id} className="card">
            <Link
              href={`/Product/${id}`}
              className="flex h-full items-center justify-between gap-2 flex-col"
            >
              <div className="">
                <div className="m-auto w-48 max-h-44 mb-4 p-4">
                  <img
                    className="block h-44 object-cover w-full"
                    src={img}
                    alt=""
                  />
                </div>
                <div className="px-4 text-gray-700 pt-2 pb-4 z-20">
                  <div>
                    <h2>Name : {title.split(" ").length <= 5 ? `${titleLength}` : `${titleLength}...`}</h2>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-2">
                    <h2>
                      Price :{" "}
                      <span className="font-bold text-blue-800">{price}$</span>
                    </h2>
                    <p>
                      Rating :{" "}
                      <span className="font-bold text-blue-600">
                        {rating.rate}
                      </span>
                    </p>
                  </div>
                  <h2>Category : {cat}</h2>
                  {/* <p>Detail : {desc}$</p> */}
                </div>
              </div>
              <div className="w-full flex items-center justify-between px-2 pb-4">
                {/* <Button actionType="add to card" />
                                    <Button actionType="buy now" /> */}

                <button
                  type="button"
                  onClick={() => getProduct(id)}
                  className="capitalize w-full font-bold text-sm text-lime-800 border-2 border-lime-800 bg-transparent cursor-pointer py-2 px-4 rounded-full hover:drop-shadow-md transition-all duration-200 ease-in-out hover:text-lime-100 hover:border-transparent hover:bg-lime-900"
                >
                  view details
                </button>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ProductOfList;
