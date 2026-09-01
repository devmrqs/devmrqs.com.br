import { useState, useRef, useEffect } from "react";

// Styles
import {
  themeButtonClasses,
  dropdownContainerClasses,
} from "../styles/sharedClasses";

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
        className="bi bi-translate inline-block mr-2.5 text-lg hover:text-blackLO hover:scale-110 duration-500 cursor-pointer"
        onClick={() => setOpen(!open)}
      ></i>

      {open && (
        <div className={dropdownContainerClasses}>
          <button
            className={`${themeButtonClasses}`}
            onClick={() => handleSelect("en")}
          >
            <span>English</span>
            {language === "en" && (
              <span className="h-2 w-2 rounded-full bg-blackVLO"></span>
            )}
          </button>
          <button
            className={themeButtonClasses}
            onClick={() => handleSelect("pt")}
          >
            <span>Português</span>
            {language === "pt" && (
              <span className="h-2 w-2 rounded-full bg-blackVLO"></span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
