import { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import headerImg from '../assets/header-1.png';
const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); // which word to be displayed
    const [isDeleting, setIsDeleting] = useState(false); // word being typed out or deleting
    const toRotate = ["Web Developer", "Backend Engineer", "Application Developer"]; // words to be displayed
    const [text, setText] = useState(''); // what text to show at the moment
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000; // how much time pass between letter being typed out

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) }
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner">
            <Container>
                <Row id="#home">
                    <Col xs={12} md={6} xl={6} className="order-2 order-md-1">
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I am Pratham Patel `}<span style={{ color: '#a855f7' }} className="wrap">{text}</span></h1>
                        <p>{`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur excepturi temporibus non repudiandae tenetur ipsa recusandae officia eaque cumque facilis! Dolor consequuntur quibusdam atque facere provident rerum repellendus, nulla iusto.`}</p>
                    </Col>
                    <Col xs={12} md={6} xl={6} className="order-1 order-md-2">
                        <img style={{ borderRadius: '50%' }} src={headerImg} alt='Header image' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;