import { useState, useRef, useEffect } from "react";

const ThemeSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "system",
  );
  const containerRef = useRef(null);

  // Descobre se o SO do usuário prefere dark mode
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Decide a aparência final combinando escolha do usuário + sistema
  const isDark = theme === "dark" || (theme === "system" && prefersDark);

  function handleSelect(value) {
    setTheme(value);
    localStorage.setItem("theme", value);
    setOpen(false);
  }

  // Aplica/remove a classe "dark" no <html> sempre que isDark mudar
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <i
        className="bi bi-brightness-high inline-block mr-2.5 text-lg hover:text-[rgba(0,0,0,0.8)] hover:scale-110 duration-500 cursor-pointer"
        onClick={() => setOpen(!open)}
      ></i>

      {open && (
        <div className="absolute top-full right-0 mt-2.5 bg-white border-[0.5px] border-[rgba(0,0,0,0.1)] rounded-xl shadow-md flex flex-col overflow-hidden w-36 z-50 py-1.5 px-2">
          <button
            className="w-full flex items-center gap-2.5 px-4 py-2 text-base hover:bg-[rgba(0,0,0,0.05)] hover:rounded-full duration-300"
            onClick={() => handleSelect("light")}
          >
            <i className="bi bi-brightness-high-fill"></i>
            <span>Claro</span>
          </button>
          <button
            className="w-full flex items-center gap-2.5 px-4 py-2 text-base hover:bg-[rgba(0,0,0,0.05)] hover:rounded-full duration-300"
            onClick={() => handleSelect("dark")}
          >
            <i className="bi bi-moon-fill"></i>
            <span>Escuro</span>
          </button>
          <button
            className="w-full flex items-center gap-2.5 px-4 py-2 text-base hover:bg-[rgba(0,0,0,0.05)] hover:rounded-full duration-300"
            onClick={() => handleSelect("system")}
          >
            <i className="bi bi-laptop"></i>
            <span>Sistema</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
