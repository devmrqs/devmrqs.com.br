import Footer from "../components/Footer";
import { usePageTitle } from "../hooks/usePageTitle";
import { useLanguage } from "../i18n/useLanguage";

const About = () => {
  const { t } = useLanguage();
  usePageTitle(t.pageTitles.about);

  return (
    <div>
      <div className="flex flex-col gap-5">
        <h1 className="text-base font-bold">{t.about.title}</h1>
        <p className="text-[14.5px] font-semibold text-blackVLO">
          {t.about.p1}
        </p>
        <p className="text-[14.5px] font-semibold text-blackVLO">
          {t.about.p2}
        </p>
        <p className="text-[14.5px] font-semibold text-blackVLO">
          {t.about.p3}
        </p>
        <p className="text-[14.5px] font-semibold text-blackVLO">
          {t.about.p4}
        </p>
        <div className="h-px bg-blackLine w-full mb-7 mt-5 select-none"></div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
