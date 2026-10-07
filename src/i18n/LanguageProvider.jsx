import { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import pt from "./pt";
import en from "./en";

const dictionaries = { pt, en };

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "pt",
  );

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const t = dictionaries[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
