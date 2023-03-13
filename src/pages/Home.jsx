import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// Context
import AppContext from "../context/AppContext";
// API
import { allCharacters } from "../api/getApi";
// Components
import Spinner from "../components/Spinner";
// Images
import ImgLogo from "../assets/logo.png";
// Icons
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { BiSearch } from "react-icons/bi";

function Home() {
  const {
    characters,
    setCharacters,
    currentPage,
    setCurrentPage,
    searchTerm,
    setSearchTerm,
    selectedCharacters,
    setSelectedCharacters,
  } = useContext(AppContext);

  useEffect(() => {
    // Llamamos a la función que nos devuelve los personajes
    allCharacters(setCharacters, currentPage, searchTerm);
    // Pasamos currentPage y searchTerm como dependencias para que se vuelva a ejecutar la función cuando cambien estos valores
  }, [currentPage, searchTerm]);

  useEffect(() => {
    // Seteamos currentPage a 1 cuando cambia searchTerm para que pueda buscar los personajes en todas las paginas
    setCurrentPage(1);
  }, [searchTerm]);

  // Función para manejar el click en un personaje
  const handleCharacterSelect = (character) => {
    setSelectedCharacters([...selectedCharacters, character]);
  };

  // Función para cambiar de página
  const handlePageChange = (newPage) => {
    // Cambiamos el estado currentPage
    setCurrentPage(newPage);
  };
  // Función para manejar el input de búsqueda
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col justify-evenly items-center w-full h-screen">
      <div className="flex justify-between items-center w-full p-5">
        <div>
          <Link to="/">
            <img src={ImgLogo} alt="Logo Star Wars" className="w-24" />
          </Link>
        </div>
        <div className="">
          {/* Input de búsqueda */}
          <BiSearch className="absolute top-9 right-7 text-black" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="text-black rounded-md items-center  pl-4 py-1 "
          />
        </div>
      </div>

      <div className="grid grid-cols-3 items-center gap-4 w-full h-full">
        {/* Mapeo de los personajes */}
        {characters !== null ? (
          <>
            {Array.isArray(characters) && characters.length > 0
              ? characters.map((character, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-center text-[#39ff14] hover:text-blue-400 "
                    >
                      <Link
                        to={`/character/${character.name}`}
                        onClick={() => handleCharacterSelect(character)}
                      >
                        {character.name}
                      </Link>
                    </div>
                  );
                })
              : null}
          </>
        ) : (
          // Mensajo de carga
          <div className="absolute top-[20%] left-[50%]">
            <Spinner />
          </div>
        )}
      </div>
      <div className="flex items-center gap-4 pb-5 text-3xl">
        {/* Botones para cambiar de página */}
        {characters !== null && characters.previous !== null && (
          <button onClick={() => handlePageChange(currentPage - 1)}>
            <MdKeyboardDoubleArrowLeft className="hover:text-blue-400 transform hover:scale-125 transition-all" />
          </button>
        )}
        {currentPage}
        {characters !== null && characters.next !== null && (
          <button onClick={() => handlePageChange(currentPage + 1)}>
            <MdKeyboardDoubleArrowRight className="hover:text-blue-400 transform hover:scale-125 transition-all" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
