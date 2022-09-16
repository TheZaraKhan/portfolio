import React from "react";

import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <section id="about">
      <p className="py-8"></p>

      <div className="text-gray-700 px-4 md:px-0  bg-white">
        <Fade top duration={1000}>
          {" "}
          <h1 className="md:text-6xl mt-16 text-4xl font-medium text-center title-font mb-4 ">
            About Me
          </h1>
        </Fade>

        <div className="  flex  flex-wrap  w-full px-4 md:px-0 md:w-5/6 sm:w-2/3 items-center  md:mt-24 mt-16 mx-auto  ">
          <Fade left cascade duration={900}>
            {" "}
            <div className="md:flex-1 flex items-center  flex-initial relative  w-full  mb-20">
              <div className="z-20  relative overflow-hidden w-2/3 mx-auto border-8 border-white  shadow-lg hover:shadow-xl  transition ease-in-out duration-700 rounded-full">
                <div className="frame">
                  {" "}
                  <img
                    className=" inner-img  w-full h-full absolute object-cover"
                    alt="hero"
                    src="./Images/personal/zara.jpg"
                  />
                </div>
              </div>
              <div className="absolute w-full top-0 z-10 mx-auto">
                <img
                  className="w-full "
                  alt="hero"
                  src="./Images/personal/img-bg.png"
                />
              </div>
            </div>
          </Fade>
          <Fade right cascade duration={1000}>
            <div className="md:flex-1   md:pl-0 flex-initial w-full flex h-full mb-20">
              <p className="lg:w-5/6 text-xl leading-relaxed text-left  se">
                <span className="font-medium text-xl">Hello!</span> My name is
                Zara and I enjoy creating things that live on the internet,
                whether that be websites, applications, or anything in between.
                As a Front-End developer, I bridge the gap between engineering
                and design. I always have a keen eye for aesthetics to create a
                beautiful product.
                <br></br>
                <br></br>
                My goal is to build applications that are scalable and efficient
                under the hood while providing engaging, pixel-perfect user
                experiences.
                <br></br>
                <br></br>
                My main focus these days is building accessible and digital
                experiences at{" "}
                <a
                  href="https://www.linkedin.com/company/advanlogix/"
                  className="hover:underline text-red-400   transition ease-in-out duration-500 cursor-pointer"
                >
                  Advanlogix Solutions
                </a>{" "}
                for a variety of clients.
                <br></br>
                <br></br>
                <br></br>
                {/* When I'm not in front of a computer screen, I'm probably baking,
            visiting my mum, or just chilling with my baby. */}
              </p>
            </div>{" "}
          </Fade>
        </div>
      </div>
    </section>
  );
}
