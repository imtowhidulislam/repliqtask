import React from "react";
import Link from "next/link";

const RegisterNav = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between md:flex-col py-12 gap-4">
        <Link
          className="group w-full rounded-sm bg-lime-300 px-8 py-2 drop-shadow-md transition-all duration-200 ease-in-out hover:bg-lime-800"
          href="/register"
        >
          <button className="font-bold w-full capitalize text-center group-hover:text-lime-100">
            Sign Up
          </button>
        </Link>
        <Link
          className="group w-full rounded-sm bg-lime-300 px-8 py-2 drop-shadow-md transition-all duration-200 ease-in-out hover:bg-lime-800"
          href="/register/login"
        >
          <button className="font-bold w-full capitalize text-center group-hover:text-lime-100">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterNav;
