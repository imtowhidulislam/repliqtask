"use client";
import React from "react";
import { useProductData } from "../Data/productData";

const page = () => {
  const { data, isLoading, error } = useProductData();
  // console.log(data);
  // if (isLoading) return <div>"Loading..."</div>;

  return (
    <div>
      <h2>This is Practice Page!!!</h2>
      
    </div>
  );
};

export default page;
