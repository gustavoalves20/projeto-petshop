import { faPaw, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  return (
    <header className="fixed z-50 w-full bg-white shadow-md">
      <div className="flex justify-between items-center py-4 max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faPaw} />
          <span className="font-bold text-lg">Pet Shop</span>
        </div>
        <nav className="flex gap-8">
          {["Início", "Loja", "Sobre nós", "Agendamento"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="hover:text-blue-500 font-semibold"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-8">
          <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
          <FontAwesomeIcon icon={faShoppingCart} className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default NavBar;