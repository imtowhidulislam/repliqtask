"use client";
import { useState } from "react";
import toast, {Toaster} from 'react-hot-toast';
import { RiShoppingBagFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { HiCheckCircle } from "react-icons/hi";
import Image from "next/image";

const Dashboard = () => {
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
    try{
      setProductValue((current) => current.filter((item) => item.id !== id));
      toast.success("product deleted successfully");
    }
     catch(error){
      toast.error("Product not found")
     } 
  }

  return (
    <div>
        <div>
          <h2 className="capitalize mb-4 text-2xl font-bold font-mono">
            total no of product is : {productValue.length}
          </h2>
          <div>
            {productValue.map((item) => {
              const { id, title, price, image, category } = item;
              const setDelay = id * 100;
              return (
                <div
                  key={id}
                  className={`flex items-center justify-between gap-8 p-3 rounded-md drop-shadow-md mb-2 bg-lime-100 border-1 border-lime-600 animate-moveUp delay-[${setDelay}]`}
                >
                  <div className="flex items-center gap-6">
                    <div className="h-20 w-20 rounded-md overflow-hidden">
                      <Image
                        className="object-cover h-20 w-full"
                        src={image}
                        alt="image"
                        width={80}
                        height={80}
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
  );
};

export default Dashboard;
