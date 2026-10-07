import Footer from "../components/Footer";
import Projects from "../components/Projects";
import { usePageTitle } from "../hooks/usePageTitle";
import { useLanguage } from "../i18n/useLanguage";

const Portfolio = () => {
  const { t } = useLanguage();
  usePageTitle(t.pageTitles.portfolio);

  return (
    <div>
      <div className="flex flex-col gap-5">
        <h1 className="text-base font-bold">{t.portfolio.title}</h1>
        <Projects
          href="https://flordamata.vercel.app/"
          icon="bi-flower3"
          title={t.portfolio.florDaMata.title}
          label={t.portfolio.florDaMata.label}
        />
        <Projects
          href="https://github.com/devmrqs/miyu"
          icon="bi-robot"
          title={t.portfolio.miyu.title}
          label={t.portfolio.miyu.label}
        />
        <div className="h-px bg-blackLine w-full mb-7 mt-5 select-none"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
