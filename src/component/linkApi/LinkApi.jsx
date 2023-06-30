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
      style: "mt-8 h-[14rem]",
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

  const [links, setLinks] = useState([]);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      setShowMessage(true);

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
      <div className="  bg-slate-200 h-13 px-32 mt-52  flex flex-col text-center  ">
        <Article
          className=""
          links={links}
          displayLink={displayLink}
          setDisplayLink={setDisplayLink}
        />

        <h1 className="text-black text-4xl font-extrabold mt-40 ">
          Advanced Statistics
        </h1>
        <p className="mt-4 text-grayish-violet text-lg  font-medium">
          Track how your links are performing across the web with <br /> our
          advanced statistics dashboard
        </p>

        <div className="flex flex-row my-20 justify-between relative w-full   ">
          <>
            <div className="h-2 bg-cyan w-full absolute top-[50%] -translate-y-[50%] left-0"></div>
            {Tracks.map((track) => (
              <div
                key={track.id}
                className={`bg-white p-6 relative w-[30%]  rounded-md  ${track.style}`}
              >
                <img
                  src={track.img}
                  alt="brand"
                  className="bg-black rounded-full object-fit p-2  absolute left-[1.5rem] top-[-2rem]  "
                />
                <h1 className="text-lg font-bold text-black flex  flex-col text-left my-2">
                  {track.title}
                </h1>
                <p className="text-left text-gray font-medium  ">
                  {track.description}
                </p>
              </div>
            ))}
          </>
        </div>

        <div className=" bg-red  ">
    <div
        className=" bg-dark-violet  absolute  -top-20  bg-cover bg-no-repeat bg-center rounded-lg inset-x-0   mx-32"
        style={{ backgroundImage: `url(${backdrop})` }}
      >
        <form className=" flex p-12 mt-auto mb-auto justify-center   ">
          <input
            className={`p-4 w-9/12 rounded-lg mr-4 text-base border-opacity-100 font-medium ${
              showMessage ? "placeholder-red border-red border-2" : ""
            }`}
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Shorten a link here..."
          />
          <button
            className="rounded-lg p-4 font-medium bg-cyan text-white hover:bg-teal-200 text-base w-2/12"
            type="submit"
            onClick={handleSubmit}
          >
            Shorten It!
          </button>
        </form>
        <span className="text-red italic absolute left-28  bottom-2">
        {showMessage && <p>Please add a link </p>}
        </span>
       
      </div>
    </div>
   

      </div>

      
    </div>
  );
};

export default LinkApi;
