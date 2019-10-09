import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../SignUp/style.css';


function SignUp(props) {

    return (
        <Form className='form'>
            <FormGroup row>
                <Label for="fname" sm={2}>First Name</Label>
                <Col sm={10}>
                    <Input type="text" name="fname" id="fname" placeholder="John" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="lname" sm={2}>Last Name</Label>
                <Col sm={10}>
                    <Input type="text" name="lname" id="lname" placeholder="Smith" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="email" sm={2}>Email</Label>
                <Col sm={10}>
                    <Input type="email" name="email" id="email" placeholder="email@example.com" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="pwd" sm={2} className='break-txt'>Password</Label>
                <Col sm={10}>
                    <Input type="password" name="pwd" id="pwd"  />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="pwd-confirm" sm={2}></Label>
                <Col sm={10}>
                    <Input type="password" name="pwd-confirm" id="pwd-confirm" placeholder='confirm password'/>
                </Col>
            </FormGroup>
                <Col sm={12}>
                    <Button type='submit' className='mybutton bg-primary border-primary font-weight-bold mt-3'>Submit</Button>
                    {/* <Input type='submit' className='button bg-primary text-white mt-3' /> */}
                </Col>
        </Form>
    )
}
export default SignUp;