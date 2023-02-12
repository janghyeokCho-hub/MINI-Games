import { Route, Routes } from "react-router-dom";
import LeftSideBar from "./LeftSideBar";
import Home from "./container/home";
import Tetris from "./container/tetris";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <LeftSideBar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/tetris" element={<Tetris />} />
      </Routes>
    </div>
  );
}

export default App;
