 
import React from "react";
import { useState } from "react";
 

const Article = ({
  links,
  setLinks,
  showMessage,
  inputValue,
  displayLink,
  setDisplayLink,
}) => {
  const [buttonText, setButtonText] = useState(null);

  const handleCopy = (shortLink, index) => {
    navigator.clipboard.writeText(shortLink);
  setButtonText(index);

  };

  

  return (
    <div className=" mt-36  lg:mt-10 xl:mt-20"  >
      {displayLink && (
        <div  >
            {links.map((link, index) => (
            <ul className="" key={index} >

              <li
                key={index}
                className=" overflow-hidden   rounded-lg py-2   mb-2 bg-white  flex flex-col  items-left text-start  lg:items-center lg:flex-row  lg:px-4 lg:py-3 lg:justify-between"
              >

                <div key={index} class=" px-4 py-3 border-b-2 border-gray text-normal font-medium lg:border-none">{link.originalLink}</div>
                <div key={index} class=" px-4 py-3 basis-2/9 text-cyan font-medium mr-2  ">
                  {link.shortLink}
                </div>
                <button key={index}
                  class="basis-1/9 rounded-lg px-6 py-2 mx-4  font-medium bg-cyan text-white hover:bg-teal-200 focus:bg-slate-800"
                  onClick={ () => {
                    handleCopy(link.shortLink, index);
                  }} 
                >
                  {buttonText === index ? "Copied!" : "Copy"}
                </button>
              </li>
          </ul>

            ))}
        </div>
      )}

    
    </div>
  );

  
};
export default Article;
