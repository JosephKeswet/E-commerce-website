import React from "react";

const Nav = () => {
  return <div className="mx-24 text-primary font-Ko">
       <div className='flex justify-between my-3 items-center'>
        <h1 className='text-4xl font-normal'>Shoes&Shoes</h1>
        <ul className='flex text-xl '>
          <li className='px-5'>Home</li>
          <li className='px-5'>Account</li>
          <li className='px-5'>Help</li>
        </ul>
       <button className='text-xl bg-white py-4 rounded-full border-solid border-2 border-black w-44'>My Cart</button>
      </div>
  </div>;
};

export default Nav;
