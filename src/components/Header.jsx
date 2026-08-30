import perfil from "../assets/perfil.png";

const Header = () => {
  return (
    <div className="select-none flex flex-row justify-start">
      <img
        src={perfil}
        alt=""
        className="rounded-full select-none h-auto w-25"
      />
      <div className="flex flex-col ml-7 justify-center">
        <h3 className="font-bold text-base mb-1">Ângelo M. Ferreira</h3>
        <p className="font-normal text-sm text-[rgba(0,0,0,0.6)]">
          Desenvolvedor Front-end & entusiasta por animações
        </p>
      </div>
    </div>
  );
};

export default Header;
