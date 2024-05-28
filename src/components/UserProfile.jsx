import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "@/configFirebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Loader from "@/components/Loader";
import { useNavigate } from "react-router-dom";
import Section from "@/components/Section";

const UserProfile = ({ email }) => {
  const [isLoading, setIsLoading] = useState(false);


  const [admin, setAdmin] = useState(false);
  const fakeData = [
    {
      rol: "usuario",
    },
  ];

  const buscarDocumentoOCrearDocumento = async (idDocumento) => {
    setIsLoading(true);
    //crear referencia al documento
    const docRef = doc(db, "usuarios", idDocumento);
    //buscar documento

    const consulta = await getDoc(docRef);
    //revissar si existe
    if (consulta.exists()) {
      //si si existe
      const infoDocu = consulta.data();
      setIsLoading(false);
      return infoDocu.rol[0].rol;
    } else {
      //si no existe
      await setDoc(docRef, { rol: [...fakeData] });
      const consulta = await getDoc(docRef);
      const infoDocu = consulta.data();
      setIsLoading(false);
      return infoDocu.rol[0].rol;
    }
  };

  useEffect(() => {
    async function fetch() {
      const userRol = await buscarDocumentoOCrearDocumento(email);
      if (userRol === "admin") {
        setAdmin(true);
      }
    }

    fetch();
  }, []);

  return (
    <>
      
      {isLoading ? <Loader /> : ""}
    
           <Section title="perfil">

     
      <h1 className="flex flex-col gap-4 w-[300px] lg:w-[500px] items-center shadow-lg shadow-gray-500 rounded-xl p-6 ">
          Bienvenido, {email}
        </h1>
        <br />


      <div className="relative flex items-center justify-center mt-20  ">
        <img src="/fon5.jpeg" className=" rounded-xl " alt="" />
      <div className=" absolute card w-96 bg-base-500 shadow-xl">
  <figure><img src="/perfildog.png" className=" rounded-full" /></figure>
  <div className=" recard-body">
    <h2 className=" block text-black font-bold mb-2 justify-center card-title">Benji!</h2>
    <div className="  block text-black font-bold mb-2 card-actions justify-end">
      Nombre del dueño <br /> Nombre de mascota <br /> Raza <br /> Direccion <br /> telefono <br /> correo <br /> 
      <br />
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      
      </div>
      </Section>
       
      
    </>
   
  );
};

export default UserProfile;
