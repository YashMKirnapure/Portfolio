import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareReddit } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import photo from "../../public/photo.avif";

const Home = () => {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to my feed!</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              {/* <span className="text-rose-500 font-bold">Developer</span> */}
              <ReactTyped
              className="text-rose-500 font-bold"
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt
              veniam aliquam mollitia eligendi minima tempora perferendis odio
              earum impedit accusantium similique aliquid doloremque nisi modi
              quisquam ipsam dolorum natus, soluta provident repellendus magni.
              Officia impedit eum laboriosam.
            </p>
            <br />

            {/* Social Media Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
            <div className="space-y-1">
              <h1 className="font-bold">Available On</h1>
              <ul className="flex space-x-2">
                <li>
                    <a href="https://www.facebook.com/" target="_blank">
                  <FaFacebookSquare className="text-2xl cursor-pointer" />
                  </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedin className="text-2xl cursor-pointer" />
                  </a>
                </li>
                <li>
                    <a href="https://www.reddit.com/" target="_blank">
                  <FaSquareReddit className="text-2xl cursor-pointer" />
                  </a>
                </li>
                <li>
                    <a href="https://discord.com/" target="_blank">
                  <IoLogoDiscord className="text-2xl cursor-pointer" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Skills */}
          <div className="space-y-2">
            <h1 className="font-bold ">Currently working on</h1>
            <div className="flex space-x-5">
                <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                <GrReactjs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
            </div>
          
          </div>
          </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 md:ml-48 md:mt-14 mt-8 order-1">
            <img src={photo} className='rounded-full md:w-[540px] md:h-[540px]' alt="" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
 