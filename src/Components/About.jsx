import headphone from '../assets/headphone.png'



export default function About() {
  return (
    <div className="bg-gray-200 md:flex py-16">
        <div className='md:w-[50vw]'><img src={headphone} alt="headphone" className='h-[400px] w-[300px] mx-auto' /></div>
        <div className='md:w-[50vw]'>
            <div className="text-4xl text-center md:text-start mt-12 md:mt-0 font-bold md:w-[40vw] mx-auto md:mx-0 w-[90vw]">The unseen of spending three years at pixelgrade</div>
            <p className="text-gray-700 mt-7 md:mx-0 mx-auto w-[65vw] md:w-[45vw]">Our membership management software provides full automation of membership renew and payment
            Our membership management software provides full automation of membership renew and payment
            Our membership management software provides full automation of membership renew and payment
            Our membership management software provides full automation of membership renew and payment
            </p>
            <button className='mt-10 bg-green-800 text-white mx-auto block md:mx-0 md:static p-4 hover:-translate-y-4 hover:duration-100'>Learn More</button>
        </div>
      
    </div>
  )
}
