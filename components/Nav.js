import React from "react";
import Link from 'next/link'


const Nav = () => {
  return <div className="mx-24 text-primary font-Ko">
      <div className='flex justify-between my-3 items-center'>
        <h1 className='text-4xl font-normal cursor-pointer  bg-MyWhite animate-bounce'> 
        <Link href='/'>
            Shoes&Shoes
            </Link></h1>
        <ul className='flex text-xl cursor-pointer '>
          <li className='px-5 '>
            <Link href='/'>
             Home
            </Link>
            </li>
          <li className='px-5'>
          <Link href='/'>
            Account
            </Link>
            </li>
          <li className='px-5'>
          <Link href='/'>
            Help
            </Link>
          </li>
        </ul>

        <button className='text-xl bg-MyWhite py-4 rounded-full
        border-solid border-2 border-black w-44 hover:shadow-lg transition-all duration-75 '
        >
         <Link href='/MyCart'>
            MY CART
            </Link>
        </button>
      </div>
  </div>;
};

export default Nav;
