import flowers from "./../data";
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home(){
    return (
        <div class="text-center">
            <h2 class="m-3">Home</h2>

            <Container>
                <Row>
                    {flowers.map((flower) => {
                        return (
                            <Col class="align-top p-3" xs={12} md={3}>
                                <Card>
                                    <Card.Img variant="top" src={flower.picture} />
                                    <Card.Title class="text-center">{flower.name}</Card.Title>
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