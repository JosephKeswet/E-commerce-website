import React, { useEffect, useState } from "react";
import Image from 'next/image'
// import shoe from '../images/Rectangle 6.png'
import { PlusCircleIcon } from '@heroicons/react/solid'
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";


const Card = ({product}) => {
  const dispatch = useDispatch()
  const handleAddToCart = (shoes) =>{
    dispatch(addToCart(shoes))
  }


  return <div className="flex overflow-scroll overflow-y-hidden   scrollbar-hide font-Ko text-primary">
  
  <Swiper
    slidesPerView={3}
    spaceBetween={10}
    slidesPerGroup={3}
    effect="fade"
    loop={true}
    loopFillGroupWithBlank={true}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
    
    >
      {product?.map((shoes) => (  
        <div className="flex items-end px-3 pb-5 mx-4 cursor-pointer " key={shoes.id}>
            <SwiperSlide key={shoes.id} className="swiper" >
          <div className=" w-80">
            <Image   src={shoes.img}   objectFit='contain' width={400} height={400} alt=''/>
            <h3 className="text-2xl animate-bounce" >{shoes.shoeBrand}</h3>
            <h4 className="text-xl " >{shoes.shoeName}</h4>
            <div className="flex justify-between">
              <h3 className="my-6 text-3xl" >$ {shoes.price}</h3>
              <PlusCircleIcon className="w-10 pl-2  hover:animate-pulse cursor-pointer" onClick={() => handleAddToCart(shoes)} />
            </div>
          </div>
          </SwiperSlide>
       </div>
      ))
  }
  </Swiper>
  </div>;
};


export default Card;

