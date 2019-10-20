import React from "react";

const SocialIcon = ({ name, url, icon }) => {
  return (
    <a
      className="mr-2"
      name={name}
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      <h1 className="text-white">
        <i className={`fab ${icon}`}></i>
      </h1>
    </a>
  );
};

export default SocialIcon;
