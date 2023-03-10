import React, { useState } from "react";
// Components
import CharacterList from "../components/CharacterList";

function PageListCharacter() {
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  return (
    <>
      <h1>Favorites</h1>
      <CharacterList characters={selectedCharacters} />
    </>
  );
}

export default PageListCharacter;
