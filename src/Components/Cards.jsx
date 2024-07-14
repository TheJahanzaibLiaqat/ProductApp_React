export default function Cards() {
  const cardInfo = [
    {
      id: "1",
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renew and payment",
      image: "/images/logo1.png",
    },
    {
      id: "2",
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renew and payment",
      image: "/images/logo2.png",
    },
    {
      id: "3",
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renew and payment",
      image: "/images/logo3.png",
    },
  ];
  return (
    <div className="bg-gray-100">
      <div className="text-5xl mx-auto text-center pt-10 font-semibold w-[90vw] md:w-[50vw]">
        Manage your entire community in a single system
      </div>
      <p className="text-center text-gray-700 mt-8">
        Who is Nextcent suitable for?
      </p>

      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 py-14 space-y-12 md:space-y-0 ">
        {cardInfo.map((info) => (
          <div key={info.id}>
            <div className="border border-gray-300 bg-gray-200 shadow-lg shadow-black hover:duration-100 hover:-translate-y-4 cursor-pointer mx-auto w-[80vw] md:w-[30vw] py-10 h-[60vh] md:mb-14 md:h-[65vh] lg:h-[60vh]">
              <div>
                <img
                  src={info.image}
                  className="h-36 w-36 mx-auto"
                  alt="image"
                />
              </div>
              <div className="font-bold text-center text-3xl mx-auto w-[45vw] md:w-[20vw] mt-7">
                {info.title}
              </div>
              <div className="text-gray-700 text-center mx-auto my-6 w-[55vw] md:w-[20vw]">
                {info.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
