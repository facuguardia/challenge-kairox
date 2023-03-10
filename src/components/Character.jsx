import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// API
// import { characterName } from "../api/getApi";

function Character() {
  // const [character, setCharacter ] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   characterName(params.name);
  // }, []);

  function handleBack() {
    navigate("/");
  }

  return (
    <>
      <h1>{params.name}</h1>
      <button onClick={handleBack}>Volver</button>
      {/* <p>{character.gender}</p> */}
    </>
  );
}

export default Character;
