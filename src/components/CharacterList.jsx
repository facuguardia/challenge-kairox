import React, { useContext } from "react";
// Context
import AppContext from "../context/AppContext";

function CharacterList() {
  const { selectedCharacters } = useContext(AppContext);
  return (
    <>
      {selectedCharacters.map((character) => (
        <div key={character.name} className="flex flex-col items-center gap-2 p-10">
          <p>Name: {character.name}</p>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
          <p>Hair color: {character.hair_color}</p>
          <p>Skin color: {character.skin_color}</p>
          <p>Eye color: {character.eye_color}</p>
          <p>Birth year: {character.birth_year}</p>
          <p>Gender: {character.gender}</p>
        </div>
      ))}
    </>
  );
}

export default CharacterList;
