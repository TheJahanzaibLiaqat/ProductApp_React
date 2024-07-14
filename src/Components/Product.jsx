import { DiYeoman } from "react-icons/di";
import { DiScrum } from "react-icons/di";
import { FaBuysellads } from "react-icons/fa";
import { MdPayments } from "react-icons/md";


export default function Product() {
  return (
    <div className="md:flex py-20">
      <div className="md:w-[40vw] lg:w-[50vw]">
        <div className="text-4xl font-bold text-center md:w-[29vw] w-[90vw] mx-auto">Helping a local <span className="text-green-900">business reinvent itselt</span></div>
        <p className="text-gray-700 mt-3 mx-auto text-center md:w-[29vw]">We reached here with our hard work and dedication</p>
      </div>

      <div className="md:w-[60vw] lg:w-[50vw] mt-10 md:mt-0 md:space-y-0 space-y-7 ">


      <div className="md:flex space-y-7 md:space-y-0 md:justify-evenly ms-28">
      <div className="flex items-center">
        <div><DiYeoman className="w-16 h-16 "/></div>
         <div>
         <h3 className="text-2xl font-bold">2,245,341</h3> 
         <p className="text-gray-700">Members</p>   
         </div>
        </div>      
           
            
        
        <div className="flex main items-center">
        <div><DiScrum className="w-20 h-20 " /></div>
         <div>
         <h3 className="text-2xl font-bold">46,328</h3> 
         <p className="text-gray-700 ">Clubs</p>   
         </div>
        </div>   
      </div>


      <div className="md:flex space-y-7 md:space-y-0 md:justify-evenly ms-28">
      <div className="flex items-center">
        <div><FaBuysellads className="w-16 h-16 "/></div>
         <div>
         <h3 className="text-2xl font-bold">2,245,341</h3> 
         <p className="text-gray-700">Members</p>   
         </div>
        </div>      
           
            
        
        <div className="flex main items-center">
        <div><MdPayments className="w-20 h-20 " /></div>
         <div>
         <h3 className="text-2xl font-bold">46,328</h3> 
         <p className="text-gray-700 ">Clubs</p>   
         </div>
        </div>   
      </div>


    </div>

    </div>
  )
}
