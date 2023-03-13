import { useContext } from "react";
// Context
import AppContext from "../context/AppContext";
// Icons
import { BsTrash } from "react-icons/bs";

function CharacterList() {
  const { selectedCharacters, setSelectedCharacters } = useContext(AppContext);

  const characterMap = {};
  selectedCharacters.forEach((character) => {
    characterMap[character.name] = character;
  });

  const uniqueCharacters = Object.values(characterMap);

  const removeCharacter = (character) => {
    const updatedCharacters = selectedCharacters.filter(
      (c) => c.name !== character.name
    );
    setSelectedCharacters(updatedCharacters);
  };

  return (
    <>
      {uniqueCharacters.map((character) => (
        <div
          key={character.name}
          className="relative flex flex-col items-center gap-3 p-10 bg-gray-700/50 rounded-2xl"
        >
          <div className="absolute bottom-3 right-4 text-gray-300 hover:text-blue-400 transform hover:scale-125 transition-all">
            <button onClick={() => removeCharacter(character)}>
              <BsTrash />
            </button>
          </div>
          <div className="pt-5">
            <p>Name: {character.name}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair color: {character.hair_color}</p>
            <p>Skin color: {character.skin_color}</p>
            <p>Eye color: {character.eye_color}</p>
            <p>Birth year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default CharacterList;
