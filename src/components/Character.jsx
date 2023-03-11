import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// API
import { characterName } from "../api/getApi";

function Character() {
  const [character, setCharacter] = useState(null);
  console.log(character);
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();

  useEffect(() => {
    characterName(params.name, setCharacter);
  }, []);

  function handleBack() {
    navigate("/home");
  }

  return (
    <>
      <h1>{params?.name}</h1>
      <p>{character?.gender}</p>
      <button onClick={handleBack}>Volver</button>
    </>
  );
}

export default Character;
