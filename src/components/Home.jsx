import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allCharacters } from "../API/getApi";

function Home() {
  // Estado para guardar los personajes
  const [characters, setCharacters] = useState(null);
  // Estado para guardar la página actual
  const [currentPage, setCurrentPage] = useState(1);
  // Estado para guardar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Llamamos a la función que nos devuelve los personajes
    allCharacters(setCharacters, currentPage, searchTerm);
    // Pasamos currentPage y searchTerm como dependencias para que se vuelva a ejecutar la función cuando cambien estos valores
  }, [currentPage, searchTerm]);

  useEffect(() => {
    // Seteamos currentPage a 1 cuando cambia searchTerm para que pueda buscar los personajes en todas las paginas
    setCurrentPage(1);
  }, [searchTerm]);


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
    <div>
      <h1>Home</h1>
      {/* Input de búsqueda */}
      <input type="text" value={searchTerm} onChange={handleSearch} />
      {/* Mapeo de los personajes */}
      {characters !== null ? (
        <>
          {Array.isArray(characters) && characters.length > 0 ? characters.map((character, index) => {
            return (
              <div key={index}>
                <Link to={`/character/${character.name}`}>{character.name}</Link>
              </div>
            );
          }) : null }
          {/* Botones para cambiar de página */}
          <div>
            {characters.previous !== null && (
              <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
            )}
            {characters.next !== null && (
              <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            )}
          </div>
        </>
      ) : (
        // Mensajo de carga
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Home;
