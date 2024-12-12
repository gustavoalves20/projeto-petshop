import HeroSection from "../../components/HeroSection/HeroSection";
import NavBar from "../../components/NavBar/MyNavBar";
import guilherme from "../../assets/images/equipe/guilherme.jpg";
import luciano from "../../assets/images/equipe/luciano.PNG";
import gustavo from "../../assets/images/equipe/gustavo.jpg";
import diego from "../../assets/images/equipe/diego.PNG";
import anna from "../../assets/images/equipe/anna.jpg";
import MeuFooter from "../../components/Footer/MyFooter";
import iordan from "../../assets/images/clientes/iordan.png";
import sobre from "../../assets/images/banners/sobre.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function AboutUsPage() {
  return (
    <>
      <NavBar/>
      <HeroSection 
        bgImage = {sobre} 
        title = "Teste"
        descricao = "testando"
      />
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Sobre nossa loja</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <p className="text-gray-600">
              No nosso Pet Shop, temos o compromisso de oferecer os melhores
              produtos e serviços para os seus animais de estimação. Trabalhamos
              com as marcas mais confiáveis e produtos de alta qualidade para
              garantir o bem-estar e a felicidade do seu pet.
            </p>
            <p className="text-gray-600">
              Nossa missão é proporcionar uma experiência única e de confiança
              para os tutores e seus companheiros de quatro patas, porque
              sabemos que cada pet merece o melhor cuidado.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center border-t border-b border-meuAzul py-4">
            <div>
              <h3 className="text-2xl font-bold text-blue-500">2k+</h3>
              <p className="text-gray-600">Clientes satisfeitos</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-500">72</h3>
              <p className="text-gray-600">Marcas</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-500">1.8k+</h3>
              <p className="text-gray-600">Produtos</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-500">10</h3>
              <p className="text-gray-600">Anos de operação</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex flex-shrink-0">
            <img
              src={luciano}
              alt="Foto de Luciano vulgo dono"
              className="w-72 h-72 object-cover rounded-md"
            />
          </div>
          <div>
            <h2 className="font-bold text-xl">Luciano Tavares</h2>
            <p className="text-gray-600 mb-6">Fundador</p>
            <p className="mb-3">
              Desde o início, nosso objetivo foi proporcionar qualidade e
              confiança aos nossos clientes e seus pets. A paixão pelo bem-estar
              dos animais sempre foi o que nos motivou a criar um ambiente onde
              todos pudessem encontrar exatamente o que precisam, com carinho e
              dedicação."
            </p>
            <p>
              Luciano é o coração por trás de nossa loja. Com anos de
              experiência e uma visão apaixonada, ele lidera com o compromisso
              de oferecer sempre os melhores produtos e serviços, tornando a
              experiência de cada cliente especial.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex flex-shrink-0">
            <img
              src={guilherme}
              alt="Foto de Guilherme vulgo gerente"
              className="w-72 h-72 object-cover rounded-md"
            />
          </div>
          <div>
            <h2 className="font-bold text-xl">Guilherme Estevão</h2>
            <p className="text-gray-600 mb-6">Gerente</p>
            <p className="mb-3">
              Desde o início, sempre me dediquei a garantir que cada cliente e
              seu pet recebam a atenção e o cuidado que merecem. Minha paixão
              pelo bem-estar dos animais e pela excelência no atendimento me
              motiva a liderar nossa equipe com empatia e dedicação,
              proporcionando uma experiência única e personalizada para cada
              cliente.
            </p>
            <p>
              Acredito que nosso trabalho vai muito além de oferecer produtos e
              serviços; trata-se de construir relações de confiança e carinho
              com cada pessoa que entra na loja. Cada pet é único, e cada
              cliente tem sua própria história, o que torna nossa missão ainda
              mais especial.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Nossa equipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <img
                src={gustavo}
                alt="Foto do vendedor Gustavo"
                className="w-72 h-72 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">Gustavo Alves</h3>
              <p className="text-gray-500 text-lg">Vendedor</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={diego}
                alt="Foto do veterinário Diego"
                className="w-72 h-72 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">Diego Gadelha</h3>
              <p className="text-gray-500 text-lg">Veterinário</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={anna}
                alt="Foto da recepcionista Anna"
                className="w-72 h-72 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">Anna Lara</h3>
              <p className="text-gray-500 text-lg">Recepcionista</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 flex items-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div>
            <p className="text-meuAzul font-bold">Testemunhas</p>
            <h2 className="font-semibold text-xl mb-6">
              O que as pessoas dizem de nós
            </h2>
            <div className="flex justify-center md:justify-start mb-3 gap-2">
              <FontAwesomeIcon icon={faStar} className="text-meuAmarelo" />
              <FontAwesomeIcon icon={faStar} className="text-meuAmarelo" />
              <FontAwesomeIcon icon={faStar} className="text-meuAmarelo" />
              <FontAwesomeIcon icon={faStar} className="text-meuAmarelo" />
              <FontAwesomeIcon icon={faStar} className="text-meuAmarelo" />
            </div>
            <p className="mt-3">
              Fiquei muito satisfeito com o atendimento impecável e a<br />
              qualidade dos produtos. A equipe foi super atenciosa e me
              <br />
              ajudou a escolher o melhor para o meu pet. Notei uma
              <br />
              melhora no bem-estar dele e fiquei feliz em ver o cuidado da
              <br />
              loja com nossos animais. Recomendo! Amei o veterinário.
            </p>
            <p className="mt-5 font-semibold">Iordan</p>
            <p className="text-gray-600">Cliente</p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={iordan}
              alt="Foto de Iordan cliente daloja"
              className="h-72"
            />
          </div>
        </div>
      </section>
      <MeuFooter />
    </>
  );
}

export default AboutUsPage;
