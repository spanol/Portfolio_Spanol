import React, { useState, useEffect } from "react";

import Abilities from "./abilities";
import getFromApi from "../../services/api";
const AbilitiesContainer = () => {
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    getFromApi("abilities", setAbilities);
  }, []);

  return <Abilities abilities={abilities} />;
};

export default AbilitiesContainer;
