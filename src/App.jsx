import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Character from "./components/Character";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:name" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
