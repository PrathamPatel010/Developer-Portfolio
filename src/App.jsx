import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Loader from './components/Loader';
import NavbarComponent from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    window.addEventListener('load', () => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {
        isloading ? <Loader /> : (
          <>
            <NavbarComponent />
            <Banner />
            <Skills />
            <Projects />
            <Blogs />
            <Footer />
          </>
        )}
    </>
  )
}

export default App;