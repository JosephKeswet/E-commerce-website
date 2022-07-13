import React from "react";
import { ChevronRightIcon } from '@heroicons/react/solid'
import { ChevronDownIcon } from '@heroicons/react/solid'
import CardData from "../Data/CardData";
import Card from "./Card";

// export async function getStaticProps(){
  // const CLIENT_ID = "b7947c405d994b009218fe4918a35d86";
  // const Redirect_URL = "http://localhost:3000"
  // const Auth_Endpoint = "https://accounts.spotify.com/authorize"
  // const Response_Type = "token"
//   const res = await fetch('	https://api.spotify.com/v1/albums/{b7947c405d994b009218fe4918a35d86}',{
//     headers:{
//       Authorixation
//     }
//   })
//   const tracks = await res.json()

//   return{
//     props:{
//       tracks,
//     }
//   }
// }

const Categories = () => {
  
  return <div className="flex justify-between mx-28  font-Ko text-primary relative">
    <div>

      <h1 className="text-6xl">CATEGORIES</h1>
      <div className="flex">
        <ul>
            <li className="w-[275px] cursor-pointer ">BRAND</li>
            <li className="w-[275px] cursor-pointer">COLOR </li>
            <li className="w-[275px] cursor-pointer">PRICE </li>
            <li className="w-[275px] cursor-pointer">SIZE </li>
        </ul>
        <div>
          <ChevronDownIcon className='w-5  pb-1 cursor-pointer'/>
          <ChevronDownIcon className='w-5  pb-1 cursor-pointer'/>
          <ChevronDownIcon className='w-5  pb-1 cursor-pointer'/>
          <ChevronDownIcon className='w-5  pb-1 cursor-pointer'/>
        </div>
      </div>
    </div>

    <div className=" flex-col items-center leading-6 cursor-pointer overflow-hidden">

        <div className="flex justify-end items-center">
          <p className='text-xl'>VIEW ALL</p>
          <ChevronRightIcon className='w-8 '/>
        </div>

        <Card product={CardData}/>
    </div>

  </div>;
};

export default Categories;


