import React from "react";
import Image from 'next/image'
import Skeezer from '../images/Skeezers.png'

const Bottom = () => {
  return <div className="flex text-MyWhite static items-center justify-end  ">
      <div className="absolute left-0">
        <Image   src={Skeezer} objectFit='contain' />
      </div>
      <div className="bg-primary pl-14 pr-48 pt-48 w-[52%]   ">
        <h3 className="text-2xl">Paul Smith</h3>
        <h1 className="text-6xl pt-28 pb-5">SIERRA LOW TOP SNEAKERS</h1>
        <ul className="text-xl  ">
            <li>Lining: Fabric 100%</li>
            <li>Outer: Fabric 100%</li>
            <li>Sole: Rubber 100%</li>
        </ul>
          <button className="mt-16 text-xl cursor-pointer font-normal
            py-4 rounded-full 
          border-solid border-2 border-MyWhite w-48 mb-44 leading-6 "
          >
          VIEW
          </button>
      </div>
  </div>;
};

export default Bottom;
