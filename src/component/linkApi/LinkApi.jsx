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
  const [inputValue, setInputValue] = useState('');
  const [buttonText, setButtonText] = useState("Copy!");
  const [showMessage, setShowMessage] = useState(false);
  const [color, setColor] = useState(false);
  const [displayLink, setDisplayLink] = useState(false);

  const [links, setLinks] = useState([ ]);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links))
  }, [links])


  

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!inputValue ) {
      setShowMessage(true);
      // <input placeholder = {style={color: "red"}} />
      // setColor("true");
      

      return;
    } else {
      setShowMessage(false);

      const shortenlink = async () => {
        const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${inputValue}`
        );
        const data =  await response.json();
        setLinks([...links, { originalLink: data.result.original_link , shortLink: data.result.full_short_link2}]);
        setDisplayLink(true)
       

      // setInputValue("");


      };

       shortenlink();
    }
 
  };


  const handleCopy = (links) => {
    navigator.clipboard.writeText(links.shortLink);
    setButtonText("Copied!");
  }


  const handleChange = (e) =>{
    setInputValue(e.target.value);
    setShowMessage(false)
  }

  return (
    <div
      className="relative top-20 mx-32 bg-dark-violet bg-cover bg-no-repeat bg-center h-40 rounded-lg  "
      style={{ backgroundImage: `url(${backdrop})` }}
    >
      <form className=" flex p-12 mt-auto mb-auto justify-center relative " >
        <input 
          className="  p-4 w-9/12 rounded-lg mr-4 text-base font-medium"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Shorten a link here..." style={{color: inputValue === '' ?"red" : ""
          }}
        />
        <button
          className="rounded-lg p-4 font-medium bg-cyan text-white hover:bg-teal-200 text-base w-2/12"
          type="submit"
          onClick={handleSubmit}
        >
          Shorten It!
        </button> 
      </form>
      <div className="absolute bottom-6 px-20 text-red italic ">
     {showMessage && <p>Please add a link </p>}

      </div>

      {displayLink && 
      
      <div className="mt-10">
       {links.map((link, index) =>(
       <div className="rounded-lg  bg-white mb-2 p-4  " >


        <ul className="  ">
          <li key={index} className="  flex flex-row justify-between items-center  " >
        
              <div class="basis-2/3 font-medium  ">{link.originalLink}</div>
              <div class="basis-2/9 text-cyan font-medium mr-2  ">{link.shortLink}</div>
               <button class="basis-1/9 rounded-lg px-6 py-2  font-medium bg-cyan text-white hover:bg-teal-200 focus:bg-slate-800" onClick={handleCopy }>{buttonText}</button>
          </li>
        </ul>
        </div>

        ))}

      
      </div>
      }
          

            
          
          

        
        
    </div>
  );
};

export default LinkApi;
