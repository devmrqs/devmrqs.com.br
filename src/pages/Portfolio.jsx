import Footer from "../components/Footer";
import Projects from "../components/Projects";
import { usePageTitle } from "../hooks/usePageTitle";

const Portfolio = () => {
  usePageTitle("Ângelo Ferreira | Portfólio");

  return (
    <div>
      <div className="flex flex-col gap-5">
        <h1 className="text-base font-bold">
          Projetos que venho desenvolvendo.
        </h1>
        <Projects
          href="https://flordamata.vercel.app/"
          icon="bi-flower3"
          title="Flor da Mata"
          label="Site institucional para distribuidora de produtos naturais"
        />
        <div className="h-px bg-blackLine w-2xl mb-7 mt-5 select-none"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
