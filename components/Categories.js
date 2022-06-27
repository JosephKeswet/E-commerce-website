import React from "react";
import { ChevronRightIcon } from '@heroicons/react/solid'
import { ChevronDownIcon } from '@heroicons/react/solid'
import CardData from "../Data/CardData";
import Card from "./Card";

const Categories = () => {
  return <div className="flex justify-between mx-28 pt-60 font-Ko text-primary">
    <div>
        <h1 className="text-6xl">CATEGORIES</h1>
        <ul>
            <li className="w-[275px]">BRAND  <ChevronDownIcon className='w-5 inline-block pb-1'/></li>
            <li className="w-[275px]">COLOR <ChevronDownIcon className='w-5 inline-block pb-1'/></li>
            <li className="w-[275px]">PRICE <ChevronDownIcon className='w-5 inline-block pb-1'/></li>
            <li className="w-[275px]">SIZE <ChevronDownIcon className='w-5 inline-block pb-1'/></li>
        </ul>
    </div>
    <div className="cursor-pointer ">
        <span className='text-xl'>VIEW ALL </span>
        <ChevronRightIcon className='w-5 inline-block pb-1'/>
        {/* <Card product={CardData}/> */}
    </div>
  </div>;
};

export default Categories;
