// import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import node from '../assets/node.png';
import express from '../assets/express.png';
import mongo from '../assets/mongo.png';
import react from '../assets/react.png';
import spring from '../assets/spring.png';
import hibernate from '../assets/hibernate.png';
import mysql from '../assets/mysql.png';
import postgres from '../assets/postgres.png';
import jsp from '../assets/jsp.png';
import git from '../assets/git.png';


function UncontrolledExample() {
    return (
        <section className="skills-sec">
            <h1>Skills</h1>
            <Container className="my-3">
                <Row>
                    <Col xs={6} md={4} xl={3}>
                        <Card className="skill-card" style={{ backgroundColor: 'transparent' }}>
                            <Card.Img className="card-img" variant="top" src={node} style={{ objectFit: 'cover', height: 'max-content' }} />
                        </Card>
                    </Col>

                    <Col xs={6} md={4} xl={3}>
                        <Card className="skill-card" style={{ backgroundColor: 'transparent' }}>
                            <Card.Img className="card-img" variant="top" src={express} style={{ objectFit: 'cover', height: 'max-content' }} />
                        </Card>
                    </Col>

                    <Col xs={6} md={4} xl={3}>
                        <Card className="skill-card" style={{ backgroundColor: 'transparent' }}>
                            <Card.Img className="card-img" variant="top" src={mongo} style={{ objectFit: 'cover', height: 'max-content' }} />
                        </Card>
                    </Col>

                    <Col xs={6} md={4} xl={3}>
                        <Card className="skill-card" style={{ backgroundColor: 'transparent' }}>
                            <Card.Img className="card-img" variant="top" src={react} style={{ objectFit: 'cover', height: 'max-content' }} />
                        </Card>
                    </Col>

                    <Col xs={6} md={4} xl={3}>
                        <Card className="skill-card" style={{ backgroundColor: 'transparent' }}>
                            <Card.Img className="card-img" variant="top" src={jsp} style={{ objectFit: 'cover', height: 'max-content' }} />
                        </Card>
                    </Col>

                    <Col xs={6} md={4} xl={3}>
                        <Card className="skill-card" style={{ backgroundColor: 'transparent' }}>
                            <Card.Img className="card-img" variant="top" src={spring} style={{ objectFit: 'cover', height: 'max-content' }} />
                        </Card>
                    </Col>

                    <Col xs={6} md={4} xl={3}>
                        <Card className="skill-card" style={{ backgroundColor: 'transparent' }}>
                            <Card.Img className="card-img" variant="top" src={hibernate} style={{ objectFit: 'cover', height: 'max-content' }} />
                        </Card>
                    </Col>

                    <Col xs={6} md={4} xl={3}>
                        <Card className="skill-card" style={{ backgroundColor: 'transparent' }}>
                            <Card.Img className="card-img" variant="top" src={postgres} style={{ objectFit: 'cover', height: 'max-content' }} />
                        </Card>
                    </Col>

                    <Col xs={6} md={4} xl={3}>
                        <Card className="skill-card" style={{ backgroundColor: 'transparent' }}>
                            <Card.Img className="card-img" variant="top" src={mysql} style={{ objectFit: 'cover', height: 'max-content' }} />
                        </Card>
                    </Col>


                    <Col xs={6} md={4} xl={3}>
                        <Card className="skill-card" style={{ backgroundColor: 'transparent' }}>
                            <Card.Img className="card-img" variant="top" src={git} style={{ objectFit: 'cover', height: 'max-content' }} />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default UncontrolledExample;