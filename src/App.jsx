import { Route, Routes } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col justify-center items-center px-5 pb-16">
      <Navbar />
      <div className="flex justify-start w-full max-w-3xl">
        <Header />
      </div>
      <div className="w-full max-w-2xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
