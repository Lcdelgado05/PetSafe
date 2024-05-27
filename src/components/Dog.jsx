import React from "react";
import Section from "@/components/Section";

import dog1 from "@/assets/dog/dog1.jpeg";
import dog2 from "@/assets/dog/dog2.jpeg";
import dog3 from "@/assets/dog/dog3.jpeg";
import dog4 from "@/assets/dog/dog4.jpeg";
import dog5 from "@/assets/dog/dog5.png";
import dog6 from "@/assets/dog/dog6.jpeg";
import dog7 from "@/assets/dog/dog7.jpeg";
import dog8 from "@/assets/dog/dog8.png";
import Slider from "@/components/Slider";

const Dog = () => {
  const coursesLink = [
    {
      id: 1,
      img: dog1,
      title: "Juguete para perro",
      description: "descripcion producto 1",
      price: "500.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto.",
    },
    {
      id: 2,
      img: dog2,
      title: "Juguete para perro",
      description: "descripcion",
      price: "500.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto.",
    },
    {
      id: 3,
      img: dog3,
      title: "Juguete para perro",
      description: "descripcion",
      price: "500.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto.",
    },
    {
      id: 4,
      img: dog4,
      title: "Alimento para perro Dog Chow",
      description: "descripcion",
      price: "500.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto.",
    },
    {
      id: 5,
      img: dog5,
      title: "Alimento para perro Proplan",
      description: "descripcion",
      price: "500.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto.",
    },
    {
      id: 6,
      img: dog6,
      title: "Alimento para perro Chunky",
      description: "descripcion",
      price: "500.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto.",
    },
    {
      id: 7,
      img: dog7,
      title: "Alimento para perro Pedigree",
      description: "descripcion",
      price: "500.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto.",
    },
    {
      id: 8,
      img: dog8,
      title: "Casa para Perro",
      description: "descripcion",
      price: "500.000",
      link: "https://wa.me/3046221615?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto.",
    },
  ];

  const handleComprar = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      <Slider />
      <Section title="Productos para perros" className="lg:mx-56 lg:py-56 mx-2 py-6 flex-col relative">
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h2 className="font-bold text-4xl my-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00CEF5] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl capitalize ">
            Productos para perros
            <br className="sm:block hidden" />
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-10 mb-16">
          {coursesLink.map(({ id, img, title, description, price, link }) => (
            <div key={id} className="rounded-2xl hover:shadow-xl hover:shadow-gray-600 flex flex-col justify-between p-4">
              <img src={img} alt={title} />

              <div className="w-full">
                <div>
                  <h2 className="font-bold text-[#5F5F5F]">{title}</h2>
                  <p>{description}</p>
                </div>
                <div className="mt-12 flex flex-col justify-center items-center">
                  <p className="flex items-center justify-start text-[#00315A] w-full text-xl font-medium mb-3">
                    <span className="mr-1">$</span>
                    {price}
                  </p>
                  <button className="bg-primary px-12 py-2 rounded-full text-white text-xl w-full hover:bg-[#00315A]" onClick={() => handleComprar(link)}>
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Dog;
