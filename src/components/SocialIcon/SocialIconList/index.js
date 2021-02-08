import React from "react";
import SocialIcon from "../SocialIcon";
import Networks from "../../../assets/data/networks.json";

const SocialIconList = () => {
  const renderSocialIconList = () => {
    return Networks.map((icon) => (
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
