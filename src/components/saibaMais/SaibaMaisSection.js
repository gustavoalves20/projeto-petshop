import React from "react";
import bgPets from "../../assets/images/backgrounds/bgPets.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

function SaibaMaisSection() {
  return (
    <section id="saiba-mais" className="mt-16 mx-auto bg-meuBackground">
      <div className="flex justify-center gap-40 items-center p-4 h-96">
        <div>
          <img src={bgPets} alt="bgPets" className="w-80 h-auto" />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-2xl">
            A maneira mais inteligente <br /> de cuidar do seu amiguinho
          </h3>
          <p>
            No nosso Pet Shop, você encontra uma variedade de <br /> serviços
            para garantir a saúde e o bem-estar do seu <br /> melhor amigo.
            Agende agora seu atendimento!
          </p>
          <button className="bg-meuPreto w-44 text-white font-semibold px-8 py-3 rounded-md flex justify-center items-center gap-2 shadow-md">
            <FontAwesomeIcon icon={faPaw} />
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
}

export default SaibaMaisSection;
