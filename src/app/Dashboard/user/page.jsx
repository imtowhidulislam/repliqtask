"use client";
import { ButtonOutlined } from "@/app/Util/ButtonOutlined";
import CartContextProvider from "@/app/context/cartContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import Empty from "../../../../public/emptyUser.svg";
import { toast } from "react-hot-toast";

const page = () => {
  const { user } = useContext(CartContextProvider);
  const [users, setUsers] = user;

  const handleRemoveUser = (id) => {
    try {
      setUsers((currValue) => currValue.filter((item) => item.userId !== id));
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error("User not found");
    }
  };

  return (
    <div>
      {users.length <= 0 ? (
        <div className="grid place-items-center overflow-hidden">
          <div className="animate-moveInLeft">
            <Image src={Empty} alt={user} width={400} height={400} />
          </div>
          <div className="grid place-items-center">
            <h2 className="py-4 text-2xl font-bold">
              User not found, Create first.
            </h2>
            <Link href="/Register">
              <ButtonOutlined btnText="Create user" />
            </Link>
          </div>
        </div>
      ) : (
        users.map((user) => {
          const { userId: id, fName, email, file: image } = user;
          return (
            <div
              key={id}
              className="mb-2 flex flex-col flex-wrap items-center justify-center gap-2 rounded-md border-2 border-gray-200 p-4 shadow-lg sm:flex-row sm:justify-between sm:gap-1"
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
                {fName}
              </p>
              <p className="break-words text-small font-bold capitalize sm:text-base sm:font-light">
                {email}
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => handleRemoveUser(id)}
                  className="w-max cursor-pointer rounded-full border-2 border-lime-800 bg-transparent px-4 py-2 text-sm font-bold capitalize text-lime-800 transition-all duration-200 ease-in-out hover:border-transparent hover:bg-lime-900 hover:text-lime-100 hover:drop-shadow-md"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default page;
