import Link from "next/link";
import React from "react";

const DashboardNavbar = () => {
  return (
    <div>
      <div className="grid w-full place-items-start gap-3 mt-16 md:mt-0">
        <Link
          href="/dashboard"
          className="w-full cursor-pointer rounded-full border-2 border-transparent bg-lime-300 px-8 py-2 text-center font-serif font-medium capitalize text-lime-900 hover:border-lime-600 hover:bg-transparent hover:text-lime-900"
        >
          products
        </Link>
        <Link
          href="/dashboard/addProduct"
          className="w-full cursor-pointer rounded-full border-2 border-transparent bg-lime-300 px-8 py-2 text-center font-serif font-medium capitalize text-lime-900 hover:border-lime-600 hover:bg-transparent hover:text-lime-900"
        >
          add products
        </Link>
        <Link
          href="/dashboard/user"
          className="w-full cursor-pointer rounded-full border-2 border-transparent bg-lime-300 px-8 py-2 text-center font-serif font-medium capitalize text-lime-900 hover:border-lime-600 hover:bg-transparent hover:text-lime-900"
        >
          users
        </Link>
      </div>
    </div>
  );
};

export default DashboardNavbar;
