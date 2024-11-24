import React from "react";
import fundoImg from "../../assets/images/fundo.png";
import racaoCachorro from "../../assets/images/produtos/ração-cachorro.png";
import bgPets from "../../assets/backgrounds/bgPets.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <div className="fixed z-50 w-full bg-white shadow-md">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPaw} />
            <span className="font-bold text-lg">Pet Shop</span>
          </div>
          <nav className="flex gap-8">
            <a href="#inicio" className="hover:text-blue-500 font-semibold">
              Início
            </a>
            <a href="#loja" className="hover:text-blue-500 font-semibold">
              Loja
            </a>
            <a href="#sobre-nos" className="hover:text-blue-500 font-semibold">
              Sobre nós
            </a>
            <a
              href="#agendamento"
              className="hover:text-blue-500 font-semibold"
            >
              Agendamento
            </a>
          </nav>
          <div className="flex items-center gap-8">
            <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
            <FontAwesomeIcon icon={faShoppingCart} className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="h-96 bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: `url(${fundoImg})`,
        }}
      >
        <div className="flex flex-col justify-center items-start max-w-7xl mx-auto h-full px-8">
          <h1 className="text-3xl font-bold text-black mb-4 mt-6">
            Um Pet Shop com <br /> tudo que você precisa
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Nosso Pet Shop é o estabelecimento Nº 1 quando se <br /> trata de
            proporcionar conforto e qualidade para você e seu Pet!
          </p>
          <button className="bg-meuPreto hover:bg-gray-800 duration-200 text-white px-8 py-3 rounded-md shadow-md flex items-center gap-2 font-semibold">
            <FontAwesomeIcon icon={faPaw} />
            Explorar
          </button>
        </div>
      </div>

      {/* Produtos em Destaque */}

      <section id="produtos" className="mt-16 max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-12 text-left">
          Produtos em destaque
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="shadow rounded-lg flex flex-col items-center w-64 h-96">
            <div className="bg-meuBackground">
              <img
                src={racaoCachorro}
                alt="Ração para cachorros"
                className="h-64"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg mb-2">Ração para cachorros</h3>
              <p className="text-gray-600 mb-4 font-semibold">R$ 19,99</p>
              <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600">
                Comprar
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="shadow rounded-lg flex flex-col items-center w-64 h-96">
            <div className="bg-meuBackground">
              <img
                src={racaoCachorro}
                alt="Ração para cachorros"
                className="h-64"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg mb-2">Ração para cachorros</h3>
              <p className="text-gray-600 mb-4 font-semibold">R$ 19,99</p>
              <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600">
                Comprar
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="shadow rounded-lg flex flex-col items-center w-64 h-96">
            <div className="bg-meuBackground">
              <img
                src={racaoCachorro}
                alt="Ração para cachorros"
                className="h-64"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg mb-2">Ração para cachorros</h3>
              <p className="text-gray-600 mb-4 font-semibold">R$ 19,99</p>
              <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600">
                Comprar
              </button>
            </div>
          </div>
          {/* Card 4*/}
          <div className="shadow rounded-lg flex flex-col items-center w-64 h-96">
            <div className="bg-meuBackground">
              <img
                src={racaoCachorro}
                alt="Ração para cachorros"
                className="h-64"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg mb-2">Ração para cachorros</h3>
              <p className="text-gray-600 mb-4 font-semibold">R$ 19,99</p>
              <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600">
                Comprar
              </button>
            </div>
          </div>
          {/* Card 5*/}
          <div className="shadow rounded-lg flex flex-col items-center w-64 h-96">
            <div className="bg-meuBackground">
              <img
                src={racaoCachorro}
                alt="Ração para cachorros"
                className="h-64"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg mb-2">Ração para cachorros</h3>
              <p className="text-gray-600 mb-4 font-semibold">R$ 19,99</p>
              <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600">
                Comprar
              </button>
            </div>
          </div>
          {/* Card 6*/}
          <div className="shadow rounded-lg flex flex-col items-center w-64 h-96">
            <div className="bg-meuBackground">
              <img
                src={racaoCachorro}
                alt="Ração para cachorros"
                className="h-64"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg mb-2">Ração para cachorros</h3>
              <p className="text-gray-600 mb-4 font-semibold">R$ 19,99</p>
              <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sessão saiba mais*/}

      <section id="saiba-mais" className="mt-16 mx-auto px-8 bg-meuBackground">
        <div className="flex justify-center gap-40 items-center p-4 h-96">
          <div>
            <img src={bgPets} alt="bgPets" className="w-80 h-auto"></img>
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
              <FontAwesomeIcon icon={faPaw} className=""/>
              Saiba mais
            </button>
          </div>
        </div>
      </section>

      <div>OI</div>
      <div>OI</div>
      <div>OI</div>
    </div>
  );
}

export default HomePage;
