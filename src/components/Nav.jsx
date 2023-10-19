import { Nav, Navbar, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import logo from '../assets/photo.png';

function NavbarComponent() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);

    }, []);


    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar fixed="top" expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img className="img img-fluid" style={{ borderRadius: '50%' }} src={logo} alt="Logo" width="10%" height="10%" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggle-icon">
                        <span className="navbar-toggler-icon"></span>
                    </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? "active-navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? "active-navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === "projects" ? "active-navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')} >Projects</Nav.Link>
                        <Nav.Link href="#blogs" className={activeLink === "blogs" ? "active-navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('blogs')} >Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavbarComponent;