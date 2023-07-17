import React, { useEffect, useState } from "react";
import backdrop from ".//background/bg-shorten-desktop.svg";
import Brand from "../linkApi/background/icon-brand-recognition.svg";
import Record from "../linkApi/background/icon-detailed-records.svg";
import Custom from "../linkApi/background/icon-fully-customizable.svg";
import Article from "../article/Article";

// import Record from "./icons/icon-brand-recognition.svg"
// import Record from "./icons/icon-detailed-records.svg"
// import Custom from "./icons/icon-fully-customizable.svg"
const LinkApi = () => {
  const Tracks = [
    {
      id: 0,
      img: Brand,
      title: "Brand Recognition",
      description:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
      style: "h-[14rem]",
    },

    {
      id: 1,
      img: Record,
      title: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better situations",
      style: "mt-16 lg:mt-8 h-[14rem]",
    },

    {
      id: 2,
      img: Custom,
      title: "Fully Customization",
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audieence engagement.",
      style: "mt-16 h-[14rem]",
    },
  ];

  const getStoredLinks = () => {
    const links = localStorage.getItem("links");
    if (links) {
      return JSON.parse(localStorage.getItem("links"));
    } else {
      return [];
    }
  };
  const [inputValue, setInputValue] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [displayLink, setDisplayLink] = useState(false);

  const [links, setLinks] = useState("");

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if at the onclick of swubmit button, if the input value is empty, then show the error message,
    if (!inputValue) {
    setShowMessage(true) 

      return;
    } else {
      setShowMessage(false);

      const shortenlink = async () => {
        const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${inputValue}`
        );
        const data = await response.json();
        setLinks([
          ...links,
          {
            originalLink: data.result.original_link,
            shortLink: data.result.full_short_link2,
          },
        ]);
        setDisplayLink(true);

        setInputValue("");
      };

      shortenlink();
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setShowMessage(false);
  };

  return (
    <div className="relative ">
      <div className="  bg-slate-200 h-13 px-8 mt-40  flex flex-col text-center lg:mt-40 lg:px-18 xl:px-32">
        <Article
          className=""
          links={links}
          displayLink={displayLink}
          setDisplayLink={setDisplayLink}
        />

        <h1 className="text-black text-4xl font-extrabold mt-20 lg:mt-30 xl:mt-40">
          Advanced Statistics
        </h1>
        <p className="mt-4 text-grayish-violet text-lg  font-medium">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>

        <div className=" w-full flex flex-col justify-between text-center  my-20  relative   lg:flex-row   ">
          <>
            <div className="lg:h-2 bg-cyan lg:w-full  lg:absolute lg:top-[50%] lg:-translate-y-[50%] left-0"></div>
            <div className="lg:hidden">
            <div className="h-full w-2 bg-cyan absolute left-[50%]  "></div>
            </div>
            {Tracks.map((track) => (
              <div
                key={track.id}
                className={`bg-white p-6 relative  rounded-md lg:p-3 xl:p-6 lg:w-[30%]  ${track.style}`}
              >
               <div className="flex justify-center ">
                <img
                  src={track.img}
                  alt="brand"
                  className="bg-black rounded-full object-fit  p-2  absolute top-[-2rem] lg:left-[2.5rem] "
                />
                </div>
                <h1 className="text-lg font-bold text-black flex  flex-col text-center  my-2 lg:text-left">
                  {track.title}
                </h1>
                <p className="text-center text-gray font-medium lg:text-left ">
                  {track.description}
                </p>
              </div>
            ))}
          </>
        </div>

        <div className=" bg-red  ">
          <div
            className=" bg-dark-violet  absolute  -top-20  bg-cover bg-no-repeat bg-center rounded-lg inset-x-0 mx-8 lg:mx-18 xl:mx-32"
            style={{ backgroundImage: `url(${backdrop})` }}
          >
            <form className=" p-6  justify-center flex flex-col lg:flex lg:flex-row xl:items-center xl:p-10">
              <input
                className={`p-4  rounded-lg mb-10  text-base border-opacity-100 font-medium lg:w-9/12 lg:mr-4 lg:mb-0 ${
                  showMessage ? "placeholder-red border-red border-2" : "border-black"
                }`}
                type="text"
                value={inputValue}
                onChange={handleChange}
                onFocus= {() => setShowMessage(false)}
                placeholder="Shorten a link here..."
              />

                

              <button
                className="rounded-lg p-4 font-medium bg-cyan text-white hover:bg-teal-200 text-base lg:w-3/12"
                type="submit"
                onClick={handleSubmit}
              >
                Shorten It!
              </button>
            </form>
            <span className="text-red italic absolute left-8 top-20 lg:left-10 lg:top-28  ">
              {showMessage && <p>Please add a link </p>}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkApi;
