import { Card, Container, Row, Col } from 'react-bootstrap';
import blogs from '../data/blogs';
import CustomButton from './CustomButton';

const Blogs = () => {
    return (
        <section id="blogs" className="blogs-sec text-center pt-5">
            <h1>My Blogs</h1>
            <Container>
                <Row className="mt-5">
                    {
                        blogs.map((blog, index) => (
                            <Col key={index} xs={12} md={4}>
                                <Card className="card-blog">
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body>
                                        <Card.Text>{blog.name}</Card.Text>
                                        <CustomButton text={'Read blog'} url={blog.url} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>

    )
}

export default Blogs;