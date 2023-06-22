"use client";
import React from "react";
import { RiShoppingBagFill } from "react-icons/ri";
import { useFormik } from "formik";
import { formSchema } from "../Register/schemas/page";
import toast, { Toaster } from "react-hot-toast";
import FormikError from "../Register/components/formikError";

const page = () => {
  const message = () => toast("form Submitted successfully");

  const onSubmit = async (actions, values) => {
    console.log(values);
    // console.log(actions);
    console.log("submitted");
    await new Promise((resolve) => resolve, 1000);
    actions.resetForm();
    message();
  };
  const {
    values,
    setFieldValue,
    handleChange,
    touched,
    errors,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      file: null,
      password: "",
    },
    validationSchema: formSchema,
    onSubmit,
  });
  console.log(values);
  console.log(errors);
  return (
    <>
      <div className="contact flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="registerForm w-full max-w-md px-4 rounded-md overflow-hidden my-8 py-6 border border-gray-200 bg-[#14141483] backdrop-filter backdrop-blur-md"
        >
          <div className="flex items-center justify-center text-6xl text-cyan-700 pb-3">
            <div>
              <h2 className="uppercase text-blue-600 text-4xl font-bold flex gap-2 items-center">
                <span className="text-green-600">
                  <RiShoppingBagFill />
                </span>
                repliq
              </h2>
            </div>
          </div>
          <div className="pb-4">
            <h2 className="text-center text-xl font-bold text-[#ffff] uppercase">
              sign up
            </h2>
          </div>

          <div className="w-full flex items-center justify-center gap-4">
            <label
              className="lableWidth text-gray-100 font-bold"
              htmlFor="first name"
            >
              First Name
            </label>
            <div className="relative p-2">
              <input
                type="text"
                id="fName"
                value={values.fName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="enter your first name"
                className={
                  errors.lName && touched.lName
                    ? "form w-full placeholder:capitalize pl-4 border-2 border-red-500"
                    : "form w-full placeholder:capitalize pl-4 bg-transparent"
                }
              />
              {errors.fName && touched.fName && (
                <p className="text-red-600 text-sm font-semibold capitalize absolute top-full left-0">
                  {errors.fName}
                </p>
              )}
            </div>
          </div>

          <div className="w-full flex items-center justify-center gap-4">
            <label
              className="lableWidth text-gray-100 font-bold capitalize"
              htmlFor="lName"
            >
              Last Name
            </label>
            <div className="relative p-2">
              <input
                type="text"
                name="lName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lName}
                className={
                  errors.lName && touched.lName
                    ? "form w-full placeholder:capitalize pl-4 border-2 border-red-500"
                    : "bg-transparent form w-full placeholder:capitalize pl-4"
                }
                placeholder="enter your last name"
              />
              {errors.lName && touched.lName && (
                <p className="text-red-600 text-sm font-semibold capitalize absolute top-full left-0">
                  {errors.lName}
                </p>
              )}{" "}
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-4">
            <label
              className="lableWidth text-gray-100 font-bold capitalize"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                className={
                  errors.email && touched.email
                    ? "form w-full placeholder:capitalize pl-4 border-2 border-red-500"
                    : "'form w-full placeholder:capitalize pl-4'"
                }
                placeholder="enter your email"
              />
              {errors.email && touched.email && (
                <p className="text-red-600 text-sm font-semibold capitalize absolute top-full left-0">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-4">
            <label
              className="lableWidth text-gray-100 font-bold capitalize"
              htmlFor="image"
            >
              Image
            </label>
            <div className="relative border-2">
              <input
                type="file"
                // accept="/*"
                name="file"
                onBlur={handleBlur}
                onChange={(e) => setFieldValue("file", e.target.files[0])}
                className={
                  errors.file && touched.file
                    ? "form w-full placeholder:capitalize pl-4 border-2 border-red-500"
                    : "'form w-full placeholder:capitalize pl-4'"
                }
                placeholder="enter your Image"
              />
              {errors.file && touched.file && (
                <p className="text-red-600 text-sm font-semibold capitalize absolute top-full left-0">
                  {errors.file}
                </p>
              )}
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-4">
            <label
              className="lableWidth text-gray-100 font-bold capitalize"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                className={
                  errors.password && touched.password
                    ? "form w-full placeholder:capitalize pl-4 border-2 border-red-500"
                    : "'form w-full placeholder:capitalize pl-4'"
                }
                placeholder="enter you password"
              />
              {errors.password && touched.password && (
                <p className="text-red-600 text-sm font-semibold capitalize absolute top-full left-0">
                  {errors.password}
                </p>
              )}
            </div>
          </div>

          <div className="mt-12 w-full ">
            <button
              type="submit"
              onClick={handleSubmit}
              className="rounded-md capitalize w-full font-bold text-base bg-transparent border-2 border-lime-700 text-lime-100 hover:bg-bg-700 hover:text-lime-200 hover:border-transparent transition-all duration-200 ease-out cursor-pointer py-4 px-8"
            >
              submit
            </button>
            <Toaster />
          </div>

          {/* <div><p className='capitalize text-gray-300'>{account}<span><button type='button' className='uppercase text-sky-400 underline cursor-pointer'>{acctionType}</button></span></p></div> */}
        </form>
      </div>
    </>
  );
};

export default page;
