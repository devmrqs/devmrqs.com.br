import Footer from "../components/Footer";
import { usePageTitle } from "../hooks/usePageTitle";
import { useLanguage } from "../i18n/useLanguage";

const Home = () => {
  const { t } = useLanguage();
  usePageTitle(t.pageTitles.home);

  return (
    <div>
      <div className="flex flex-col gap-5">
        <h1 className="text-base font-bold">{t.home.title}</h1>
        <p className="text-[14.5px] font-semibold text-blackVLO">
          {t.home.p1Before}
          <a
            href="https://flordamata.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-ink"
          >
            {t.home.p1Link}
          </a>
        </p>
        <p className="text-[14.5px] font-semibold text-blackVLO">
          {t.home.p2Before}
          <span className="italic">{t.home.p2Stack}</span>
        </p>
        <p className="text-[14.5px] font-semibold text-blackVLO">{t.home.p3}</p>
        <div>
          <a
            href="https://www.linkedin.com/in/devmrqs/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-ink text-[15px] select-none"
          >
            {t.home.contact}
          </a>
        </div>
        <div className="h-px bg-blackLine w-full mb-7 mt-5 select-none"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
