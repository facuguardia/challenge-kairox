import React from "react";
import { useNavigate } from "react-router-dom";
// Components
import CharacterList from "../components/CharacterList";
// Icons
import { IoIosArrowBack } from "react-icons/io";
// Images
import ImgLogo from "../assets/logo.png";

function PageListCharacter() {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/home");
  }

  return (
    <div className="p-5">
      <div className="flex justify-between items-center pb-5">
        <button onClick={handleBack}>
          <IoIosArrowBack className="text-2xl hover:text-blue-400 transform hover:scale-125 transition-all" />
        </button>
        <div>
          <img src={ImgLogo} alt="logo star wars" className="w-24" />
        </div>
      </div>
      <div className="grid grid-cols-3 text-[#39ff14]">
        <CharacterList />
      </div>
    </div>
  );
}

export default PageListCharacter;
