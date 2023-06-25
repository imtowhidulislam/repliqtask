"use client";
import { useEffect, useState } from "react";
import { useProductData } from "../Data/productData";
import Link from "next/link";
import Image from "next/image";
import { ButtonFilled, ButtonOutlined } from "../Util/ButtonOutlined";

const page = () => {
  const { data, isLoading, error } = useProductData();
  
  const oneProduct = data?.filter(item => item.id === 9);
  console.log(oneProduct);

  return (
    <div>
      <h2>This is Practice Page!!!</h2>
      <div className="container ">

          <>
           {oneProduct?.map((singleProduct) => {
            
            const {
              id,
              title,
              description: desc,
              image: img,
              price,
              rating,
              category: cat,
            } = singleProduct;
            
            const titleLength = title.split(" ").slice(0 , 5).join(" ");
            return (
              <div key={id} className="my-20">
                <Link
                  href={`/Product/${id}`}
                  className=""
                >
                  <div className="grid grid-cols-productLayout  gap-4">
                    <div className="grid bg-gray-200 rounded-md place-items-center ">
                      <Image
                        className="block bg-gray-100 object-cover object-center m-4 rounded-md" 
                        src={img}
                        alt=""
                        width={300}
                        height={350}
                      />
                      <div className="flex my-4 items-cener  justify-between gap-3">
                        <div className="w-24 bg-gray-100 h-24 overflow-hidden grid place-items-center rounded-sm p-1">
                          <Image className="object-cover object-center" src={img} alt="" width={50} height={50} />
                        </div>
                        <div className="w-24 bg-gray-100 h-24 overflow-hidden grid place-items-center rounded-sm p-1">
                          <Image className="object-cover object-center" src={img} alt="" width={50} height={50} />
                        </div>
                        <div className="w-24 bg-gray-100 h-24 overflow-hidden grid place-items-center rounded-sm p-1">
                          <Image className="object-cover object-center" src={img} alt="" width={50} height={50} />
                        </div>

                      </div>
                    </div>
                    <div className="px-4 text-gray-700 pt-4 pb-4 z-20">
                      <div>
                        <h2 className="text-xl font-bold">Name :  {title.split(" ").length <= 5 ? `${titleLength}` : `${titleLength}...`}</h2>
                      </div>
                      <div className="py-2">
                        <h2 className="py-4 max-w-md">
                          Desc :{" "}
                          <span className="">{desc}$</span>
                        </h2>
                        <h2 className="pb-4">
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
                      <h2 className="max-w-lg">Category : {cat}</h2>
                      <div className="w-max flex gap-4 px-2 pb-4 mt-8">
                          <ButtonOutlined btnText="view details" />
                          <ButtonFilled btnText="buy now" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        }</>
      </div>
    </div>
  );
};

export default page;
