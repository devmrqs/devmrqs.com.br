import { shadowBox } from "../styles/sharedClasses";

const Projects = ({ href, icon, title, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${shadowBox} p-4 rounded-2xl select-none`}
    >
      <div className="flex flex-row gap-2 items-center mb-1">
        <i className={`bi ${icon} text-2xl`}></i>
        <h2 className="text-base font-bold">{title}</h2>
      </div>
      <p className="text-[14.5px] font-semibold text-blackVLO">{label}</p>
    </a>
  );
};

export default Projects;
