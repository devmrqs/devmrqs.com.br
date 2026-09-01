import Footer from "../components/Footer";
import { usePageTitle } from "../hooks/usePageTitle";

const About = () => {
  usePageTitle("Ângelo Ferreira | About");

  return (
    <div>
      <div className="flex flex-col gap-5">
        <h1 className="text-base font-bold">Opa, olha eu aqui de novo!</h1>
        <p className="text-[14.5px] font-semibold text-blackVLO">
          Olá, sou o Ângelo. Passei um ano estudando design sozinho, o que me
          deu um olhar muito atento para páginas bem pensadas foi esse olhar que
          me levou ao desenvolvimento web.
        </p>
        <p className="text-[14.5px] font-semibold text-blackVLO">
          Ainda não comecei minha carreira formalmente, mas já construí bastante
          coisa e sigo evoluindo todo dia. O que me move é a paixão por
          interfaces interativas. Uma tela bem construída não faz o usuário
          apenas entrar no site, faz o usuário fazer parte dele.
        </p>
        <p className="text-[14.5px] font-semibold text-blackVLO">
          Como desenvolvedor front-end, eu trabalho com React e GSAP para criar
          interfaces animadas e interativas. Eu estou expandindo para Node.js no
          back-end, com o objetivo de me tornar fullstack.
        </p>
        <p className="text-[14.5px] font-semibold text-blackVLO">
          Quando não estou estudando, gosto de maratonar séries com minha
          namorada, curtir tempo em família, jogar e ler.
        </p>
        <div className="h-px bg-blackLine w-2xl mb-7 mt-5 select-none"></div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
