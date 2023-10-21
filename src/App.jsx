import './App.css';
import Banner from './components/Banner';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
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
      <Blogs />
      <Footer />
    </>
  )
}

export default App
