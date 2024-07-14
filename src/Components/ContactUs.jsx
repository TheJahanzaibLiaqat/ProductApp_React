// ContactUsPage.jsx

import Footor from "./Footor";


const ContactUsPage = () => {
  return (
    <div>
    <div className="h-[90vh] bg-gray-200 flex justify-center items-center">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
          </div>
          <div className="mt-4">
            <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">Submit</button>
          </div>
        </form>
      </div>
    </div>


    <Footor />
    </div>
  );
};

export default ContactUsPage;
