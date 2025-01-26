

import CompanyLogo from '@/components/CompanyLogo';
import ExploreNew from '@/components/ExploreNew';
import Hero from '@/components/Hero';
import Product from '@/components/Product';
import TopCatogery from '@/components/TopCatogery';
import React from 'react'


export default function Home() {



  return (
    <div className='w-full px-4 sm:px-8 lg:px-32  space-y-24 mb-10 lg:mb-52'>
      <Hero/>
      <CompanyLogo/>

      <div>
      <h1 className= ' text-[#272343] text-center lg:text-left text-[32px]  font-inter mb-8'>
       Featured Products
       </h1>
      <Product num={4}/>
      </div>      
      
      <div>
      <h1 className='text-[#272343] text-center lg:text-left text-[32px] font-inter mb-8'>
       Top Categories
       </h1>
      <TopCatogery/>
      </div>
      


      <ExploreNew/>
      
      <div>
      <h1 className='text-[#272343] text-center text-[32px] font-inter mb-8'>
       Our Products
       </h1>
      <Product num={8}/>
      </div>
      
      
    </div>
  );
}
