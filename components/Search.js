import React from "react";

const Search = () => {
  return <div className="flex justify-center my-7 font-Ko">
    <input type="text" className="border-solid border-2 border-black rounded-l-3xl w-7/12 h-12 px-6" />
    <button className="border-solid border-2 border-black 
    rounded-r-3xl mx-2 w-52 text-xl transition-all ease-in duration-100  hover:bg-primary hover:text-MyWhite"
    >SEARCH
    </button>
  </div>;
};

export default Search;
