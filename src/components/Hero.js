import React from "react";

import Slide from "react-reveal/Slide";

import Fade from "react-reveal/Fade";

export default function Hero() {
  return (
    <section id="hero" class=" ">
      <div className=" ">
        <Fade>
          <div className="w-full px-4  md:px-0  mx-auto flex items-center min-h-screen  flex-wrap bg-none md:bg-hero bg-contain   bg-right-bottom hero bg-no-repeat">
            <div className=" lg:pl-24 md:pl-16 text-left  mt-32 md:mt-0 md:mx-0 mx-auto md:mb-0  ">
              <Slide bottom cascade duration={1000}>
                <div>
                  <h1 className="mb-8  md:mt-0 md:text-7xl text-4xl font-medium text-gray-700 ">
                    Hi, I'm Zara.
                  </h1>
                  <h3 className="title-font text-gray-700 lg:text-5xl  leading-10 md:text-4xl text-3xl mb-4  ">
                    A design-minded Developer <br></br>
                    focused on building beautiful <br></br>
                    interfaces & experiences.
                    {/* A web designer who care, build relationships, have industry experience, and create websites that catch the eye. */}
                    {/* <br className="hidden  " />I love to build amazing apps and websites. */}
                  </h3>
                </div>
              </Slide>
              <Slide top duration={1000}>
                <div className="flex mt-10  justify-start  ">
                  <a
                    href="#contact"
                    className="inline-flex py-2 md:px-8 px-4 focus:outline-none text-lg rounded-full border-2 border-red-400 bg-red-400 hover:border-red-450 hover:bg-red-450 text-white transition ease-in-out duration-500"
                  >
                    Hire Me
                  </a>
                  <a
                    href="#projects"
                    className="ml-4 inline-flex py-2 md:px-6 px-3 focus:outline-none text-lg rounded-full border-2 border-red-400 bg-none hover:border-red-450 hover:bg-red-450 text-red-400 hover:text-white transition ease-in-out duration-500"
                  >
                    See My Past Work
                  </a>
                </div>
              </Slide>
            </div>

            {
              <Fade right duration={1000}>
                <div className="w-full md:hidden">
                  <img
                    className="w-full"
                    alt="hero"
                    src="./Images/personal/portfolio-hero3.png"
                  />
                </div>{" "}
              </Fade>
            }
          </div>
        </Fade>
      </div>
      <div className="w-full">
        {/* <img
          className="w-full md:-mb-32"
          alt="hero"
          src="./Images/personal/hero-bottom.png"
        /> */}
      </div>
    </section>
  );
}
