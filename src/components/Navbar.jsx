import { NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    isActive
      ? "bg-[rgb(135,150,118,0.25)] px-5 py-1.5 -my-2 rounded-full duration-500 text-[rgba(0,0,0,0.8)]"
      : "px-3 py-2 -my-2 rounded-full hover:text-[rgba(0,0,0,0.8)] duration-500";

  return (
    <div className="flex flex-col select-none justify-center items-center">
      <div className="flex flex-row mt-20 justify-between items-center gap-2 select-none mb-7">
        <nav className="bg-white flex justify-between items-center gap-4 rounded-full p-2.5 w-2xl border-[0.5px] border-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,0.6)]">
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
          className="bg-[rgba(255,255,255,0.3)] px-4 py-2.5 border-[0.5px] border-[rgba(0,0,0,0.08)] text-[rgb(0,0,0,0.8)] text-base rounded-full hover:scale-110 hover:bg-white duration-500 font-bold"
        >
          In
        </a>
        <a
          className="bi bi-github bg-[rgba(255,255,255,0.3)] px-3.5 py-2.5 border-[0.5px] border-[rgba(0,0,0,0.08)] text-[rgb(0,0,0,0.8)] text-base rounded-full hover:scale-110 hover:bg-white duration-500 font-bold"
          href="https://github.com/devmrqs"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
      <div className="h-px bg-[rgba(0,0,0,0.1)] w-3xl mb-7"></div>
    </div>
  );
};

export default Navbar;
