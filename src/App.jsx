import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Loader from './components/Loader';
import NavbarComponent from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ProjectPage from './ProjectPage';
import {Contact} from "./components/Contact.jsx";

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  }, [])


  return (
    <Router>
      <Routes>
        <Route path="/" element={showLoader ? <Loader /> : <Home />} />
        <Route path="/project/:projectID" element={showLoader ? <Loader /> : <ProjectPage />} />
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
      <Contact/>
      <Footer />
    </>
  )
}

export default App;