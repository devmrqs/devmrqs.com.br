import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Início</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/portfolio">Portólio</Link>
    </nav>
  );
};

export default Navbar;
