import React from "react";
import racaoCachorro from '../../assets/images/produtos/ração-cachorro.png';

function Products() {
  return (
    <section className="flex justify-center items-center flex-col">
      <h3>Produtos em destaque</h3>
      <div>
        <div>
          <img src={racaoCachorro} alt="Ração Pedigree"></img>
        </div>
        <div>
          <p>Ração para cachorros</p>
        </div>
      </div>
    </section>
  );
}

export default Products;
