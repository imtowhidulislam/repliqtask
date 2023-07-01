"use client";
import React, { useContext, useState } from "react";
import { RiShoppingBagFill } from "react-icons/ri";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import CartContextProvider from "@/app/context/cartContext";
import { useProductData } from "@/app/Data/productData";
import { productSchema } from "@/app/Register/schemas/page";

const page = () => {
  const {data, isLoading, error} = useProductData();
  const {user} = useContext(CartContextProvider);
  const [users, setUsers] = user;

  console.log(data);

  const {
    values,
    setFieldValue,
    handleChange,
    touched,
    errors,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues: {
      title: "",
      desc: "",
      price: null,
      file: null,
      category: "",
    },
    validationSchema: productSchema,
    onSubmit : async ({fName,lName,email,password,file},{resetForm}) => {
      const userId = new Date().getTime().toString();
      const newUser = {...values, userId};
      setUsers([...users, newUser]);
      resetForm();
      toast.success("Submitted successfully");
    }
  });
 
  return (
    <>
      <div className="relative flex bg-contact-image before:absolute before:w-full before:h-full before:bg-[rgba(10,46,16,0.57)] before:backdrop-blur-sm before:top-0 before:left-0  bg-center bg-no-repeat bg-cover h-full w-full items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="registerForm animate-moveUp w-full max-w-md px-4 rounded-md overflow-hidden mx-4 sm:mx-0 my-8 py-6 border border-gray-200 bg-[#14141483] backdrop-filter backdrop-blur-md"
        >
          <div className="flex items-center justify-center text-6xl text-cyan-700 pb-1">
            {/* <div>
              <h2 className="uppercase text-lime-300 text-4xl font-bold flex gap-2 items-center">
                <span className="text-lime-600">
                  <RiShoppingBagFill />
                </span>
                repliq
              </h2>
            </div> */}
          </div>
          <div className="pb-2">
            <h2 className="text-center text-xl font-bold text-[#ffff] uppercase">
              sign up
            </h2>
          </div>

          <div className="">
            <label
              className="lableWidth text-gray-100 font-bold"
              htmlFor="first name"
            >
              First Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="enter product title"
                className={
                  errors.title && touched.title
                    ? "form placeholder:capitalize placeholder:text-gray-900 pl-4 border-2 border-red-500"
                    : "form placeholder:capitalize pl-4 "
                }
              />
              {errors.title && touched.title && (
                <p className="text-red-600 text-sm font-semibold capitalize absolute top-full left-0">
                  {errors.title}
                </p>
              )}
            </div>
          </div>

          <div className="">
            <label
              className="lableWidth text-gray-100 font-bold capitalize"
              htmlFor="desc"
            >
              desc
            </label>
            <div className="relative">
              <input
                type="text"
                name="desc"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.desc}
                className={
                  errors.desc && touched.desc
                    ? "form placeholder:capitalize pl-4 border-2 border-red-500"
                    : "form placeholder:capitalize pl-4"
                }
                placeholder="enter product desc"
              />
              {errors.desc && touched.desc && (
                <p className="text-red-600 text-sm font-semibold capitalize absolute top-full left-0">
                  {errors.desc}
                </p>
              )}{" "}
            </div>
          </div>
          <div className="">
            <label
              className="lableWidth text-gray-100 font-bold capitalize"
              htmlFor="price"
            >
              price
            </label>
            <div className="relative">
              <input
                type="number"
                name="price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                className={
                  errors.price && touched.price
                    ? "form placeholder:capitalize placeholder:text-lime-700 pl-4 border-2 border-red-500"
                    : "form placeholder:capitalize pl-4"
                }
                placeholder="enter product price"
              />
              {errors.price && touched.price && (
                <p className="text-red-600 text-sm font-semibold capitalize absolute top-full left-0">
                  {errors.price}
                </p>
              )}
            </div>
          </div>
          <div className="">
            <label
              className="lableWidth text-gray-100 font-bold capitalize"
              htmlFor="image"
            >
              Image
            </label>
            <div className="relative">
              <input
                type="file"
                // accept="/*"
                name="file"
                onBlur={handleBlur}
                onChange={(e) => setFieldValue("file", e.target.files[0])}
                className={
                  errors.file && touched.file
                    ? "form placeholder:capitalize pl-4 border-2 border-red-500"
                    : "form placeholder:capitalize pl-4"
                }
                placeholder="enter product Image"
              />
              {errors.file && touched.file && (
                <p className="text-red-600 text-sm font-semibold capitalize absolute top-full left-0">
                  {errors.file}
                </p>
              )}
            </div>
          </div>
          <div className="">
            <label
              className="lableWidth text-gray-100 font-bold capitalize"
              htmlFor="categor"
            >
              Category
            </label>
            <div className="relative">
              <input
                type="text"
                name="category"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.category}
                className={
                  errors.category && touched.category
                    ? "form placeholder:capitalize pl-4 border-2 border-red-500"
                    : "form bg-transparent placeholder:capitalize pl-4"
                }
                placeholder="enter product category"
              />
              {errors.category && touched.category && (
                <p className="text-red-600 text-sm font-semibold capitalize absolute top-full left-0">
                  {errors.category}
                </p>
              )}
            </div>
          </div>

          <div className="mt-12 w-full">
            <button
              type="submit"
              // onClick={handleSubmit}
              className="rounded-md capitalize w-full font-bold text-base bg-transparent border-2 border-lime-700 text-lime-100 hover:bg-lime-700 hover:text-lime-100 hover:border-transparent transition-all duration-200 ease-out cursor-pointer py-2 px-8"
            >
              submit
            </button>
          </div>

          {/* <div><p className='capitalize text-gray-300'>{account}<span><button type='button' className='uppercase text-sky-400 underline cursor-pointer'>{acctionType}</button></span></p></div> */}
        </form>
      </div>
    </>
  );
};

export default page;
