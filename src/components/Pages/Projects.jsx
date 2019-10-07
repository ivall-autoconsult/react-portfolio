import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../css/Projects.css'

class Projects extends Component {
    render() {
        return (
            <div class="projects">
                <h1>Projects</h1>
                <hr/>
                <Row>
                    <Col sm={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png" />
                            <Card.Body>
                                <Card.Title>ReactJS Portfolio WebApp</Card.Title>
                                <Card.Text>
                                    Wrote a React WebApp to display my Portfolio for all the world to see. Visit the code below!
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/e/ed/PGAT_master_cmyk.png" />
                            <Card.Body>
                                <Card.Title>PGA Tour Predictions</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Old_School_Runescape_Logo.png/220px-Old_School_Runescape_Logo.png" />
                            <Card.Body>
                                <Card.Title>OSRS Bots</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>          
                </Row>
                <Row>
                    <Col sm={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.morosystems.com/content/uploads/2018/01/jira-blue.png" />
                            <Card.Body>
                                <Card.Title>Jira Java/REST API Scripts</Card.Title>
                                <Card.Text>
                                    Wrote a React WebApp to display my Portfolio for all the world to see. Visit the code below!
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>    
                    <Col sm={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="http://eo4wildlife.eu/sites/eo4wildlife.eu/themes/zen/eo4wild/images/eo4_logo.svg" />
                            <Card.Body>
                                <Card.Title>MARINERS Tool</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>   
                    <Col sm={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Mandel_zoom_00_mandelbrot_set.jpg/800px-Mandel_zoom_00_mandelbrot_set.jpg" />
                            <Card.Body>
                                <Card.Title>Fractal Explorer</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>    
                </Row>
            </div>
        );
    }
}

export default Projects;