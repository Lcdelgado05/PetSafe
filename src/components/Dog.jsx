import React from "react";

import dog1 from "@/assets/dog/dog1.jpeg";
import dog2 from "@/assets/dog/dog2.jpeg";
import dog3 from "@/assets/dog/dog3.jpeg";
import dog4 from "@/assets/dog/dog4.jpeg";
import dog5 from "@/assets/dog/dog5.jpeg";
import dog6 from "@/assets/dog/dog6.jpeg";
import dog7 from "@/assets/dog/dog7.jpeg";
import Slider from "@/components/Slider";
const Dog = () => {
  const coursesLink = [
    {
      id: 1,
      img: dog1,
      title: "Evolve perro snacks libre de granos jerky salmón 340 gr",
      description: "descripcion producto 1",
      price: "500.000",
      link: "",
    },
    {
      id: 2,
      img: dog2,
      title: "titulo",
      description: "descripcion",
      price: "500.000",
      link: "",
    },
    {
      id: 3,
      img: dog3,
      title: "titulo",
      description: "descripcion",
      price: "500.000",
      link: "",
    },
    {
      id: 4,
      img: dog4,
      title: "titulo",
      description: "descripcion",
      price: "500.000",
      link: "",
    },
    {
      id: 5,
      img: dog5,
      title: "titulo",
      description: "descripcion",
      price: "500.000",
      link: "",
    },
    {
      id: 6,
      img: dog6,
      title: "titulo",
      description: "descripcion",
      price: "500.000",
      link: "",
    },
    {
      id: 7,
      img: dog7,
      title: "titulo",
      description: "descripcion",
      price: "500.000",
      link: "",
    },
  ];

  return (
    <div>
      <Slider />
      <section className={` lg:mx-56 lg:py-56 mx-2 py-6  flex-col relative `}>
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] ">
          <h2 className="">
            ¿Tu perrito sufre de ansiedad por separación? Encuentra los mejores
            productos para su tratamiento:
            <br className="sm:block hidden" />
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  w-full gap-10 mb-16  ">
          {coursesLink.map(({ id, img, title, description, price }) => (
            <div
              key={id}
              className=" rounded-2xl hover:shadow-xl hover:shadow-gray-600 flex flex-col justify-between p-4"
            >
              <img src={img} className="" />

              <div className="w-full  ">
                <div>
                  <h2 className="font-bold text-[#5F5F5F]">{title}</h2>
                  <p>{description}</p>
                </div>
                <div className="mt-12 flex flex-col justify-center items-center">
                  <p className="flex items-center justify-start  text-[#00315A] w-full text-xl font-medium mb-3 ">
                    <span className="mr-1">$</span>
                    {price}
                  </p>
                  <button className="bg-[#ff6462] px-12 py-2 rounded-full text-white text-xl w-full hover:bg-[#00315A] ">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dog;
