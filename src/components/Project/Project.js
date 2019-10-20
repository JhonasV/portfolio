import React, { useEffect } from "react";

const Project = props => {
  useEffect(() => {
    console.log(props);
  }, []);

  return <h1>Project info</h1>;
};

export default Project;
