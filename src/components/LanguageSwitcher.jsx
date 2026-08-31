import { useState, useRef, useEffect } from "react";

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("pt");
  const containerRef = useRef(null);

  function handleSelect(lang) {
    setLanguage(lang);
    setOpen(false);
  }

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
        className="bi bi-translate inline-block mr-2.5 text-lg hover:text-[rgba(0,0,0,0.8)] hover:scale-110 duration-500 cursor-pointer"
        onClick={() => setOpen(!open)}
      ></i>

      {open && (
        <div className="absolute top-full right-0 mt-2.5 bg-white border-[0.5px] border-[rgba(0,0,0,0.1)] rounded-xl shadow-md flex flex-col overflow-hidden w-36 z-50 py-2 px-1.5">
          <button
            className="w-full flex items-center justify-between px-4 py-2 text-base hover:bg-[rgba(0,0,0,0.05)] hover:rounded-full duration-300"
            onClick={() => handleSelect("en")}
          >
            <span>English</span>
            {language === "en" && (
              <span className="h-2 w-2 rounded-full bg-[rgba(0,0,0,0.5)]"></span>
            )}
          </button>
          <button
            className="w-full flex items-center justify-between px-4 py-2 text-base hover:bg-[rgba(0,0,0,0.05)] hover:rounded-full duration-300"
            onClick={() => handleSelect("pt")}
          >
            <span>Português</span>
            {language === "pt" && (
              <span className="h-2 w-2 rounded-full bg-[rgba(0,0,0,0.5)]"></span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
