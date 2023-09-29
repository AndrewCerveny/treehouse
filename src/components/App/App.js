import "./App.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Homepage from "../Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Admission from "../Admission/Admission";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admission" element={<Admission />} />
      </Routes>
    </div>
  );
}

export default App;
