import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { characterName } from "../API/getApi";

function Character() {
  // const [character, setCharacter ] = useState(null);
  const params = useParams();

  // useEffect(() => {
  //   characterName(params.name);
  // }, []);

  return <>
  <h1>{params.name}</h1>
  {/* <p>{character.gender}</p> */}
  </>;
}

export default Character;
