import './App.css';
import logo from './assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="flex items-center pl-4 pr-4 mt-5 shadow-lg rounded-full space-x-6 max-w-5xl mx-auto">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="h-12 w-auto"/>
        </div>
        <ul className="flex text-sm font-semibold gap-7">
          <li>
            <a href="Início" className="text-black hover:text-meuAzul border-b-2 border-transparent hover:border-meuAzul pb-1 duration-300">
              Início
            </a>
          </li>
          <li>
            <a href="Loja" className="text-black hover:text-meuAzul border-b-2 border-transparent hover:border-meuAzul pb-1 duration-300">
              Loja
            </a>
          </li>
          <li>
            <a href="Sobre" className="text-black hover:text-meuAzul border-b-2 border-transparent hover:border-meuAzul pb-1 duration-300">
              Sobre nós
            </a>
          </li>
          <li>
            <a href="Agendamento" className="text-black hover:text-meuAzul border-b-2 border-transparent hover:border-meuAzul pb-1 duration-300">
              Agendamento
            </a>
          </li>
        </ul>
        <div className="flex-grow flex items-center bg-zinc-100 rounded-full px-4 py-1">
          <input type="text" placeholder="Buscar produtos" className="bg-transparent outline-none text-sm text-black w-full"/>
          <button className="text-gray-600 hover:text-black"><FontAwesomeIcon icon={faSearch}/></button>
        </div>
        <div className="flex items-center space-x-5">
          <FontAwesomeIcon icon={faUser} className="text-black cursor-pointer"/>
          <FontAwesomeIcon icon={faShoppingCart} className="text-black cursor-pointer"/>
        </div>
      </div>
    </div>
  );
}

export default App;
