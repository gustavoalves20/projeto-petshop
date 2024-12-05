import React from "react";
import gato from "../../assets/images/pets/gato.png";
import cachorro from "../../assets/images/pets/cachorro.png";
import coelho from "../../assets/images/pets/coelho.png";
import hamster from "../../assets/images/pets/hamster.png";
import passaro from "../../assets/images/pets/ave.png";
import tartaruga from "../../assets/images/pets/tartaruga.png";

function ComprarPorPet() {
  const pets = [
    { name: "Gato", img: gato },
    { name: "Cachorro", img: cachorro },
    { name: "Coelho", img: coelho },
    { name: "Hamster", img: hamster },
    { name: "Pássaro", img: passaro },
    { name: "Tartaruga", img: tartaruga },
  ];

  return (
    <section id="comprar-por-pet" className="mt-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-left">Comprar por pet</h2>
      <div className="flex justify-between">
        {pets.map((pet, index) => (
          <div key={index} className="text-center font-semibold">
            <a href={`#${pet.name.toLowerCase()}`}>
              <img src={pet.img} alt={pet.name} className="h-28"/>
            </a>
            <h2>{pet.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ComprarPorPet;
