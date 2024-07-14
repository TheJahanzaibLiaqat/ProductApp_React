import { BiBarChartAlt } from "react-icons/bi";
import { BiBowlHot } from "react-icons/bi";
import { DiAndroid } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiDojo } from "react-icons/di";
import { DiRedhat } from "react-icons/di";

export default function Services() {
  return (
    <div className="bg-gray-200 pb-2">
      <div className="text-center text-5xl font-semibold pt-7">Our Clients</div>
      <p className="text-center text-gray-800 mt-4 mx-auto md:mx-0 w-[60vw] md:w-auto">We have been working with some Fortune 500+ clients</p>
      <div className="md:flex space-y-20 md:space-y-0 md:justify-around my-16 ">
      <BiBarChartAlt className="md:h-14 md:w-14 mx-auto md:mx-0 h-28 w-28 cursor-pointer"/>
      <BiBowlHot className="md:h-14 md:w-14 mx-auto md:mx-0 h-28 w-28 cursor-pointer"/>
      <DiAndroid className="md:h-14 md:w-14 mx-auto md:mx-0 h-28 w-28 cursor-pointer"/>
      <DiCss3 className="md:h-14 md:w-14 mx-auto md:mx-0 h-28 w-28 cursor-pointer"/>
      <DiDojo className="md:h-14 md:w-14 mx-auto md:mx-0 h-28 w-28 cursor-pointer"/>
      <DiRedhat className="md:h-14 md:w-14 mx-auto md:mx-0 h-28 w-28 cursor-pointer"/>
      </div>
    </div>
  )
}
