"use client";
import { useState } from "react";
import Image from "next/image";
import { RiH2 } from "react-icons/ri";
import ImageOne from "../../public/imageOne.svg";
// import ImageTwo from "../..public/imageTwo.svg"
import Link from "next/link";
import TopratedProduct from "./components/TopratedProduct";
import { useQuery } from "@tanstack/react-query";
import Subscribe from "./components/Subscribe";
import { HiOutlineArrowCircleUp } from "react-icons/hi";

export default function Home() {
  const [product, setProduct] = useState([]);

  return (
    <>
      <div>
        <div>
          <div className="bg-lime-200 py-12">
            <header className="container grid grid-cols-homepageLayoutHero1 place-items-center gap-12 md:gap-16 lg:gap-20">
              <div>
                <h2 className="capitalize text-4xl sm:text-5xl lg:text-7xl font-bold font-mono text-left text-lime-950">
                  shopping and department store
                </h2>
                <p className="text-sm sm:text-base md:text-base text-lime-800 py-4 text-left">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolores eaque eligendi animi accusamus voluptatibus cupiditate
                  consequuntur doloribus repudiandae adipisci temporibus?
                </p>
                <p className="text-sm sm:text-base md:text-base text-lime-800 pb-4 text-left">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit, voluptatem!
                </p>
                <div className="">
                  <li className=" flex justify-start w-max bg-lime-600 text-lime-100 hover:bg-lime-100 hover:text-lime-600 transition-colors ease-in-out duration-300 font-bold cursor-pointer py-3 px-8 rounded-full">
                    <Link href="/Product">
                      <button className="capitalize flex items-center justify-between gap-2">
                        shop now{" "}
                        <HiOutlineArrowCircleUp className="text-xl animate-pulse" />{" "}
                      </button>
                    </Link>
                  </li>
                </div>
              </div>
              <div className="md:m-8 lg:m-12">
                <Image src={ImageOne} alt="" width={700} height={700} />
              </div>
            </header>
          </div>
          <TopratedProduct />
          <Subscribe />
        </div>
      </div>
    </>
  );
}
