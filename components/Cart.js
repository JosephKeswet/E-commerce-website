import React from "react";
import Image from "next/image";

const Cart = ({product}) => {
  return <div>
        
{product.map(shoes =>(
  <div className="flex border-4 border-primary rounded-[300px] items-center justify-center mb-6 mt-7 mx-32">
    <div className="w-52">
  <Image   src={shoes.img}  objectFit='contain' />
  </div>
  
<div className="pl-7 pt-[42px]">
<h1 className="text-2xl leading-7 font-Ko text-primary font-normal">{shoes.shoeBrand}</h1>
<h3 className="text-[15px] leading-5 font-normal font-Ko pt-1"> {shoes.shoeName} </h3>
<p className="leading-[22.7px] w-[557px] h-12 pt-[18px] text-xl font-normal font-Georgia">{shoes.deliveryInfo} </p>
<h1 className="pt-7 text-2xl leading-6 font-Ko font-normal text-primary">ARRIVAL: AUGUST {shoes.date} </h1>
</div>
<div className="pl-[97px]">
<h1 className="text-[50px] font-serif font-normal text-primary leading-[57px]">$ {shoes.price}</h1>
<div className="flex justify-center items-center w-[126px] h-[45px] border-4 border-primary rounded-[40px] mt-[23px] mb-[21px]">
    <button className="text-[36px] leading-[46.4px] font-Ko font-normal text-primary pr-6 cursor-pointer">-</button>
        <h1 className="text-[24px] leading-[30.96px] font-Ko font-normal text-primary">2</h1>
    <button className="text-[36px] leading-[46.4px] font-Ko font-normal text-primary pl-6 cursor-pointer">+</button>
</div>
<h3 className="text-[15px] font-Ko font-normal leading-[19.35px] text-primary pl-3">REMOVE FROM CART</h3>
</div>
  </div>
))
}
<div className="flex items-center justify-center w-[253px] h-[70px] 
border-4 border-primary rounded-[40px]
 bg-MyWhite ml-[635px] mr-[624px] mt-12 mb-12 cursor-pointer hover:shadow-lg transition-all duration-75 hover:animate-bounce ">
  <h1 className="text-[20px] font-Ko font-normal text-primary">GO TO CHECKOUT</h1>
</div>
  </div>;
};

export default Cart;
