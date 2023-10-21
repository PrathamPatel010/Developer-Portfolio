import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import skills from '../data/skills';

function Skills() {
    return (
        <section id="skills" className="skills-sec mt-5 pt-5">
            <h1>Skills</h1>
            <Container className="mt-4">
                <Row>
                    {
                        skills.map((skill, index) => (
                            <Col key={index} xs={6} md={4} xl={3}>
                                <Card className="skill-card">
                                    <Card.Img variant="top" src={skill.img} />
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
}

export default Skills;