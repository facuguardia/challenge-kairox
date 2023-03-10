import React from "react";

function CharacterList({ characters }) {
  return (
    <>
      {characters.map((character) => (
        <div key={character.name}>
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
