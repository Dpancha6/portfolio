import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-gradient-to-b from-black via-black to-gray-800  pt-20"
    >
      <div className="max-w-screen-lg mx-auto grid sm:grid-cols-3 items-center justify-center h-full px-4">
        <div className="sm:col-span-2 text-justify h-full">
          <h2 className="pt-10 sm:text-md font-medium text-white">
            Hi, I'm
          </h2>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">Darshan Panchal
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
          A 
          <h2 className="text-xl sm:text-3xl font-bold text-white inline"> Full Stack Developer 
          </h2> with a passion for building scalable web applications and working on challenging projects that require me to step out of my comfort zone. I thrive on transforming ideas into tangible realities.
{/*           
          I have 3 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, JavaScript, Tailwind and MongoDB. */}
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className=" sm:col-span-1 rounded-xl "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
