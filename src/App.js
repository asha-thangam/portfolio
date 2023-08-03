// import './App.css';
import Navbar from "./pages/Navbar"
import About from "./pages/About"
import Home from './pages/Home';
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"

function App() {
  return (
    <main>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  );
}

export default App;
