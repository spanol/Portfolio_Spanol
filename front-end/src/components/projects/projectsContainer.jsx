import React, { useState, useEffect } from "react";

import getFromApi from "../../services/api";
import Projetcs from "./projects";
const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getFromApi("projects", setProjects);
  }, []);

  return <Projetcs projects={projects} />;
};

export default ProjectsContainer;
