import React from "react";
import Fade from "react-reveal/Fade";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
    e.preventDefault();
  }

  return (
    <section id="contact" className="sm:pt-0 pt-16">
      <p className="md:py-16  py-10"></p>
      <Fade top duration={1000}>
        <h1 className="md:text-6xl text-4xl font-medium text-center text-gray-700 title-font  md:mb-24 mb-12  ">
          Get In Touch
        </h1>
      </Fade>
      <Fade duration={200}>
        <div className="w-full md:w-3/4  mx-auto grid md:grid-cols-2 grid-cols-1 content-center    ">
          <div className="md:flex-1 md:order-2 overflow-hidden flex-initial">
            <form
              netlify
              name="contact"
              onSubmit={handleSubmit}
              method="POST"
              className=" flex bg-red-50 p-10 flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
            >
              <Fade right cascade duration={1000}>
                <div>
                  <h2 className="text-gray-700 md:text-4xl text-2xl mb-1 font-medium title-font">
                    Let's Talk
                  </h2>
                  <p className="leading-relaxed text-gray-700 mb-5">
                    Whether you have a question or want to discuss a Project, My inbox is
                    always open.
                    {/* Have a project in mind? Contact. */}
                  </p>
                  <div className="relative mb-4">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-white rounded border border-gray-300 focus:border-red-300 focus:ring-1 focus:ring-red-300 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-white rounded border border-gray-300 focus:border-red-300 focus:ring-1 focus:ring-red-300 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-300 ease-in-out"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full text-sm bg-white rounded border border-gray-300 focus:border-red-300 focus:ring-1 focus:ring-red-300  outline-none text-gray-700 py-1 px-3 transition-colors duration-300 ease-in-out h-32 resize-none leading-6"
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-center rounded-full items-center bg-red-400 border-0 py-2 px-7 w-36 focus:outline-none text-white hover:bg-red-450 transition ease-in-out duration-500 text-base"
                  >
                    Submit
                  </button>
                </div>
              </Fade>
            </form>
          </div>

          <div className="md:flex-1 flex items-center flex-initial md:order-1  bg-gray-700 h-full w-full">
            <Fade left cascade duration={1000}>
              <div className="w-auto mx-auto">
                <div className="grid mt-10  md:grid-cols-1 grid-cols-4 w-auto mx-auto">
                  <a
                    href="https://www.linkedin.com/in/thezarakhan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="svg mx-auto my-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                    >
                      <path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" />
                      <path d="m.396 7.977h4.976v16.023h-4.976z" />
                      <path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/TheZaraKhan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="svg mx-auto my-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/zara_mustafa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="svg mx-auto my-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                    >
                      <path d="m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z" />
                      <path d="m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z" />
                    </svg>
                  </a>

                  <a
                    href="https://codepen.io/Zaraa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="svg mx-auto my-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                    >
                      <path d="m.455 16.512 10.969 7.314c.374.23.774.233 1.152 0l10.969-7.314c.281-.187.455-.522.455-.857v-7.312c0-.335-.174-.67-.455-.857l-10.969-7.313c-.374-.23-.774-.232-1.152 0l-10.969 7.313c-.281.187-.455.522-.455.857v7.312c0 .335.174.67.455.857zm10.514 4.528-8.076-5.384 3.603-2.411 4.473 2.987zm2.062 0v-4.808l4.473-2.987 3.603 2.411zm8.907-7.314-2.585-1.727 2.585-1.728zm-8.907-10.767 8.076 5.384-3.603 2.411-4.473-2.987zm-1.031 6.602 3.643 2.438-3.643 2.438-3.643-2.438zm-1.031-6.602v4.808l-4.473 2.987-3.603-2.411zm-8.906 7.314v-.001l2.585 1.728-2.585 1.728z" />
                    </svg>
                  </a>
                </div>
                <p className="text-red-100  hover-fill text-sm my-10">
                  <svg
                    className=" fill-red-100  transition ease-in-out duration-500   mx-auto inline-block my-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" />
                  </svg>
                  <a
                    class=" transition ease-in-out duration-500   pl-2 inline-block cursor-pointer"
                    href="mailto:ZaraTariqKhan@gmail.com"
                  >
                    Zaratariqkhan@gmail.com
                  </a>
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </Fade>
    </section>
  );
}
