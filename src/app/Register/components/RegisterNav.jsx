import React from "react";
import Link from "next/link";

const RegisterNav = () => {
  return (
    <div>
      <div className="grid place-items-center py-12">
        <Link
          className="group w-max rounded-xl bg-lime-300 px-8 py-2 drop-shadow-md transition-all duration-200 ease-in-out hover:bg-lime-800"
          href="/register"
        >
          <button className="font-bold capitalize group-hover:text-lime-100">
            Sign Up
          </button>
        </Link>
        <Link
          className="group w-max rounded-xl bg-lime-300 px-8 py-2 drop-shadow-md transition-all duration-200 ease-in-out hover:bg-lime-800"
          href="/register/login"
        >
          <button className="font-bold capitalize group-hover:text-lime-100">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterNav;
