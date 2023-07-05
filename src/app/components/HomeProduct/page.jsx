import React, { useContext, useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useProductData } from "../../Data/productData";
import { toast } from "react-hot-toast";
import CartContextProvider from "@/app/context/cartContext";

const HomeTopratedProduct = () => {
  const { cart } = useContext(CartContextProvider);
  // const { data, isLoading, error: error } = useProductData();
  const [topRate, setTopRate] = useState([]);
  const [cartValue, setCartValue] = cart;

  // ?? Fetching Data use TanStack Query...
  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (!res.ok) throw new Error("Url might be not found.");

    const topProducts = data?.filter((item) => item.rating.rate >= 4.0);
    localStorage.setItem("topRatedProduct", JSON.stringify(topProducts));
    setTopRate(topProducts);

    return data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["productData"],
    queryFn: fetchData,
  });

  const addToCart = (id) => {
    try {
      const fetchCartItem = data?.find((item) => {
        item.quantity = 1;
        return item.id === id;
      });
      setCartValue((prevItem) => [...prevItem, fetchCartItem]);

      cart.find((item) => item.id === id && (item.quantity += 1));

      toast.success("Product Added");
    } catch (error) {
      toast.error("Product not found");
    }
  };

  if (error) return "Url might not be found" + error.message;
  console.log(topRate);

  return (
    <div>
      <div>
        <div className="container py-20">
          <h2 className="mb-6 text-left font-mono text-xl font-bold uppercase text-[#13194a] sm:text-2xl md:text-3xl">
            Top Rated Items
          </h2>
          {isLoading ? (
            <h2 className="text-center text-2xl font-bold">Loading...</h2>
          ) : (
            <div className="grid w-full grid-cols-homepageLayoutHero1 place-items-start gap-4 overflow-hidden sm:grid-cols-productLayoutTop">
              {topRate?.map((topProduct) => {
                const { id, title, price, rating, image } = topProduct;
                const titleLength = title.split(" ").slice(0, 5).join(" ");
                return (
                  <div
                    key={id}
                    className="card z-10 flex h-full animate-moveUp flex-col items-center justify-between gap-2"
                  >
                    <Link href={`/product/${id}`} className="">
                      <div>
                        <div className="m-auto mb-4 h-60 max-w-xs p-4">
                          <Image
                            className="objece-center block h-60 object-cover"
                            src={image}
                            alt=""
                            width={400}
                            height={300}
                          />
                        </div>
                        <div className="z-20 px-4 pb-4 pt-2 text-gray-700">
                          <div>
                            <h2>
                              Name :{" "}
                              {title.split(" ").length <= 5
                                ? `${titleLength}`
                                : `${titleLength}...`}
                            </h2>
                          </div>
                          <div className="flex items-center justify-between gap-4 py-2">
                            <h2>
                              Price :{" "}
                              <span className="text-sm font-bold text-lime-400">
                                {price}$
                              </span>
                            </h2>
                            <p>
                              Rating :{" "}
                              <span className="text-sm font-bold text-lime-400">
                                {rating.rate}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="flex w-full items-center justify-between px-2 pb-4">
                      <button
                        type="button"
                        onClick={() => addToCart(id)}
                        className="w-full cursor-pointer rounded-md border-2 border-lime-900  bg-transparent px-4 py-2 text-sm font-bold capitalize text-lime-900 transition-all duration-200 ease-in-out hover:border-transparent hover:bg-lime-700 hover:text-lime-100 hover:drop-shadow-md"
                      >
                        add to cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeTopratedProduct;
