import { roundButtonClasses } from "../styles/sharedClasses";

const SocialLink = ({ href, icon, label }) => {
  return (
    <div className="flex flex-row">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${roundButtonClasses} flex flex-row gap-3`}
      >
        <i className={`bi ${icon}`}></i>
        <p>{label}</p>
      </a>
    </div>
  );
};

export default SocialLink;
