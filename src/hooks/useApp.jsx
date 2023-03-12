import { useState } from "react";

const useApp = () => {
  // Estado para guardar los personajes
  const [characters, setCharacters] = useState(null);
  // Estado para guardar la página actual
  const [currentPage, setCurrentPage] = useState(1);
  // Estado para guardar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");
  // Estado para guardar los personajes seleccionados
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  return {
    characters,
    setCharacters,
    currentPage,
    setCurrentPage,
    searchTerm,
    setSearchTerm,
    selectedCharacters,
    setSelectedCharacters,
  };
};

export default useApp;
