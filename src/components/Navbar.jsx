import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from "react-router-dom"; // Usa Link de react-router-dom

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center"> {/* Cambiado a Link */}
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight">Consultorio</span>
            </Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>{item.label}</Link> {/* Cambiado a Link */}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-4 items-center">

            <a
              href="http://localhost:3000/Consultorio/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 border rounded-md font-semibold"
            >
              Iniciar sesion
            </a>

            <Link to="/infocontacto" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md font-semibold">
              Contáctanos
            </Link>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link to={item.href}>{item.label}</Link> {/* Cambiado a Link */}
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-5">
              <Link to="#" className="py-2 px-3 border rounded-md">
                Iniciar sesion
              </Link>
              <Link
                to="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
