import Link from "next/link";
import React from "react";

const DashboardNavbar = () => {
  return (
    <div>
      <div className="w-full grid place-items-start gap-3">
        <Link
          href="/Dashboard"
          className="text-center w-full bg-lime-300 text-lime-900 font-medium font-serif py-2 px-8 rounded-full cursor-pointer capitalize hover:text-lime-900 border-2 border-transparent hover:bg-transparent hover:border-lime-600"
        >
          products
        </Link>
        <Link
          href="/Dashboard/addProduct"
          className="text-center w-full bg-lime-300 text-lime-900 font-medium font-serif py-2 px-8 rounded-full cursor-pointer capitalize hover:text-lime-900 border-2 border-transparent hover:bg-transparent hover:border-lime-600"
        >
          add products
        </Link>
        <Link
          href="/Dashboard/user"
          className="text-center w-full bg-lime-300 text-lime-900 font-medium font-serif py-2 px-8 rounded-full cursor-pointer capitalize hover:text-lime-900 border-2 border-transparent hover:bg-transparent hover:border-lime-600"
        >
          users
        </Link>
      </div>
    </div>
  );
};

export default DashboardNavbar;
