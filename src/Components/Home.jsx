import { Carousel } from 'flowbite-react';
import product from '../assets/product.png';
import Product from "./Product"
import Services from "./Services"
import About from "./About"
import Cards from "./Cards"
import DCards from "./DCards"
import Footor from "./Footor"

export default function Home() {
  return (
    <div>
      
       <div className="h-[90vh] bg-gray-400 ">
      <Carousel>
      <div className="lg:flex h-full items-center justify-center dark:text-white">
          <div>
            <div className='text-5xl text-center lg:text-start mx-auto md:mx-auto lg:mx-0 mt-10 w-[80vw] md:w-[60vw] lg:w-[35vw] font-bold'>Lessons and insights <span className='text-green-800'>from 8 years</span></div>
            <p className='mt-5 text-center lg:text-start'>Where to grow your business as a photographer, site or social media?</p>
            <button className='bg-green-800 text-white rounded-lg mt-6 p-3 shadow-black shadow-md hover:-translate-y-3 hover:duration-100 mx-auto lg:mx-0 block'>Register</button>
          </div>
          <div className=''>
            <img src={product} className='mx-auto lg:mx-0  h-[400px] w-[400px] lg:h-[500px] lg:w-[500px]' alt="product" />
          </div>
        </div>
        
        <div className="lg:flex h-full items-center justify-center dark:text-white">
          <div>
            <div className='text-5xl text-center lg:text-start mx-auto md:mx-auto lg:mx-0 mt-10 w-[80vw] md:w-[60vw] lg:w-[35vw] font-bold'>Lessons and insights <span className='text-green-800'>from 9 years</span></div>
            <p className='mt-5 text-center lg:text-start'>Where to grow your business as a photographer, site or social media?</p>
            <button className='bg-green-800 text-white rounded-lg mt-6 p-3 shadow-black shadow-md hover:-translate-y-3 hover:duration-100 mx-auto lg:mx-0 block'>Register</button>
          </div>
          <div className=''>
            <img src={product} className='mx-auto lg:mx-0  h-[400px] w-[400px] lg:h-[500px] lg:w-[500px]' alt="product" />
          </div>
        </div>
        
       
        <div className="lg:flex h-full items-center justify-center dark:text-white">
          <div>
            <div className='text-5xl text-center lg:text-start mx-auto md:mx-auto lg:mx-0 mt-10 w-[80vw] md:w-[60vw] lg:w-[35vw] font-bold'>Lessons and insights <span className='text-green-800'>from 10 years</span></div>
            <p className='mt-5 text-center lg:text-start'>Where to grow your business as a photographer, site or social media?</p>
            <button className='bg-green-800 text-white rounded-lg mt-6 p-3 shadow-black shadow-md hover:-translate-y-3 hover:duration-100 mx-auto lg:mx-0 block'>Register</button>
          </div>
          <div className=''>
            <img src={product} className='mx-auto lg:mx-0  h-[400px] w-[400px] lg:h-[500px] lg:w-[500px]' alt="product" />
          </div>
        </div>
       
      </Carousel>
    </div>


    <Services />
     <Cards />
     <About />
     <Product />
     <DCards />
     <Footor />
    
    
    </div>

  )
}
