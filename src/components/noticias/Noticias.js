import React from "react";
import cachorroPao from "../../assets/images/noticias/cachorroPao.jpg";
import cachorroCheiro from "../../assets/images/noticias/cachorroCheiro.jpg";
import cachorroGato from "../../assets/images/noticias/cachorroGato.jpg";
import petLove from "../../assets/images/petlove/petlove.png";


function Noticias() {
  const posts = [
    {
      image: cachorroPao,
      date: "24 de Novembro, 2024",
      logo: petLove,
      title: "Por que cachorro não pode comer pão?",
    },
    {
      image: cachorroCheiro,
      date: "24 de Novembro, 2024",
      logo: petLove,
      title: "Cuidados com a alimentação de cães e gatos",
    },
    {
      image: cachorroGato,
      date: "24 de Novembro, 2024",
      logo: petLove,
      title: "Como cuidar da saúde do seu pet em cada fase da vida?",
    },
  ];

  return (
    <section className="mt-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-left">Notícias e Blog</h2>
      <div className="flex gap-6">
        {posts.map((post, index) => (
          <div key={index} className="w-64">
            <img
              src={post.image}
              alt={post.title}
              className="rounded-tl-md rounded-tr-md cursor-pointer"
            />
            <div className="space-y-1 mt-3">
              <p className="text-gray-500">{post.date}</p>
              <img
                src={post.logo}
                alt="Logo Petlove"
                className="h-4 cursor-pointer"
              />
              <p className="font-bold">{post.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Noticias;