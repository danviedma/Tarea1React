import React from "react";
import BotonPago from "@/components/atoms/BotonPago";
import Encabezado from "../atoms/Encabezado";

function Lista({ list }) {
  return (
    <div>
      <Encabezado />
      <div className="grid content-end justify-end grid-cols-2">
        {list.map((tablero, index) => (
          <div
            key={index}
            className="m-10 w-[500px] h-[800px] rounded-xl flex flex-col items-center border-2"
          >
            <img
              src={tablero.image}
              alt={tablero.name}
              className="w-[100%] h-[80%] object-contain mt-2"
            />
            <p className="self-start m-3 text-2xl">{tablero.name}</p>
            <p className="p-3">{tablero.comentario}</p>
            <BotonPago />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lista;
