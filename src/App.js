import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Projects, Contact } from "./pages/index.js";

function App() {
  return (
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/projects" element={<Projects/>} />
           <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter> 
  );
}
      

export default App;
