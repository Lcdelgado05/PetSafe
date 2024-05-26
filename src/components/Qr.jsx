import { useParams } from "react-router-dom";

const Qr = () => {
  const { id } = useParams();
  return (
    <div className="pt-40 text-7xl">
      el id del Qr a traer de la base datos es: {id}
    </div>
  );
};

export default Qr;
