import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    isActive
      ? "bg-[rgba(128,139,114,0.2)] px-5 py-2 -my-2 rounded-full duration-500 text-[rgba(0,0,0,0.8)]"
      : "px-3 py-2 -my-2 rounded-full hover:text-[rgba(0,0,0,0.8)] duration-500";

  return (
    <div className="flex flex-row mt-24 justify-between items-center gap-3 select-none">
      <nav className="bg-white flex justify-between items-center gap-6 rounded-full p-3 w-3xl border-[0.5px] border-[rgba(0,0,0,0.3)] text-[rgba(0,0,0,0.6)]">
        <div className="flex gap-6 font-semibold ml-0.5 text-base">
          <NavLink to="/" className={linkClasses}>
            Início
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            Sobre
          </NavLink>
          <NavLink to="/portfolio" className={linkClasses}>
            Portfólio
          </NavLink>
        </div>
        <i className="bi bi-translate mr-5 text-xl hover:text-[rgba(0,0,0,0.8)] hover:scale-110 duration-500"></i>
      </nav>
      <a
        href="https://www.linkedin.com/in/devmrqs/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[rgba(255,255,255,0.7)] px-4.5 py-3 border-[0.5px] border-[rgba(0,0,0,0.3)] text-[rgb(0,0,0,0.8)] rounded-full hover:scale-110 hover:bg-[rgba(255,255,255,0.85)] duration-500 font-bold"
      >
        In
      </a>
    </div>
  );
};

export default Navbar;
