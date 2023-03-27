import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LineUp from "./pages/LineUp";
import Partners from "./pages/Partners";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="line" element={<LineUp />} />
        <Route path="partners" element={<Partners />} />
      </Routes>
    </>
  );
}

export default App;
