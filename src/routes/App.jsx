import { Routes, Route } from "react-router-dom";
// Pages
import Home from "../pages/Home";
import PageListCharacter from "../pages/PageListCharacter";
import LandingPage from "../pages/LandingPage";
// Components
import Character from "../components/Character";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/character/:name" element={<Character />} />
        <Route path="/character-list" element={<PageListCharacter />} />
      </Routes>
    </div>
  );
}

export default App;
