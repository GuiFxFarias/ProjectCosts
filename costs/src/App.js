import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contato from "./components/pages/Contato";
import Empresa from "./components/pages/Empresa";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects";
import NewProject from "./components/pages/NewProject";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Container customClass="minHeight">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Contato" element={<Contato />}></Route>
          <Route path="/Empresa" element={<Empresa />}></Route>
          <Route path="/NewProject" element={<NewProject />}></Route>
        </Routes>
      </Container>
      <Footer></Footer>
    </Router>
  );
}

export default App;
