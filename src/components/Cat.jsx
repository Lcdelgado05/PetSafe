import React from "react";
import Section from "@/components/Section";

import cat1 from "@/assets/cat/img1.png";
import cat2 from "@/assets/cat/img2.png";
import cat3 from "@/assets/cat/img3.png";
import cat4 from "@/assets/cat/img4.png";
import cat5 from "@/assets/cat/img5.png";
import cat6 from "@/assets/cat/img6.png";
import cat8 from "@/assets/cat/img8.png";
import cat9 from "@/assets/cat/img9.png";
import cat10 from "@/assets/cat/img10.png";
import qr from "@/assets/cat/qr.png"
import Slider from "@/components/Slider";

const Cat = () => {
  const coursesLink = [
    {
      id: 1,
      img: qr,
      title: "Collar Con Dije QR Gato",
      description: "",
      price: "20.000",
      link: "",
    },
    {
      id: 2,
      img: cat2,
      title: "Juguete masticable para perro",
      description: "",
      price: "35.000",
      link: "",
    },
    {
      id: 3,
      img: cat3,
      title: "Juguete estimulante para perro",
      description: "",
      price: "17.000",
      link: "",
    },
    {
      id: 4,
      img: cat4,
      title: "Alimento Para Perro Adulto Dog Chow 22.7 Kg",
      description: "",
      price: "211.000",
      link: "",
    },
    {
      id: 5,
      img: cat5,
      title: "Alimento para perro Proplan 3 Kg ",
      description: "",
      price: "130.000 ",
      link: "",
    },
    {
      id: 6,
      img: cat6,
      title: "Alimento para perro Chunky 9Kg",
      description: "",
      price: "76.000",
      link: "",
    },
    {
      id: 7,
      img: cat8,
      title: "Alimento para perro Pedigree",
      description: "",
      price: "35.000",
      link: "",
    },
    {
      id: 8,
      img: cat8,
      title: "Casa para Perro",
      description: "",
      price: "170.000",
      link: "",
    },
  ];
  const handleComprar = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      <Slider />
      <Section title="Productos para gatos" className="lg:mx-56 lg:py-56 mx-2 py-6 flex-col relative">
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h2 className="font-bold text-4xl my-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00CEF5] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl capitalize ">
           
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

export default Cat;

