import perfil from "../assets/perfil.png";

const Header = () => {
  return (
    <div className="flex flex-col items-center text-center sm:flex-row sm:text-left w-full max-w-3xl mb-8 sm:mb-15 select-none">
      <img
        src={perfil}
        alt=""
        className="rounded-full select-none h-auto w-24 sm:w-28"
      />
      <div className="flex flex-col mt-4 sm:mt-0 sm:ml-6 justify-center items-center sm:items-start">
        <h3 className="font-bold text-lg mb-1.5 select-text">
          Ângelo M. Ferreira
        </h3>
        <p className="font-normal text-base text-blackVLO select-text">
          Desenvolvedor Front-end & entusiasta por animações
        </p>
        <div className="flex flex-col sm:flex-row justify-start mt-4 items-center gap-3 sm:gap-0 select-none">
          <div className="flex items-center">
            <i className="bi bi-geo mr-2 text-base text-blackLO"></i>
            <p className="text-blackVLO text-base">Brasil - RJ</p>
          </div>
          <i className="bi bi-circle-fill text-[3px] text-blackLO mx-5 hidden sm:inline-block"></i>
          {/* badge "Disponível para trabalhos" igual */}
        </div>
      </div>
    </div>
  );
};

export default Header;
