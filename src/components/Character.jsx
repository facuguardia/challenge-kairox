import React, { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
// Context
import AppContext from "../context/AppContext";
// API
import { characterName } from "../api/getApi";

function Character() {
  const { character } = useContext(AppContext);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    characterName(params.name);
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
