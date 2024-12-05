import { faPaw } from "@fortawesome/free-solid-svg-icons";
import fundoImg from "../../assets/images/navbar/fundo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeroSection() {
  return (
    <div
      className="h-96 bg-no-repeat bg-cover relative"
      style={{ backgroundImage: `url(${fundoImg})` }}
    >
      <div className="flex flex-col justify-center items-start max-w-5xl mx-auto h-full">
        <h1 className="text-3xl font-bold text-black mb-4 mt-6">
          Um Pet Shop com <br /> tudo que você precisa
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Nosso Pet Shop é o estabelecimento Nº 1 quando se <br /> trata de
          proporcionar conforto e qualidade para você e seu Pet!
        </p>
        <button className="bg-meuPreto duration-200 text-white px-8 py-3 rounded-md shadow-md flex items-center gap-2 font-semibold">
          <FontAwesomeIcon icon={faPaw} />
          Explorar
        </button>
      </div>
    </div>
  );
}

export default HeroSection;