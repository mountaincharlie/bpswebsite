import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Approach from "./pages/Approach/Approach";
import Projects from "./pages/Projects/Projects";
import Collaborators from "./pages/Collaborators/Collaborators";

function App() {
  console.log('running app')

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/collaborators" element={<Collaborators />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  )
}

export default App
