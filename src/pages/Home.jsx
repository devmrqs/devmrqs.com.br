import Footer from "../components/Footer";
import { usePageTitle } from "../hooks/usePageTitle";

const Home = () => {
  usePageTitle("Ângelo Ferreira | Front-end Developer & Designer");

  return (
    <div>
      <div className="flex flex-col gap-5">
        <h1 className="text-base font-bold">Prazer, me chamo Ângelo!</h1>
        <p className="text-[14.5px] font-semibold text-blackVLO">
          Sou desenvolvedor frontend e com foco em interfaces animadas e
          interativas, como o rebrand da{" "}
          <a
            href="https://flordamata.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black"
          >
            Flor da Mata.
          </a>
        </p>
        <p className="text-[14.5px] font-semibold text-blackVLO">
          Meu foco hoje é desenvolvimento web, trabalhando com{" "}
          <span className="italic">
            JavaScript, React, Node.js, GSAP e Tailwind CSS.
          </span>
        </p>
        <p className="text-[14.5px] font-semibold text-blackVLO">
          Atualmente estou disponível para novas oportunidades.
        </p>
        <div>
          <a href="" className="font-bold text-black text-[15px] select-none">
            Entre em contato.
          </a>
        </div>
        <div className="h-px bg-blackLine w-2xl mb-7 mt-5 select-none"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
