import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";

import Contact from "./components/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
