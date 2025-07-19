import React from "react";
import { logoIconsList } from "../../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div>
      <a
        href={icon.link}
        target="_blank"
        className="h-full relative flex-col-center marquee-item"
      >
        <img
          src={icon.imgPath}
          alt={icon.title}
          className="absolute bottom-0  w-30 h-30"
        />
        <h2 className="w-full absolute top-0 text-center">{icon.title}</h2>
      </a>
    </div>
  );
};
const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-60">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}

          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
