"use client";
import React, { useEffect, useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaCopyright } from "react-icons/fa";
import Link from "next/link";
// import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagramSquare, FaCopyright } from 'react-icons/fa';

const Footer = () => {
  const [footerForm, setFooterForm] = useState({ email: "" });
  const [newsletterUser, setNewsletterUser] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFooterForm({ ...footerForm, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (footerForm.email) {
      const id = new Date().getTime().toString();
      const newUser = { ...footerForm, id };
      const updatedData = [...newsletterUser, newUser];
      setNewsletterUser(updatedData);

      setFooterForm({ email: "" });
    }
  };

  // !! Storing Newsletter Data into the localStorage.
  useEffect(() => {
    localStorage.setItem("newsletteruser", JSON.stringify(newsletterUser));
  }, [newsletterUser]);

  return (
    <div className="bg-lime-700 px-4 py-8">
      <div className="container">
        <div className="text-6xl flex items-center justify-start mb-10 text-gray-100">
          <div>
            <Link href="/" className="cursor-pointer">
              <h2 className="uppercase text-white text-2xl font-bold flex gap-2 items-center">
                <span className="text-lime-400 text-4xl">
                  <RiShoppingBagFill />
                </span>
                repliq
              </h2>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-footerLayout gap-12">
          <div className="footerStyle">
            <h2>Privacy Policy</h2>
            <p>Terms & Condition</p>
            <p>contacts</p>
            <p>support</p>
            <p>feedback</p>
          </div>
          <div className="footerStyle">
            <h2>Navigate</h2>
            <div className="flex items-center gap-2">
              <Link
                className="hover:text-gray-200 transition-all duration-200 ease-in-out"
                href="/"
              >
                Home
              </Link>
              <Link
                className="hover:text-gray-200 transition-all duration-200 ease-in-out"
                href="/Product"
              >
                Product
              </Link>
              <Link
                className="hover:text-gray-200 transition-all duration-200 ease-in-out"
                href="/dashboard"
              >
                Dashboard
              </Link>
            </div>
            <p>
              <span>email : </span>repliq@gmail.com
            </p>
          </div>
          <div className="footerStyle">
            <h2>Follow Us</h2>

            <div className="flex text-2xl text-gray-300 gap-2 mt-2">
              <FaFacebookSquare className="footerSocialIcon" />
              <FaTwitterSquare className="footerSocialIcon" />
              <FaInstagramSquare className="footerSocialIcon" />
              <FaLinkedin className="footerSocialIcon" />
            </div>
          </div>
        </div>
        <div className="mt-12 capitalize text-gray-300 flex items-center justify-start gap-1">
          <FaCopyright className="text-small sm:text-base" />
          <p className="font-light text-small sm:text-base">
            copyright <span>2023. </span>all rights reserve to Repliq
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
