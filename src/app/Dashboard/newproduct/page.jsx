"use client"
import React, { useContext } from "react";
import Image from "next/image";
import NewProductProviderContext from "@/app/context/newProduct";

const NewProduct = () => {
    const {newProduct ,setNewProduct} = useContext(NewProductProviderContext);
  console.log(newProduct);
  return (
    <>
    <h2>hello</h2>
      {/* {products.map((product) => {
        const { userId: id, title, desc,category, price,file:image } = product;

        return (
          <div
            key={id}
            className="mb-2 flex flex-col flex-wrap items-center justify-center gap-2 rounded-md border-2 border-gray-300 p-4 shadow-lg sm:flex-row sm:justify-between sm:gap-1"
          >
            <div className="w-12 overflow-hidden rounded-full border border-lime-700">
              <Image
                src={`/${image?.name}`}
                alt={fName}
                width={50}
                height={50}
              />
            </div>
            <p className="text-xl font-bold capitalize text-lime-900">
              {title}
            </p>
            <p className="break-words text-small font-bold capitalize sm:text-base sm:font-light">
              {category}
            </p>
            <p className="break-words text-small font-bold capitalize sm:text-base sm:font-light">
              {desc}
            </p>
            <p className="break-words text-small font-bold capitalize sm:text-base sm:font-light">
              {price}
            </p>
            <div>
              <button
                type="button"
                onClick={() => handleRemoveUser(id)}
                className="w-max cursor-pointer rounded-full border-2 border-lime-800 bg-transparent px-4 py-2 text-sm font-bold capitalize text-lime-800 transition-all duration-200 ease-in-out hover:border-transparent hover:bg-lime-900 hover:text-lime-100 hover:drop-shadow-md"
              >
                add Product
              </button>
            </div>
          </div>
        );
      })} */}
    </>
  );
};

export default NewProduct;
