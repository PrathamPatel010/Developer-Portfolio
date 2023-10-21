import './App.css';
import Banner from './components/Banner';
import NavbarComponent from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <NavbarComponent />
      <Banner />
      <Skills />
      <Projects />
    </>
  )
}

export default App
