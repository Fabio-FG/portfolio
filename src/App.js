import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollPageTop/ScrollPageTop";


function App() {
  return (
    <div className="App">
    <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
     
     
    </div>
  );
}

export default App;
