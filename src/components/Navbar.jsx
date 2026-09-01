import { NavLink } from "react-router-dom";

// Styles
import { shadowBox, roundButtonClasses } from "../styles/sharedClasses";

// Components
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    isActive
      ? "bg-mossLO px-5 py-1.5 -my-2 rounded-full duration-500 text-blackLO"
      : "px-3 py-2 -my-2 rounded-full duration-500";

  return (
    <div className="flex flex-col select-none justify-center items-center">
      <div className="flex flex-row mt-20 justify-between items-center gap-2 mb-7">
        <nav
          className={`bg-white flex justify-between items-center gap-4 rounded-2xl p-2.5 w-2xl text-blackVLO ${shadowBox}`}
        >
          <div className="flex gap-3 font-semibold ml-1 text-base justify-center items-center">
            <NavLink to="/" className={linkClasses}>
              Início
            </NavLink>
            <NavLink to="/about" className={linkClasses}>
              Sobre mim
            </NavLink>
            <NavLink to="/portfolio" className={linkClasses}>
              Portfólio
            </NavLink>
          </div>
          <div className="flex flex-row gap-3">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </nav>
        <a
          href="https://www.linkedin.com/in/devmrqs/"
          target="_blank"
          rel="noopener noreferrer"
          className={roundButtonClasses}
        >
          In
        </a>
        <a
          className={`bi bi-github ${roundButtonClasses}`}
          href="https://github.com/devmrqs"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
      <div className="h-px bg-blackLine w-3xl mb-7"></div>
    </div>
  );
};

export default Navbar;
