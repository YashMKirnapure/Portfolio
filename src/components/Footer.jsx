import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareReddit } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div className="flex flex-col items-center justify-center">
                <div className="flex space-x-4">
                    <FaFacebookSquare size={24}/>
                    <FaLinkedin size={24}/>
                    <FaSquareReddit size={24}/>
                    <IoLogoDiscord size={24}/>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                    <p className="text-sm">
                        &copy; 2024 Yash Kirnapure. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
