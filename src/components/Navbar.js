import { XIcon } from "@heroicons/react/solid";
import React from "react";
import Slide from "react-reveal/Slide";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  return (
    <header id="header">
      <div className="md:sticky hidden overflow-x-hidden md:block bg-orange-100 top-0 z-10">
        <Slide top cascade>
          <div className="w-full mx-auto  flex flex-wrap  px-10 flex-col md:flex-row items-center">
            <div className=" md:my-2  w-32 ">
              <a href="/" className=" ">
                <img
                  alt="Zara Khan Logo"
                  className=" block mx-auto"
                  id="logo"
                  src="./images/personal/logo.png"
                />
                <img
                  alt="Zara Khan Logo"
                  className="  h-14 hidden mx-auto"
                  id="logo-mini"
                  src="./images/personal/favicon.png"
                />
              </a>
            </div>
            <nav className="mx-auto text-gray-700 flex space-x-10 flex-wrap items-center text-base justify-center">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                className=" cursor-pointer hover:text-red-450 transition  px-3 py-1    transform hover:scale-110 ease-in-out duration-500 "
              >
                About
              </Link>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                className="cursor-pointer  hover:text-red-450 transition  px-3 py-1    transform hover:scale-110 ease-in-out duration-500 "
              >
                Experience
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                className="cursor-pointer  hover:text-red-450 transition  px-3 py-1    transform hover:scale-110 ease-in-out duration-500 "
              >
                Portfolio
              </Link>

              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                className="cursor-pointer hover:text-red-450 transition  px-3 py-1    transform hover:scale-110 ease-in-out duration-500 "
              >
                Contact
              </Link>
            </nav>
            <a
              href="./ZaraKhan-Resume.pdf"
              target="_blank"
              className="inline-flex my-6 md:my-0 rounded-full items-center bg-red-400 border-0 py-2 px-7 focus:outline-none   text-white hover:bg-red-450 transition ease-in-out duration-500 text-base "
            >
              Resume
            </a>
          </div>
        </Slide>
      </div>

      <div className="w-full md:hidden   flex">
        <div className="flex-1">
          <a href="/">
            <img
              alt="Zara Khan Logo"
              className="h-16 m-4"
              src="./images/personal/logo.png"
            />
          </a>
        </div>
        <img
          className=" burger h-8 m-6 fill-red-400"
          src="./Images/svg/menu.svg"
          alt=" "
        />
        <div hidden className=" menu h-full right-0 fixed bg-gray-700 w-auto">
          <XIcon className="cross h-6 float-right m-6  text-red-50 " />
          <ul className="text-red-50 my-16 mx-10 ">
            <li className="item py-2 ">
              <a href="#about">About</a>
            </li>
            <li className="item py-2 ">
              <a href="#experience">Experience</a>
            </li>
            <li className="item py-2 ">
              <a href="#projects">Portfolio</a>
            </li>
            <li className="item py-2 ">
              <a href="#contact">Contact</a>
            </li>
            <li className="item py-10 ">
              <a
                href="./ZaraKhan-Resume.pdf"
                target="_blank"
                className="  text-center my-10 w-40 rounded-full items-center bg-red-400 py-2 px-7 focus:outline-none  text-white hover:bg-red-450 transition ease-in-out duration-500 text-base "
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
