"use client";
import { useState } from "react";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  //   const { product, cart } = useContext(ProductContext);
  //   const [cartValue, setCartValue] = cart;
  const [productValue, setProductValue] = useState([]);

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

  const removeItem = (id) => {
    setProductValue((current) => current.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="grid-layout container">
        <div className="">
          <div className="mb-6">
            <h2 className="uppercase text-lime-900 text-2xl font-bold flex gap-2 items-center">
              <span className="text-lime-400">
                <RiShoppingBagFill />
              </span>
              repliq
            </h2>
          </div>
          <div className="w-full grid place-items-start gap-3">
            <button className="w-full bg-lime-300 text-lime-900 font-medium font-serif py-2 px-8 rounded-full cursor-pointer capitalize hover:text-lime-900 border-2 border-transparent hover:bg-transparent hover:border-lime-600">
              products
            </button>
            <button className="w-full bg-lime-300 text-lime-900 font-medium font-serif py-2 px-8 rounded-full cursor-pointer capitalize hover:text-lime-900 border-2 border-transparent hover:bg-transparent hover:border-lime-600">
              add products
            </button>
            <button className="w-full bg-lime-300 text-lime-900 font-medium font-serif py-2 px-8 rounded-full cursor-pointer capitalize hover:text-lime-900 border-2 border-transparent hover:bg-transparent hover:border-lime-600">
              add customer
            </button>
          </div>
        </div>
        <div>
          <h2 className="capitalize mb-4 text-2xl font-bold font-mono">
            total no of product is : {productValue.length}
          </h2>
          <div>
            {productValue.map((item) => {
              const { id, title, price, image, category } = item;

              return (
                <div
                  key={id}
                  className="flex items-center justify-between gap-8 p-3 rounded-md drop-shadow-md mb-2 bg-lime-100 border-1 border-lime-600"
                >
                  <div className="flex items-center gap-6">
                    <div className="h-20 w-20 rounded-md overflow-hidden">
                      <img
                        className="object-cover h-20 w-full"
                        src={image}
                        alt="image"
                      />
                    </div>
                    <div>
                      <h2 className="text-xs md:text-base font-medium capitalize text-left">
                        {title}
                      </h2>
                      <h2 className="text-xs md:text-base font-medium capitalize text-left text-lime-800">
                        {category}
                      </h2>
                      <h2 className="text-xs md:text-base font-medium capitalize text-left">
                        ${price} USD
                      </h2>
                    </div>
                  </div>
                  <div>
                    <div>
                      <button
                        className="text-red-400 hover:animate-bounce transition-all duration-200 ease-in-out hover:text-red-600 text-xl cursor-pointer"
                        onClick={() => removeItem(id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
