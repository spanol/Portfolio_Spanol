import React, { useState, useEffect } from "react";

import getFromApi from "../services/api";
const Abilities = () => {
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    getFromApi("abilities", setAbilities);
  }, []);

//   const Abilitie = (abilities) => {
//     return (
//       <>
//         {abilities.map(({ _id, language, percent }) => (
//           <div className="content" key={_id}>
//             <h3 style={`width: ${percent}`}>{language}</h3>
//           </div>
//         ))}
//       </>
//     );
//   };

// const style = (percent) => {
//     `width: ${percent}`
// }

  return (
    <section className="abilities" id="abilities">
      <h1 className="heading">
        {" "}
        <span>my</span> abilities{" "}
      </h1>
      {abilities.map(({ _id, language, percent }) => (
        <div className="content" key={_id}>
          <h3>{language}</h3>
        </div>
      ))}
    </section>
  );
};

export default Abilities;
