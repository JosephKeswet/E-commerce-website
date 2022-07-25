import React from "react";

const Inputs = ({type,placeholder,className}) => {
  return <div>
    <input className={className} type={type} placeholder={placeholder} />
  </div>;
};

export default Inputs;


