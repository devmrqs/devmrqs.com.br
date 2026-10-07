import perfil from "../assets/perfil.png";
import { useLanguage } from "../i18n/useLanguage";

const Header = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center text-center sm:flex-row sm:text-left w-full max-w-3xl mb-8 sm:mb-15 select-none">
      <img
        src={perfil}
        alt=""
        className="rounded-full select-none h-auto w-24 sm:w-28"
      />
      <div className="flex flex-col mt-4 sm:mt-0 sm:ml-6 justify-center items-center sm:items-start">
        <h3 className="font-bold text-lg mb-1.5 select-text">
          {t.header.name}
        </h3>
        <p className="font-normal text-base text-blackVLO select-text">
          {t.header.role}
        </p>
        <div className="flex flex-col sm:flex-row justify-start mt-4 items-center gap-3 sm:gap-0 select-none">
          <div className="flex items-center">
            <i className="bi bi-geo mr-2 text-base text-blackLO"></i>
            <p className="text-blackVLO text-base">{t.header.location}</p>
          </div>
          <i className="bi bi-circle-fill text-[3px] text-blackLO mx-5 hidden sm:inline-block"></i>
          <div className="bg-[rgba(116,187,113,0.2)] flex items-center justify-center gap-2 py-1.5 px-4 rounded-full border-[0.5px] border-[rgb(44,85,62,0.2)] duration-500">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[rgb(62,121,87)] opacity-75"></span>
              <span className="relative rounded-full h-2.5 w-2.5 bg-[rgb(62,121,87)]"></span>
            </span>
            <p className="text-xs text-[rgb(44,85,62)] font-semibold">
              {t.header.available}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
