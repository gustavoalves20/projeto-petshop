import ProductCard from "../../components/card/ProductCard";
import HeroSection from "../../components/heroSection/HeroSection";
import NavBar from "../../components/navbar/NavBar";
import racaoCachorro from "../../assets/images/produtos/ração-cachorro.png";
import SaibaMaisSection from "../../components/saibaMais/SaibaMaisSection";
import ComprarPorPet from "../../components/comprarPorPet/ComprarPorPet";
import MeuFooter from "../../components/footer/MeuFooter";
import Noticias from "../../components/noticias/Noticias";
import SecaoInutil from "../../components/secaoInutil/secaoInutil";

function HomePage() {
  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <section id="produtos" className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-left">
          Produtos em destaque
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <ProductCard
                key={i}
                title="Ração para cachorros"
                price="19,99"
                img={racaoCachorro}
              />
            ))}
        </div>
      </section>
      <SaibaMaisSection/>
      <SecaoInutil/>
      <section id="produtos" className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-left">
          Produtos mais vendidos
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <ProductCard
                key={i}
                title="Ração para cachorros"
                price="19,99"
                img={racaoCachorro}
              />
            ))}
        </div>
      </section>
      <ComprarPorPet/>
      <Noticias/>
      <MeuFooter/>
    </div>
  );
}

export default HomePage;