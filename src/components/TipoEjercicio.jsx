import React from "react";
import "./TipoEjercicio.css";

const TipoEjercicio = () => {
  return (
    <div className="info_container">
      <div className="images_container">
        <img
          className="primer_imagen"
          src="../../Mask_Group.png"
          alt="imagen del ejercicio"
        />
        <img
          className="segunda_imagen"
          src="../../Group_4.svg"
          alt="imagen de reproduccion de video"
        />
      </div>

      <div className="text_container">
        <p className="title">Terapia 2</p>
        <p className="text_description">Ejercicios pelvicos</p>
      </div>
    </div>
  );
};

export default TipoEjercicio;
