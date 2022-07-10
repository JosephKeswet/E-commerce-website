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

const Categories = ({tracks}) => {
  console.log(tracks)
  return <div className="flex justify-between mx-28 pt-60 font-Ko text-primary relative">
    <div>
        <h1 className="text-6xl">CATEGORIES</h1>
        <ul>
            <li className="w-[275px]">BRAND  <ChevronDownIcon className='w-5 inline-block pb-1'/></li>
            <li className="w-[275px]">COLOR <ChevronDownIcon className='w-5 inline-block pb-1'/></li>
            <li className="w-[275px]">PRICE <ChevronDownIcon className='w-5 inline-block pb-1'/></li>
            <li className="w-[275px]">SIZE <ChevronDownIcon className='w-5 inline-block pb-1'/></li>
        </ul>
    </div>
    <div className="flex text-right items-center leading-6 cursor-pointer absolute left-[1319px]">
        <p className='text-xl'>VIEW ALL</p>
        <ChevronRightIcon className='w-8 '/>
    </div>
    <Card product={CardData}/>

  </div>;
};

export default Categories;


