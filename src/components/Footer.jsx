import SocialLink from "./SocialLink";
import { useLanguage } from "../i18n/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-10 select-none">
      <div className="flex flex-row flex-wrap gap-3 sm:gap-5">
        <SocialLink
          href="https://www.linkedin.com/in/devmrqs/"
          icon="bi-linkedin"
          label="LinkedIn"
        />
        <SocialLink
          href="https://github.com/devmrqs"
          icon="bi-github"
          label="GitHub"
        />
        <SocialLink
          href="https://www.instagram.com/devmrqs/"
          icon="bi-instagram"
          label="Instagram"
        />
      </div>
      <p className="font-bold text-[10px] sm:text-xs text-blackLO">
        {t.footer.copyright}
      </p>
    </div>
  );
};

export default Footer;
