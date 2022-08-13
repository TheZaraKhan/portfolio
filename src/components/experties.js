// import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";

import Fade from "react-reveal/Fade";

import Zoom from "react-reveal/Zoom";

export default function Experties() {
  return (
    <section id="skills" className="text-gray-700  ">
      <div className="  text-center">
        <Fade top duration={1000}>
          <h1 className="text-3xl md:-mt-0 -mt-20 font-medium title-font mb-4 text-center ">
            {" "}
            Things that I enjoy to do.
          </h1>
        </Fade>
      </div>
      <div className="w-3/4 mx-auto mt-16">
        <Zoom cascade duration={1000}>
          <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 ">
            <div className="bg-gray-100 p-6 cursor-pointer hover:bg-white rounded hover:rounded-sm hover:shadow-lg border-gray-100 border shadow transition ease-in-out duration-500">
              <Fade duration={500}>
                <img
                  src="./Images/personal/seo.png"
                  className=" h-16 mx-auto  mb-6 mt-2"
                  alt=""
                />
                <p className="text-gray-700 text-xl font-medium  ">
                  SEO(Search Engine Optimization)
                </p>
                <p className="text-gray-700  mt-3">
                  I employ best SEO practices like "Semantic HTML" and more on
                  websites and projects I work on to improve the site visibility
                  and rankings on Google.
                </p>
              </Fade>
            </div>
            <div className="bg-gray-100 p-6 cursor-pointer hover:bg-white rounded hover:rounded-sm hover:shadow-lg border-gray-100 border shadow transition ease-in-out duration-500">
              <Fade duration={500}>
                <img
                  src="./Images/personal/responsive.png"
                  className=" h-16 mx-auto  mb-6 mt-2"
                  alt=""
                />
                <p className="text-gray-700 text-xl font-medium  ">
                  Responsive Design
                </p>
                <p className="text-gray-700  mt-3">
                  I am passionate about responsiveness and making the websites I
                  build look good on different devices, browsers and cross
                  platforms using both "mobile first" approach and desktop
                  "media queries"
                </p>
              </Fade>
            </div>
            <div className="bg-gray-100 p-6  cursor-pointer hover:bg-white rounded hover:rounded-sm hover:shadow-lg border-gray-100 border shadow transition ease-in-out duration-500">
              <Fade duration={500}>
                <img
                  src="./Images/personal/code.png"
                  className=" h-16 mx-auto  mb-6 mt-2"
                  alt=""
                />
                <p className="text-gray-700 text-xl font-medium  ">
                  Reusable & Minimal code
                </p>
                <p className="text-gray-700  mt-3">
                  I try my best to write my code as minimal and efficient as
                  possible by using tools like CSS Variables and writing custom
                  utility classes. And create reusable components for future
                  use.
                </p>
              </Fade>
            </div>
            <div className="bg-gray-100 p-6 cursor-pointer hover:bg-white rounded hover:rounded-sm hover:shadow-lg border-gray-100 border shadow transition ease-in-out duration-500">
              <Fade duration={500}>
                <img
                  src="./Images/personal/design.png"
                  className=" h-16 mx-auto  mb-6 mt-2"
                  alt=""
                />
                <p className="text-gray-700 text-xl font-medium  ">
                  Great UI/UX
                </p>
                <p className="text-gray-700  mt-3">
                  I value simple content structure, clean design patterns, and
                  thoughtful interactions. And have a strong eye for designs,
                  which allows me to transform templates into pixel-perfect code
                  while making it accessible to all users.
                </p>
              </Fade>
            </div>
          </div>
        </Zoom>
      </div>
      <div className="w-3/5  mx-auto text-center">
        <Fade top duration={1000}>
          <h1 className="text-3xl font-medium title-font mb-4 mt-20 ">
            Technologies and tools I use.
          </h1>
        </Fade>
      </div>
      <Zoom cascade duration={1000}>
        <div className=" mt-20 sm:w-3/4 w-full px-4 md:px-0 mx-auto grid   md:grid-cols-4 grid-cols-2 md:gap-x-10 md:gap-y-10 gap-x-5 gap-y-10 ">
          <div className="bg-gray-100 p-4  hover:bg-red-400 hover:bg-opacity-70 hover:text-white rounded hover:rounded-sm hover:shadow-lg   shadow transition ease-in-out duration-500">
            <p className=" text-center"> HTML5</p>
          </div>
          <div className="bg-gray-100 p-4  hover:bg-red-400 hover:bg-opacity-70 hover:text-white rounded hover:rounded-sm hover:shadow-lg   shadow transition ease-in-out duration-500">
            <p className=" text-center"> CSS3</p>
          </div>
          <div className="bg-gray-100 p-4  hover:bg-red-400 hover:bg-opacity-70 hover:text-white rounded hover:rounded-sm hover:shadow-lg   shadow transition ease-in-out duration-500">
            <p className=" text-center"> JavaScript</p>
          </div>
          <div className="bg-gray-100 p-4  hover:bg-red-400 hover:bg-opacity-70 hover:text-white rounded hover:rounded-sm hover:shadow-lg   shadow transition ease-in-out duration-500">
            <p className=" text-center"> jQuery</p>
          </div>
          <div className="bg-gray-100 p-4  hover:bg-red-400 hover:bg-opacity-70 hover:text-white rounded hover:rounded-sm hover:shadow-lg   shadow transition ease-in-out duration-500">
            <p className=" text-center"> React</p>
          </div>
          <div className="bg-gray-100 p-4  hover:bg-red-400 hover:bg-opacity-70 hover:text-white rounded hover:rounded-sm hover:shadow-lg   shadow transition ease-in-out duration-500">
            <p className=" text-center">TailwindCSS</p>
          </div>
          <div className="bg-gray-100 p-4  hover:bg-red-400 hover:bg-opacity-70 hover:text-white rounded hover:rounded-sm hover:shadow-lg   shadow transition ease-in-out duration-500">
            <p className=" text-center"> Bootstrap</p>
          </div>
          <div className="bg-gray-100 p-4  hover:bg-red-400 hover:bg-opacity-70 hover:text-white rounded hover:rounded-sm hover:shadow-lg   shadow transition ease-in-out duration-500">
            <p className=" text-center">Github</p>
          </div>
        </div>
      </Zoom>
      <div className="w-2/5 mx-auto text-center">
        <Fade top duration={1000}>
          <h1 className="text-3xl font-medium title-font mb-4 mt-20 ">
            Design
          </h1>
        </Fade>
      </div>
      <Zoom cascade duration={1000}>
        <div className=" mt-20 sm:w-3/4 w-full px-4 md:px-0 mx-auto grid   md:grid-cols-4 grid-cols-2 gap-10">
          <div className="bg-gray-100 p-4  hover:bg-red-400 hover:bg-opacity-70 hover:text-white rounded hover:rounded-sm hover:shadow-lg   shadow transition ease-in-out duration-500">
            <p className=" text-center"> Photoshop</p>
          </div>
          <div className="bg-gray-100 p-4  hover:bg-red-400 hover:bg-opacity-70 hover:text-white rounded hover:rounded-sm hover:shadow-lg   shadow transition ease-in-out duration-500">
            <p className=" text-center"> Illustrator</p>
          </div>
          <div className="bg-gray-100 p-4  hover:bg-red-400 hover:bg-opacity-70 hover:text-white rounded hover:rounded-sm hover:shadow-lg   shadow transition ease-in-out duration-500">
            <p className=" text-center"> Sketch</p>
          </div>
          <div className="bg-gray-100 p-4  hover:bg-red-400 hover:bg-opacity-70 hover:text-white rounded hover:rounded-sm hover:shadow-lg   shadow transition ease-in-out duration-500">
            <p className=" text-center"> Figma</p>
          </div>
        </div>
      </Zoom>
    </section>
  );
}
