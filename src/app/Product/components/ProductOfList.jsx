"use client";
import React, { useEffect, useState } from "react";
// import Button from '../../Util/Button';
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";
import Loading from "../loading";
import {HiShoppingCart,HiOutlineHeart,HiHeart} from "react-icons/hi"
import FavoriteBtn from "./FavoriteBtn";

const ProductOfList = ({ product, loading, cart, setCart }) => {
  // const [cart,setCart] = useState([]);
  const getProduct = (id) => {
    try {
      const fetchCartItem = product.find((item) => {
        if (item.id === id) item.quantity += 1;

        item.quantity = 1;
        return item.id === id;
      });
      setCart((prevItem) => [...prevItem, fetchCartItem]);

      toast.success("product added successfully");
    } catch (error) {
      toast.error("product not found");
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        product?.map((singleProduct) => {
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
            <div
              key={id}
              className="card z-10 flex h-full animate-moveUp flex-col items-center justify-between gap-2 relative"
            >
              <div className="absolute top-3 left-3/4">
                <FavoriteBtn />
              </div>
              <Link href={`/Product/${id}`} className="">
                <div>
                  <div className="m-auto mb-4 h-60 max-w-xs p-4">
                    <Image
                      className="objece-center block h-60 object-cover"
                      src={img}
                      alt=""
                      width={300}
                      height={400}
                    />
                  </div>
                  <div className="z-20 px-4 pb-4 pt-2 text-gray-700">
                    <div>
                      <h2 className="sm:text-lg">
                        Name :{" "}
                        {title.split(" ").length <= 5
                          ? `${titleLength}`
                          : `${titleLength}...`}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between gap-4 py-2">
                      <h2>
                        Price :{" "}
                        <span className="font-bold text-lime-400">
                          {price}$
                        </span>
                      </h2>
                      <p>
                        Rating :{" "}
                        <span className="font-bold text-lime-400">
                          {rating.rate}
                        </span>
                      </p>
                    </div>
                    <h2>Category : {cat}</h2>
                    {/* <p>Detail : {desc}$</p> */}
                  </div>
                </div>
              </Link>
              <div className="flex w-full items-center justify-between px-2 pb-4">
                {/* <Button actionType="add to card" />
                              <Button actionType="buy now" /> */}

                <button
                  type="button"
                  onClick={() => getProduct(id)}
                  className="w-full cursor-pointer rounded-md border-2 border-lime-900  bg-transparent px-4 py-2 text-sm font-bold capitalize text-lime-900 transition-all duration-200 ease-in-out hover:border-transparent hover:bg-lime-700 hover:text-lime-100 hover:drop-shadow-md"
                >
                  add to cart
                </button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default ProductOfList;
