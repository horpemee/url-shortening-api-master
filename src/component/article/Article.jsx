 
import React from "react";
import { useState } from "react";
// import {shortenlink} from "../linkApi/LinkApi";
// import LinkApi from "../linkApi/LinkApi";

const Article = ({
  links,
  setLinks,
  showMessage,
  inputValue,
  displayLink,
  setDisplayLink,
}) => {
  const [buttonText, setButtonText] = useState("Copy!");

  const handleCopy = (links) => {
    navigator.clipboard.writeText(links.shortLink);
    setButtonText("Copied!");
  };

  return (
    <div className="mt-24 "  >
      {displayLink && (
        <div  >
          <ul >
            {links.map((link, index) => (
              <li
                key={index}
                className=" overflow-hidden rounded-lg  px-4 py-3 mb-2 bg-white flex flex-row justify-between items-center  "
              >
                <div class=" font-medium  ">{link.originalLink}</div>
                <div class="basis-2/9 text-cyan font-medium mr-2  ">
                  {link.shortLink}
                </div>
                <button
                  class="basis-1/9 rounded-lg px-6 py-2  font-medium bg-cyan text-white hover:bg-teal-200 focus:bg-slate-800"
                  onClick={handleCopy}
                >
                  {buttonText}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    
    </div>
    // shortenlink();
  );
};
export default Article;
