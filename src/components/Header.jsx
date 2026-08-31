import perfil from "../assets/perfil.png";
import { shadowBox } from "../styles/sharedClasses";

const Header = () => {
  return (
    <div className="flex flex-row justify-start w-3xl mb-8 select-none">
      <img
        src={perfil}
        alt=""
        className={`rounded-full select-none h-auto w-28 ${shadowBox}`}
      />
      <div className="flex flex-col ml-6 justify-center">
        <h3 className="font-bold text-lg mb-1.5 select-text">
          Ângelo M. Ferreira
        </h3>
        <p className="font-normal text-base text-[rgba(0,0,0,0.6)] select-text">
          Desenvolvedor Front-end & entusiasta por animações
        </p>
        <div className="flex justify-start mt-4 items-center select-none">
          <i className="bi bi-geo mr-2 text-base text-[rgba(0,0,0,0.7)]"></i>
          <p className="text-[rgba(0,0,0,0.7)] text-base">Brasil - RJ</p>
          <i className="bi bi-circle-fill text-[3px] text-[rgba(0,0,0,0.7)] ml-5 mr-5"></i>
          <div className="bg-[rgba(116,187,113,0.2)] flex items-center justify-center gap-2 py-1.5 px-4 rounded-full border-[0.5px] border-[rgb(44,85,62,0.2)] duration-500">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[rgb(62,121,87)] opacity-75"></span>
              <span className="relative rounded-full h-2.5 w-2.5 bg-[rgb(62,121,87)]"></span>
            </span>
            <p className="text-xs text-[rgb(44,85,62)] font-semibold">
              Disponível para trabalhos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
