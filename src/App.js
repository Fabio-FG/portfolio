import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import ContactForm from "./Pages/ContactForm/ContactForm";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact-me" element={<ContactForm/>} />
      </Routes>
     
      
    </div>
  );
}

export default App;
