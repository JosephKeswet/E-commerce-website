import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import CardData from "../Data/CardData";
import Search from '../components/Search'
import { ChevronRightIcon } from '@heroicons/react/solid'
import Nav from '../components/Nav';
import MiddleSection from '../components/MiddleSection';
import Categories from '../components/Categories';


export default function Home() {
  return (
    <div>
      <Nav/>
      <Search/>
      <div className='flex justify-between my-36 mx-28'>
        <div className='font-Ko text-primary'>
        <h1 className='text-6xl pb-4'>Top Deals</h1>
        <p className='text-2xl'>The hottest shoes from our store right now.</p>
        </div>
        <div className='cursor-pointer font-Ko text-primary'>
        <span className='text-xl'>VIEW ALL </span>
        <ChevronRightIcon className='w-5 inline-block pb-1'/>
        </div>
      </div>
      
      <Card product={CardData}/>
      <MiddleSection/>
      <Categories/>

    </div>
  )
}
