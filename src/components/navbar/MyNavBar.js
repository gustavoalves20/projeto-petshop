import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function MyNavBar () {
  return (
    <div className="fixed z-10 mt-5 w-full">
      <div
        className="flex items-center px-12 py-4 shadow-md bg-white rounded-full space-x-14 mx-auto"
        style={{ width: "fit-content" }}
      >
        <div>
          <FontAwesomeIcon icon={faPaw}></FontAwesomeIcon>
          <span className="font-bold ml-2">Pet Shop</span>
        </div>
        <nav>
          <ul className="flex gap-8">
            <li>
              <a
                href="Início"
                className="hover:text-meuAzul border-b-2 border-transparent hover:border-meuAzul pb-1 duration-300 font-semibold"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="Loja"
                className="hover:text-meuAzul border-b-2 border-transparent hover:border-meuAzul pb-1 duration-300 font-semibold"
              >
                Loja
              </a>
            </li>
            <li>
              <a
                href="Sobre"
                className="hover:text-meuAzul border-b-2 border-transparent hover:border-meuAzul pb-1 duration-300 font-semibold"
              >
                Sobre nós
              </a>
            </li>
            <li>
              <a
                href="Agendamento"
                className="hover:text-meuAzul border-b-2 border-transparent hover:border-meuAzul pb-1 duration-300 font-semibold"
              >
                Agendamento
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-8">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="cursor-pointer"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faUser}
            className="cursor-pointer"
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default MyNavBar;
