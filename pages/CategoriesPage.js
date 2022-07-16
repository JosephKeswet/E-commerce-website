import React from "react";
import Nav from '../components/Nav'
import Search from "../components/Search";
import Categories from '../components/Categories'
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { ChevronDownIcon } from '@heroicons/react/solid'
import GridCards from "../components/GridCards";
import Link from "next/link";

const CategoriesPage = () => {

    const Categories = () => (
        <div className="absolute left-[100px] font-Ko text-primary ">
        <h1 className="text-6xl leading-[77px]">CATEGORIES</h1>
        <div className="flex">
            <ul>
                <li className="Category ">BRAND</li>
                <li className="Category">COLOR </li>
                <li className="Category">PRICE </li>
                <li className="Category">SIZE </li>
            </ul>
            <div>
                <ChevronDownIcon className='Arrowdown'/>
                <ChevronDownIcon className='Arrowdown'/>
                <ChevronDownIcon className='Arrowdown'/>
                <ChevronDownIcon className='Arrowdown'/>
            </div>
            <GridCards/>
        </div>
    </div>
    )


  return <div>
        <Nav/>
            <div >
                <Link href="/">
                <ChevronLeftIcon className="w-[45px] h-[45px] absolute left-[90px] bg-gray  bg-opacity-10 rounded-full cursor-pointer "/>
                </Link>
                <div className="mb-[56.5px]">
                    <Search/>
                </div>
                <Categories/>
            </div>
  </div>;
};

export default CategoriesPage;
