import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    isActive
      ? "bg-[rgba(128,139,114,0.2)] px-5 py-2 -my-2 rounded-full duration-500 text-[rgba(0,0,0,0.8)]"
      : "px-3 py-2 -my-2 rounded-full hover:text-[rgba(0,0,0,0.8)] duration-500";

  return (
    <nav className="bg-white flex justify-between items-center gap-6 rounded-[50px] p-3 w-3xl border-[0.5px] border-[rgba(0,0,0,0.3)] select-none text-[rgba(0,0,0,0.6)] mt-24">
      <div className="flex gap-6 font-semibold ml-1 text-base">
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
  );
};

export default Navbar;
