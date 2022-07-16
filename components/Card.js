import React, { useEffect, useState } from "react";
import Image from 'next/image'
// import shoe from '../images/Rectangle 6.png'
import { PlusCircleIcon } from '@heroicons/react/solid'

const Card = ({product}) => {
  const Helper = () => {
    console.log("I was clicked")
  } 
  
  const BtnHelper = () => {
    console.log("Button was clicked")
  } 

  return <div className="flex overflow-scroll overflow-y-hidden   scrollbar-hide font-Ko text-primary">
  
 
      {product?.map((shoes) => (  
        <div className="flex items-end px-3 pb-5 mx-4 cursor-pointer " key={shoes.id}>
          <div className=" w-80">
            <Image   src={shoes.img} onClick={Helper}  objectFit='contain' width={400} height={400}/>
            <h3 className="text-2xl animate-bounce" onClick={Helper}>{shoes.shoeBrand}</h3>
            <h4 className="text-xl " onClick={Helper}>{shoes.shoeName}</h4>
            <div className="flex justify-between">
              <h3 className="my-6 text-3xl" onClick={Helper}>$ {shoes.price}</h3>
              <PlusCircleIcon className="w-10 pl-2  hover:animate-pulse cursor-pointer" onClick={BtnHelper} />
            </div>
          </div>
       </div>
      ))
  }
  </div>;
};


export default Card;

