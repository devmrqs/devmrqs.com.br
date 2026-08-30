import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    isActive
      ? "bg-[rgb(135,150,118,0.25)] px-4 py-1.5 -my-1.5 rounded-full duration-500 text-[rgba(0,0,0,0.8)]"
      : "px-2.5 py-1.5 -my-1.5 rounded-full hover:text-[rgba(0,0,0,0.8)] duration-500";

  return (
    <div className="flex flex-row mt-24 justify-between items-center gap-2 select-none">
      <nav className="bg-white flex justify-between items-center gap-4 rounded-full p-2 w-2xl border-[0.5px] border-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,0.6)]">
        <div className="flex gap-4 font-semibold ml-0.5 text-sm">
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
        <i className="bi bi-translate mr-3 text-base hover:text-[rgba(0,0,0,0.8)] hover:scale-110 duration-500"></i>
      </nav>
      <a
        href="https://www.linkedin.com/in/devmrqs/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[rgba(255,255,255,0.3)] px-3 py-2 border-[0.5px] border-[rgba(0,0,0,0.08)] text-[rgb(0,0,0,0.8)] text-sm rounded-full hover:scale-110 hover:bg-white duration-500 font-bold"
      >
        In
      </a>
      <a
        className="bi bi-github bg-[rgba(255,255,255,0.3)] px-3 py-2 border-[0.5px] border-[rgba(0,0,0,0.08)] text-[rgb(0,0,0,0.8)] text-sm rounded-full hover:scale-110 hover:bg-white duration-500 font-bold"
        href="https://github.com/devmrqs"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
    </div>
  );
};

export default Navbar;
