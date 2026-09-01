import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 select-none">
      <div className="flex flex-row gap-5">
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
      <p className="font-bold text-xs text-blackLO">
        &copy; 2026 ANGELO M. FERREIRA. TODOS OS DIREITOS RESERVADOS
      </p>
    </div>
  );
};

export default Footer;
