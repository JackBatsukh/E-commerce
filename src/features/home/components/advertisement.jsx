import React, { useEffect, useState } from "react";

const Advertisement = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "https://media.istockphoto.com/id/1945077529/video/advertisement-search-engine-advertisement-digitaldisplay-business-technologyartificial.jpg?s=640x640&k=20&c=q01vOlnpxbKgpZ6lqduQOl3UnylW9v2kIbZwUk_fWcI=",
    "https://tse4.mm.bing.net/th?id=OIP.Btbk71iA7GHoihSlLzTutgHaDt&w=700&h=350&rs=1&pid=ImgDetMain",
    "https://media.istockphoto.com/id/1327419990/vector/prepare-your-luggage-passport-ticket-and-mask-for-returning-to-travel-ready-to-travel-back.jpg?s=612x612&w=0&k=20&c=rVJj7W80IuoZ9nTs7DRy3qEmIH2_HyEXES2n5AFGg00=",
    "https://th.bing.com/th/id/R.be4788fc09516a19b5b1ee32e686d9fb?rik=Vem%2bypGVz%2bz0tw&pid=ImgRaw&r=0",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="flex  gap-2">
        <div className="hidden md:flex md:w-[45%]  h-[40vh] gap-2">
          <div className="carousel w-3/5 rounded-2xl ">
            <img
              src="https://f.hellowork.com/blogdumoderateur/2021/12/ecommerce-cross-sell-up-sell.jpeg"
              alt=""
              className="w-full object-fill border-[1px] rounded-2xl"
            />
          </div>
          <div className="flex flex-col h-[40vh] w-2/5 gap-2">
            <div className="carousel w-full rounded-2xl h-1/2">
              <img
                src="https://www.apetogentleman.com/wp-content/uploads/2020/01/greastestsneakerbrands17.jpg"
                alt=""
                className="w-full object-fill border-[1px] rounded-2xl"
              />
            </div>
            <div className="carousel w-full rounded-2xl h-1/2">
              <img
                src="https://th.bing.com/th/id/R.9e56c56d920ee955d6c17d1efab369ef?rik=uSlMIa5K%2frCDgw&riu=http%3a%2f%2fesq.h-cdn.co%2fassets%2f16%2f48%2f1600x800%2flandscape-1480540651-best-of-4.jpg&ehk=2qF919IQgwtC7qUBEPQHA%2fgQsCAf3RiruN2kKlKNRt4%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                className="w-full object-fill border-[1px] rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div className="carousel flex items-center justify-center md:w-[55%] ">
          <div className="carousel-item w-full h-[40vh] object-contain">
            <img
              src={images[activeIndex]}
              className="w-full object-fill border-[1px] rounded-2xl"
              alt="Advertisement Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
