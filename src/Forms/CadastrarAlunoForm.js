import React, { Component } from 'react';
import { Form, Button, FormControl, FormGroup, ControlLabel, Col, Checkbox, InputGroup } from 'react-bootstrap';

class CadastrarFormAluno extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={8}>
                        <FormControl type="email" placeholder="Email" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={8}>
                        <FormControl type="password" placeholder="Password" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={8}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={8}>
                        <Button type="submit">Sign in</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default CadastrarFormAluno;