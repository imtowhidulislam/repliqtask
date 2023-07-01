"use client";
import React, { useState, useEffect } from "react";
// import Button from "../../Util/Button"
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";

const ProductCategory = ({
  product,
  cart,
  setCart,
  setProduct,
  filterProduct,
}) => {
  const [filterProductData, setFilterProductData] = useState([]);

  const filterCategory = () => {
    const fetchFilterProduct = product.filter((cat) => {
      return cat.category === filterProduct;
    });
    setFilterProductData(fetchFilterProduct);
  };
  useEffect(() => {
    filterCategory();
  }, [filterProduct]);

  const getProduct = (id) => {
    try {
      const fetchCartItem = product.find((item) => item.id === id);
      setCart((prevValue) => [...prevValue, fetchCartItem]);
      toast.success("Product added successfully");
    } catch (error) {
      toast.error("Product not found");
    }
  };

  return (
    <>
      {filterProductData.map((singleProduct) => {
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
          <div key={id} className="card z-10 animate-moveUp">
            <Link
              href={`/Product/${id}`}
              className="flex h-full items-center justify-between gap-2 flex-col"
            >
              <div>
                <div className="m-auto w-48 max-h-44 mb-4 p-4">
                  <Image
                    className="block h-44 object-cover w-full"
                    src={img}
                    alt=""
                    width={300}
                    height={300}
                  />
                </div>
                <div className="px-4 text-gray-700 pt-2 pb-4 z-20 text-left">
                  <div>
                    <h2>Name : {title.split(" ").length <= 5 ? `${titleLength}` : `${titleLength}...`}</h2>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-2">
                    <h2>
                      Price :{" "}
                      <span className="font-bold text-yellow-400">
                        {price}$
                      </span>
                    </h2>
                    <p>
                      Rating :{" "}
                      <span className="font-bold text-yellow-400">
                        {rating.rate}
                      </span>
                    </p>
                  </div>
                  <h2>Category : {cat}</h2>
                  {/* <p>Detail : {desc}$</p> */}
                </div>
              </div>
              <div className="flex items-center w-full justify-between px-2 pb-4 w-full">
                {/* <Button actionType="add to card" />
                            <Button actionType="buy now" /> */}

                <button
                  type="button"
                  onClick={() => getProduct(id)}
                  className="w-full capitalize font-bold text-sm text-lime-900  bg-transparent cursor-pointer py-2 px-4 rounded-md hover:drop-shadow-md transition-all duration-200 ease-in-out border-2 border-lime-900 hover:text-lime-100 hover:bg-lime-700 hover:border-transparent"
                >
                  add to cart
                </button>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ProductCategory;
