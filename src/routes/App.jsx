import { Routes, Route } from "react-router-dom";
// Pages
import Home from "../pages/Home";
import PageListCharacter from "../pages/PageListCharacter";
import LandingPage from "../pages/LandingPage";
// Components
import Character from "../components/Character";
// Context
import AppContext from "../context/AppContext";
import useApp from "../hooks/useApp";

function App() {
  const app = useApp();

  return (
    <div>
      <AppContext.Provider value={app}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/character/:name" element={<Character />} />
          <Route path="/character-list" element={<PageListCharacter />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
