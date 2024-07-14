// DescriptionCard.jsx

import Footor from "./Footor";


const DescriptionCard = () => {
  return (

    <div>
<div className="bg-gray-200 md:h-[90vh] md:py-0 py-10">
    <div className="max-w-md mx-auto rounded-xl  shadow-md overflow-hidden md:max-w-2xl space-y-6 pt-8">
      <div className="md:flex bg-white mx-10">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48 "
            src="https://via.placeholder.com/150"
            alt="Description"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Case study
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Finding customers for your new business
          </a>
          <p className="mt-2 text-gray-500">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
        </div>
      </div>

      <div className="md:flex bg-white mx-10">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src="https://via.placeholder.com/150"
            alt="Description"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Case study
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Finding customers for your new business
          </a>
          <p className="mt-2 text-gray-500">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
        </div>
      </div>


      <div className="md:flex bg-white mx-10">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src="https://via.placeholder.com/150"
            alt="Description"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Case study
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Finding customers for your new business
          </a>
          <p className="mt-2 text-gray-500">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
        </div>
      </div>
    </div>
  
 
    </div>

    <Footor />
    </div>
  );
};

export default DescriptionCard;
