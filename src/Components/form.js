import React, { Component } from 'react';
import "../Css/form.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';





class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            qwe: "asd"
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });
    }



    render() {
        const { validated } = this.state;

        const asd=["a","b","c"]

        return (
            <React.Fragment>
                <Container fluid>
                    <Row>
                        <Col></Col>
                        <Col className="heading"><h1>FeedBack Form</h1></Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col md={2} className="formArea1"></Col>
                        <Col md={8} className="formArea2 ">
                            <React.Fragment>
                                <Form noValidate validated={validated} onSubmit={e => this.handleSubmit(e)} >


                                    <Form.Group as={Col} md="8" controlId="validationCustomUsername">
                                        <Form.Label className="formLabel">Username</Form.Label>
                                        <InputGroup>

                                            <Form.Control
                                                type="text"
                                                placeholder="Username"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please choose a username.
              </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>


                                    <Form.Group as={Col} md="8" controlId="validationCustom03">
                                        <Form.Label className="formLabel">Country</Form.Label>
                                        <Form.Control type="text" placeholder="Country" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid Country.
            </Form.Control.Feedback>
                                    </Form.Group>
                                   
                                    <Form.Group as={Col} md="8" controlId="formGridState">
                                        <Form.Label className="formLabel">State</Form.Label>
                                        <Form.Control as="select" required>
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid state.
            </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="8" controlId="validationCustom05">
                                        <Form.Label className="formLabel">Zip</Form.Label>
                                        <Form.Control type="text" placeholder="Zip" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid zip.
            </Form.Control.Feedback>
                                    </Form.Group>
                                    {/* </Form.Row> */}
                                    <Form.Group as={Col} md="8">
                                        <Form.Check className="formLabel"
                                            required
                                            label="Agree to terms and conditions"
                                            feedback="You must agree before submitting."
                                        />
                                    </Form.Group>
                                    <Button style={{ marginLeft: "177px" }} type="submit">Submit form</Button>
                                    <br></br>
                                    <br></br>
                                </Form>

                            </React.Fragment>

                        </Col>
                        <Col md={2} className="formArea3"></Col>
                    </Row>
                </Container>


            </React.Fragment>

        );
    }
}

export default FormPage;