import React from "react";
import SocialIcon from "../SocialIcon";

const SOCIAL_NETWORKS = [
  {
    id: 1,
    name: "linkedin",
    url: "https://www.linkedin.com/in/nelson-jhonas-veras-amador-b9b896150/",
    icon: "fa-linkedin"
  },
  {
    id: 2,
    name: "github",
    url: "https://github.com/JhonasV",
    icon: "fa-github"
  }
];

const SocialIconList = () => {
  const renderSocialIconList = () => {
    return SOCIAL_NETWORKS.map(icon => (
      <SocialIcon
        key={icon.id}
        name={icon.name}
        url={icon.url}
        icon={icon.icon}
      />
    ));
  };
  return renderSocialIconList();
};

export default SocialIconList;
