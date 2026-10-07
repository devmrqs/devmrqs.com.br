import { NavLink } from "react-router-dom";

// Styles
import { shadowBox, roundButtonClasses } from "../styles/sharedClasses";

// Components
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    isActive
      ? "bg-mossLO px-3 sm:px-5 py-1.5 -my-2 rounded-full duration-500 text-blackLO"
      : "px-3 py-2 -my-2 rounded-full duration-500";

  return (
    <div className="flex flex-col select-none justify-center items-center w-full">
      <div className="flex flex-row mt-8 sm:mt-20 justify-between items-center gap-2 mb-7 w-full max-w-3xl">
        <nav
          className={`bg-white flex flex-1 min-w-0 justify-between items-center gap-2 sm:gap-4 rounded-2xl p-2.5 text-blackVLO ${shadowBox}`}
        >
          <div className="flex gap-1 sm:gap-3 font-semibold ml-1 text-sm sm:text-base justify-center items-center">
            {/* NavLinks iguais */}
          </div>
          <div className="flex flex-row gap-1 sm:gap-3">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Esconde os botões redondos no celular */}
        <a
          href="https://www.linkedin.com/in/devmrqs/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${roundButtonClasses} hidden sm:inline-block`}
        >
          In
        </a>
        <a
          className={`bi bi-github ${roundButtonClasses} hidden sm:inline-block`}
          href="https://github.com/devmrqs"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
      <div className="h-px bg-blackLine w-full max-w-3xl mb-7"></div>
    </div>
  );
};

export default Navbar;
