import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import NavbarComponent from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ProjectPage from './ProjectPage';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectID" element={<ProjectPage />} />
      </Routes>
    </Router >
  )
};

const Home = () => {
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

export default App;