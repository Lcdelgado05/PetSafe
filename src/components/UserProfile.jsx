import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "@/configFirebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Loader from "@/components/Loader";
import { Link } from "react-router-dom";
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
      <h1 className="flex flex-col gap-4 w-[300px] lg:w-[500px] items-center shadow-lg shadow-gray-500 rounded-xl p-6">
          Bienvenido, {email}
        </h1>
        <div className="flex items-center justify-center lg:w-1/2">
          <div className=" ">
          <div className="flex items-center justify-center lg:w-10/12 ">
          <img src="/perfildog.png" className=" rounded-full w-[800px] lg:w-[900px] object-cover row-span-full" />
        </div>
          {admin ? (
          <Link to="/admin" className="btn btn-primary ">
            vista de admin
          </Link>
        ) : (
          ""
        )}
       </div>
        <form className="flex flex-col gap-4 w-[300px] lg:w-[500px] items-center shadow-lg shadow-gray-500 rounded-xl p-6 ">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nombre del dueño</label>
            <input type="text" className=" input input-primary form-input w-full border  rounded-md px-2 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nombre de mascota</label>
            <input type="text" className="input input-primary form-input w-full border  rounded-md px-2 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Raza</label>
            <input type="text" className="input input-primary form-input w-full border  rounded-md px-2 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Numero de contacto</label>
            <input type="tel" className="input input-primary form-input w-full border  rounded-md px-2 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Correo electronico</label>
            <input type="email" className="input input-primary form-input w-full border  rounded-md px-2 py-2" />
          </div>
          </form>
        </div>
      </Section>
      
    </>
   
  );
};

export default UserProfile;
