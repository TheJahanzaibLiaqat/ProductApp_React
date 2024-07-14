import Card from "../assets/Card.jpg";
import Lap from "../assets/lap.jpeg";
import Top from "../assets/top.jpg";


export default function DCards() {
  return (
    <div className="bg-gray-200">
      <div className="font-bold text-4xl text-center pt-6 ">
        Caring in the new marketing
      </div>
      <p className="m-auto px-8 md:px-0 md:w-[60vw] mt-5 text-gray-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit iusto
        aspernatur quasi hic error quisquam maxime illo nobis repudiandae neque,
        culpa quaerat placeat eum porro blanditiis possimus debitis repellendus
        cum? Dolorum repellat corrupti voluptatum distinctio aliquid vitae
        dolorem repudiandae maxime excepturi sequi! Dolores error a voluptas
        ipsa? Quia recusandae corrupti qui tenetur a saepe dolor sapiente.
      </p>
      <div className="bg-gray-200 md:mt-16 h-[150vh] md:h-[90vh] lg:h-[50vh] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:ps-40 lg:ps-20 pb-20">
        <div className=" cards relative m-auto md:m-0">
          <div>
            <img src={Card} alt="Card" className="md:h-[25vh] w-[70vw] md:w-[25vw] rounded-md" />
          </div>
          <div className="bg-gray-300 shadow-lg shadow-black rounded-xl w-[60vw] md:w-[20vw] p-2 absolute md:right-0 left-5 -bottom-16 lg:left-8 md:left-6 md:bottom-7 lg:bottom-28 ">
            <p className="md:w-[15vw] w-[60vw] text-gray-700 m-auto">
              Creating Streamlined Safeguarding Processes with OrieRen
            </p>
            <button className="m-auto block text-lg text-green-700 font-bold mt-4">
              Readmore -
            </button>
          </div>
        </div>


        <div className=" cards relative m-auto md:m-0 ">
          <div>
            <img src={Lap} alt="Card" className="md:h-[25vh] w-[70vw] md:w-[25vw] rounded-md" />
          </div>
          <div className="bg-gray-300 shadow-lg shadow-black rounded-xl w-[60vw] md:w-[20vw] p-2 absolute md:right-0 left-5 -bottom-16 lg:left-8 md:left-6 md:bottom-7 lg:bottom-28 ">
            <p className="md:w-[15vw] w-[60vw] text-gray-700 m-auto ">
              Creating Streamlined Safeguarding Processes with OrieRen
            </p>
            <button className="m-auto block text-lg text-green-700 font-bold mt-4">
              Readmore -
            </button>
          </div>
        </div>


        <div className=" cards relative m-auto md:m-0 ">
          <div>
            <img src={Top} alt="Card" className="md:h-[25vh] w-[70vw] md:w-[25vw] rounded-md" />
          </div>
          <div className="bg-gray-300 shadow-lg shadow-black rounded-xl w-[60vw] md:w-[20vw] p-2 absolute md:right-0 left-5 -bottom-16 lg:left-8 md:left-6 md:bottom-7 lg:bottom-28 ">
            <p className="md:w-[15vw] w-[60vw] text-gray-700 m-auto">
              Creating Streamlined Safeguarding Processes with OrieRen
            </p>
            <button className="m-auto block text-lg text-green-700 font-bold mt-4">
              Readmore -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
