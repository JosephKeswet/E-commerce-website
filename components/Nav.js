import React, { useEffect } from "react";
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";


const Nav = () => {
  const {cartTotalQuantity} = useSelector((state) => state.cart)
  // const dispatch = useDispatch()

  // useEffect(() =>{
  //   dispatch(getTotals())
  // },[cart])


  return <div className="mx-24 text-primary font-Ko">
      <div className='flex justify-between my-3 items-center'>
        <h1 className='text-xl  sm:text-2xl font-normal cursor-pointer  bg-MyWhite animate-bounce lg:text-4xl'> 
        <Link href='/'>Shoes&Shoes</Link>
        </h1>
        <ul className=' hidden md:flex text-xl cursor-pointer '>
          <li className='Nav'>
            <Link href='/'>Home</Link>
          </li>
          <li className='Nav'>
          <Link href='/SignUpPage'>Account</Link>
          </li>
          <li className='Nav'>
          <Link href='/'>Help</Link>
          </li>
        </ul>

        <button className='w-20 text-sm  sm:text-xl bg-MyWhite py-4 rounded-full
        border-solid border-2 border-black sm:w-44 hover:shadow-lg transition-all duration-75 '
        >
          <Link href='/MyCart'>
            <h1>
              MY CART ({cartTotalQuantity})
            </h1>
            </Link>
        </button>
      </div>
  </div>;
};

export default Nav;
