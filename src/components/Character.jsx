import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Context
import AppContext from "../context/AppContext";
// Components
import Spinner from "../components/Spinner";
// Icons
import { IoIosArrowBack } from "react-icons/io";
// Images
import ImgLogo from "../assets/logo.png";

function Character() {
  // Obtengo el contexto de la app
  const { selectedCharacters } = useContext(AppContext);
  // Estado para guardar el personaje seleccionado
  const [character, setCharacter] = useState(null);
  // Obtengo el nombre del personaje desde los params
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Busco el personaje en el array de personajes seleccionados
    const selectedCharacter = selectedCharacters.find(
      (character) => character.name === params.name
    );
    // Seteo el personaje en el estado
    setCharacter(selectedCharacter);
  }, [selectedCharacters]);

  function handleBack() {
    navigate("/home");
  }

  return (
    <>
      {character ? (
        <div className="p-5">
          <div className="flex justify-between items-center pb-5">
            <button onClick={handleBack}>
              <IoIosArrowBack className="text-2xl hover:text-blue-400 transform hover:scale-125 transition-all" />
            </button>
            <div>
              <img src={ImgLogo} alt="logo star wars" className="w-24" />
            </div>
          </div>
          <div className="flex flex-col gap-2 p-10 text-[#39ff14] text-2xl font-medium ">
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
      ) : (
        <div className="absolute top-[20%] left-[50%]">
          <Spinner />
        </div>
      )}
    </>
  );
}

export default Character;
