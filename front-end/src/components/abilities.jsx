import React,{useState,useEffect} from "react";

import getFromApi from "../services/api";
const Abilities = () => {
    const [abilities, setAbilities] = useState([]);
    useEffect(() => {
        getFromApi("abilities", setAbilities);
    }, []);
const style = {
    width: "90%",
}
  return (
    <section className="abilities" id="abilities">
      <h1 className="heading">
        {" "}
         <span>my</span> abilities{" "}
      </h1>
      <div className="content">
      <h3 style={style}>HTML 5</h3>
      </div>
      <div className="content">
      <h3 style={style}>HTML 5</h3>
      </div>
      <div className="content">
      <h3 style={style}>HTML 5</h3>
      </div>
      <div className="content">
      <h3 style={style}>HTML 5</h3>
      </div>
      <div className="content">
      <h3 style={style}>HTML 5</h3>
      </div>
      </section>
  );
};

export default Abilities;