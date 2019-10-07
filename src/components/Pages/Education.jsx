import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../css/Education.css'


class Education extends Component {
    render() {
        return (
            <div>
            <div class="education">
                <h1>Education</h1>
                <hr/>
                <h2>University of Southampton (2015-2018)</h2>
                <hr/>
                    <Row>
                        <Col sm={4}>
                            <h5>Third Year</h5>
                            <Table size="sm">
                                <thead>
                                    <tr>
                                        <th style={{width: 40}}>Module Name</th>
                                        <th style={{width: 250}}>Percentage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Third Year Individual Project</th>
                                        <th><ProgressBar animated striped variant="success" now={72} label={"72%"}/></th>
                                    </tr>
                                    <tr>
                                        <th>Machine Learning</th>
                                        <th><ProgressBar animated striped variant="success" now={82} label={"82%"}/></th>
                                    </tr>
                                    <tr>
                                        <th>Computer Vision</th>
                                        <th><ProgressBar animated striped variant="success" now={77} label={"77%"}/></th>
                                    </tr>
                                    <tr>
                                        <th>Cyber Security</th>
                                        <th><ProgressBar animated striped variant="success" now={68} label={"68%"}/></th>
                                    </tr>
                                    <tr>
                                        <th>Secure Systems</th>
                                        <th><ProgressBar animated striped variant="success" now={75} label={"75%"}/></th>
                                    </tr>
                                    <tr>
                                        <th>Computational Biology</th>
                                        <th><ProgressBar animated striped variant="success" now={90} label={"90%"}/></th>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        
                        <Col sm={4}>
                            <h5>Second Year</h5>
                            <Table size="sm">
                                <thead>
                                    <tr>
                                        <th style={{width: 40}}>Module Name</th>
                                        <th style={{width: 250}}>Percentage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>SW Engineering Project</th>
                                        <th><ProgressBar animated striped variant="success" now={69} label={"69%"}/></th>
                                    </tr>
                                    <tr>
                                        <th>Theory of Computing</th>
                                        <th><ProgressBar animated striped variant="success" now={73} label={"73%"}/></th>
                                    </tr>
                                    <tr>
                                        <th>Programming III</th>
                                        <th><ProgressBar animated striped variant="success" now={69} label={"69%"}/></th>
                                    </tr>
                                    <tr>
                                        <th>Programming Language Concepts</th>
                                        <th><ProgressBar animated striped variant="success" now={78} label={"78%"}/></th>
                                    </tr>
                                    <tr>
                                        <th>Intelligent Systems</th>
                                        <th><ProgressBar animated striped variant="success" now={69} label={"69%"}/></th>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>

                        <Col sm={4}>
                        <h5>First Year</h5>
                            <Table size="sm">
                                <thead>
                                    <tr>
                                        <th style={{width: 40}}>Module Name</th>
                                        <th style={{width: 250}}>Percentage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Algorithmics</th>
                                        <th><ProgressBar animated striped variant="success" now={83} label={"83%"}/></th>
                                    </tr>
                                    <tr>
                                        <th>Data Management</th>
                                        <th><ProgressBar animated striped variant="success" now={69} label={"69%"}/></th>
                                    </tr>
                                    <tr>
                                        <th>Foundations of CS</th>
                                        <th><ProgressBar animated striped variant="success" now={71} label={"71%"}/></th>
                                    </tr>
                                    <tr>
                                        <th>Programming I</th>
                                        <th><ProgressBar animated striped variant="warning" now={65} label={"65%"}/></th>
                                    </tr>
                                    <tr>
                                        <th>Software Modelling & Design</th>
                                        <th><ProgressBar animated striped variant="success" now={67} label={"67%"}/></th>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                

                <h2>Sir Henry Floyd Grammar School (2011-2015)</h2>
                <hr/>

                <Row>
                    <Col sm={4}>
                        <h5>A/AS Levels</h5>
                        <Table size="sm">
                            <thead>
                                <tr>
                                    <th style={{width: 200}}>Subject</th>
                                    <th style={{width: 100}}>Grade</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Mathematics</th>
                                    <th>A*</th>
                                </tr>
                                <tr>
                                    <th>Physics</th>
                                    <th>B</th>
                                </tr>
                                <tr>
                                    <th>Chemistry</th>
                                    <th>B</th>
                                </tr>
                                <tr>
                                    <th>Psychology</th>
                                    <th>B</th>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>

                    <Col sm={4}>
                        <h5>GCSEs</h5>
                        <Table size="sm">
                            <thead>
                                <tr>
                                    <th style={{width: 200}}>Subject</th>
                                    <th style={{width: 100}}>Grade</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Mathematics</th>
                                    <th>A*</th>
                                </tr>
                                <tr>
                                    <th>Chemistry</th>
                                    <th>A*</th>
                                </tr>
                                <tr>
                                    <th>Physics</th>
                                    <th>A</th>
                                </tr>
                                <tr>
                                    <th>Biology</th>
                                    <th>A</th>
                                </tr>
                                <tr>
                                    <th>English</th>
                                    <th>A</th>
                                </tr>
                                <tr>
                                    <th>P.E.</th>
                                    <th>A</th>
                                </tr>
                                <tr>
                                    <th>History</th>
                                    <th>B</th>
                                </tr>
                                <tr>
                                    <th>English Literature</th>
                                    <th>B</th>
                                </tr>
                                <tr>
                                    <th>Spanish</th>
                                    <th>B</th>
                                </tr>
                                <tr>
                                    <th>Religious Education</th>
                                    <th>B</th>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </div>
            <div>
                
            </div>
            </div>
        );
    }
}

export default Education;