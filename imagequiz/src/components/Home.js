import flowers from "./../flowers";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div class="text-center">
            <h2 class="m-3">Home</h2>

            <Container>
                <Row>
                    {flowers.map((flower) => {
                        let link = "/" + flower.name;
                        return (
                            <Col class="align-top p-3" xs={12} md={3}>
                                <Card component={Link} to={link}>
                                    <Link to={link}><Card.Img variant="top" src={flower.picture} /></Link>
                                    <Link to={link}><Card.Title class="text-center">{flower.name}</Card.Title></Link>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Home;