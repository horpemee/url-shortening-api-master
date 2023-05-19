import React, { useEffect, useState } from "react";
import backdrop from ".//background/bg-shorten-desktop.svg";

const LinkApi = () => {

  
  const getStoredLinks = () => {
    const links = localStorage.getItem("links")
    if (links) {
      return JSON.parse(localStorage.getItem("links"))
    }else{
      return []
    }
  }

  const [links, setLinks] = useState([]);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links))
  }, [links])


  const [inputValue, setInputValue] = useState('');
  const [buttonText, setButtonText] = useState("Copy!");

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!inputValue) {
      alert("Input is empty");
    } else {
      const shortenlink = async () => {
        const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${inputValue}`
        );
        const data =  await response.json();
        console.log(data);
        setLinks({ originalLink: data.result.original_link , shortLink: data.result.full_short_link2});
        // setLinks((prevLinks) => [...prevLinks, inputValue]);

        // setLinks(data.result.full_short_link2);

        setInputValue("");

      };

       shortenlink();
    }

  };


  const handleCopy = (links) => {
    navigator.clipboard.writeText(links.shortLink);
    setButtonText("Copied!");
  }


  return (
    <div
      className="relative top-20 mx-32 bg-dark-violet bg-cover bg-no-repeat bg-center h-40 rounded-lg  "
      style={{ backgroundImage: `url(${backdrop})` }}
    >
      <form className=" flex p-12 mt-auto mb-auto justify-center " >
        <input 
          className="  p-4 w-9/12 rounded-lg mr-4 text-base font-medium"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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

       <div className="rounded-lg  bg-white mt-10 p-4 " >
          <ul className="flex flex-row justify-between items-center  " >
              <li class="basis-2/3 font-medium  ">{links.originalLink}</li>
              <li class="basis-2/9 text-cyan font-medium mr-2  ">{links.shortLink}</li>
             <button class="basis-1/9 rounded-lg px-6 py-2  font-medium bg-cyan text-white hover:bg-teal-200 focus:bg-slate-800" onClick={handleCopy }>{buttonText}</button>
          </ul>
         </div>

            
          
          

        
        
    </div>
  );
};

export default LinkApi;
