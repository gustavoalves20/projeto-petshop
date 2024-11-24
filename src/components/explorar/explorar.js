import React from "react";
import fundoImg from "../../assets/images/fundo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

function Explorar () {
  return (
    <div
      className="w-full h-screen bg-no-repeat absolute"
      style={{
        backgroundImage: `url(${fundoImg})`,
      }}
    >
      <div className="fixed inset-x-1/3 flex flex-col justify-center w-full mt-32 max-w-screen-2xl">
        <div className="mb-5">
          <h2 className="text-3xl font-bold text-black">
            <span className="block">Um Pet Shop com</span>
            <span className="block">tudo que você precisa</span>
          </h2>
        </div>
        <p className="block">
          Nosso Pet Shop é o estabelecimento N° 1 quando se
        </p>
        <p className="block">
          trata de proporcionar conforto e qualidade para você e
        </p>
        <p className="block">seu Pet!</p>
        <div className="mt-5">
          <button className="bg-meuPreto text-white font-semibold px-8 py-3 rounded-xl flex items-center gap-2">
            <FontAwesomeIcon icon={faPaw}></FontAwesomeIcon>
            Explorar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explorar;
