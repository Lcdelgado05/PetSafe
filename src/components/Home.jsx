import React, { useState } from "react";

import { db } from "@/configFirebase";
import { collection, getDocs } from "firebase/firestore";

import { useEffect } from "react";
import Label from "@/components/Label";
import { v4 } from "uuid";
import { MdLibraryAdd } from "react-icons/md";
import Section from "@/components/Section";
const Home = () => {
  const [data, setData] = useState([]);

  const getFiles = async () => {
    const x = [];

    try {
      const querySnapshot = await getDocs(collection(db, "vehiculos"));
      querySnapshot.forEach((doc) => {
        const y = doc.data();
        y["id"] = doc.id;
        x.push(y);
      });
      setData(x);
    } catch (error) {
      error.message;
    }
  };

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <>
      <Section title="mascotas">
        <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8  items-center justify-center">

        </div>
        <div className="btn-group mt-36 ">
          <button className="btn bg-primary">1</button>
          <button className="btn bg-primary">2</button>
          <button className="btn bg-primary">3</button>
          <button className="btn bg-primary">4</button>
        </div>
      </Section>
    </>
  );
};

export default Home;
