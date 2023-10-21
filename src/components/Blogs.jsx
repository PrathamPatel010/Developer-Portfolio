import { Card, Container, Row, Col } from 'react-bootstrap';
import blogs from '../data/blogs';
import CustomButton from './CustomButton';

const Blogs = () => {
    return (
        <section id="blogs" className="blogs-sec text-center pt-5">
            <h1>Blogs</h1>
            <Container>
                <Row>
                    <div className="blogs-grid mt-4 pt-3">
                        {
                            blogs.map((blog, index) => (
                                <Col key={index} xs={12} md={6}>
                                    <Card className="card-blog">
                                        <Card.Img variant="top" src={blog.img} />
                                        <Card.Body>
                                            <Card.Title>{blog.name}</Card.Title>
                                            <CustomButton text={'Read Blog'} url={blog.url}></CustomButton>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Blogs;