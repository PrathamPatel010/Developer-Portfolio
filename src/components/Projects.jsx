import { Card, Container, Row, Col } from 'react-bootstrap';
import projects from '../data/projects';
import CustomButton from './CustomButton';

const Projects = () => {
    return (
        <>
            <section className="projects-div my-5 pt-5" id="projects">
                <h1>Projects</h1>
                <Container>
                    <Row>
                        <div className="project-grid mt-4">
                            {
                                projects.map((project) => (
                                    <Col key={project.projectIndex} xs={12} md={6}>
                                        <Card className="card-project">
                                            <Card.Img variant="top" src={project.img} />
                                            <Card.Body>
                                                <Card.Title>{project.name}</Card.Title>
                                                <Card.Text>{project.description}</Card.Text>
                                                <CustomButton text={'View More'} url={`/project/${project.projectIndex}`} />
                                                {
                                                    project.app_url ? (
                                                        <div className="mt-1">
                                                            <CustomButton text={'View Live App'} url={project.app_url} />
                                                        </div>
                                                    ) : <></>
                                                }
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </div>
                    </Row>
                </Container>

            </section>
        </>
    )
};

export default Projects;