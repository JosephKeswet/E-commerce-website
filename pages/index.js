import Image from 'next/image'
import Card from '../components/Card'
import CardData from "../Data/CardData";
import Search from '../components/Search'
import { ChevronRightIcon } from '@heroicons/react/solid'
import Nav from '../components/Nav';
import MiddleSection from '../components/MiddleSection';
import Categories from '../components/Categories';
import Bottom from '../components/Bottom';



export default function Home() {
  const TopDeals = () => (
    <div className='flex justify-between my-36 mx-28'>
      <div className='font-Ko text-primary'>
        <h1 className='text-6xl pb-4'>Top Deals</h1>
        <p className='text-2xl'>The hottest shoes from our store right now.</p>
      </div>
      <div className='Nav cursor-pointer font-Ko text-primary'>
        <span className='text-xl'>VIEW ALL </span>
        <ChevronRightIcon className='w-5 inline-block pb-1'/>
      </div>
  </div>
  )
  

  return (
    <div className='bg-MyWhite'>
      <Nav/>
      <Search/>
      <TopDeals/>
      <div className='mx-24'>
      <Card product={CardData}/>
      </div>
      <MiddleSection/>
      <Categories/>
      <Bottom/>
    </div>
  )
}
