import React from "react";
import Cart from "../components/Cart";
import Nav from "../components/Nav";
import CardData from "../Data/CardData"
import Image from 'next/image'


const MyCart = () => {
      const CheckOut = () => (
        <main className=" flex mt-12 justify-center">
        <div className="flex items-center justify-between content-center border-solid rounded-[150px]
        border-primary border-4 w-[1090px] h-[100px]  text-primary ">
            <div className="ml-[88px]">
                <h3 className="text-2xl font-Ko font-normal leading-8 text-primary">Total</h3>
                <p className="text-xl font-normal leading-6 font-serif">Delivery fee included</p> 
            </div>
            <h1 className="text-[50px] ml-[170px] font-serif ">$ 1,675.0</h1>
            <button className=" w-60 h-16 font-Ko border-solid rounded-[40px]
            border-primary border-4 text-xl mr-4 ml-[176px]  hover:shadow-sm hover:border-white hover:text-MyWhite hover:bg-primary ">
                GO TO CHECKOUT
            </button>
        </div> 
    </main>
    )

  return <div>
    <Nav/>
    <h1 className="text-center text-6xl font-Ko text-primary leading-[77px] font-normal ">My Cart</h1>
    <CheckOut/>
    <Cart product={CardData} />
    
  </div>;
};

export default MyCart;
