import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';



function FormExample() {
    const [validated, setValidated] = useState(false);
    const [fname , setFname] = useState('');
    const [lname , setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');


    
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        let item = {fname:fname,lname:lname,email:email,password:password};
        axios.post("http://localhost:3001/register" , item)

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{marginTop:'-16%' , marginLeft:'-13%' }} className='card-outer-cash'>
        <Row className="mb-3">
            <Form.Group as={Col} md="13" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="First name"
                onChange={(e)=>setFname(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            </Row>

        <Row className="mb-3">
            <Form.Group as={Col} md="13" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Last name"
                onChange={(e)=>setLname(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            </Row>

        <Row className="mb-3">
            <Form.Group as={Col} md="13" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
                <Form.Control
                type="email"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e)=>setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                Please Enter Email.
                </Form.Control.Feedback>
            </InputGroup>
            </Form.Group>
        </Row>

        <Row className="mb-3">
            <Form.Group as={Col} md="13" controlId="validationCustom03">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required  onChange={(e)=>setPassword(e.target.value)}/>
            <Form.Control.Feedback type="invalid">
                Please Enter password.
            </Form.Control.Feedback>
            </Form.Group>
        </Row>

        <Form.Group className="mb-3">
            <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            />
        </Form.Group>
        <Button type="submit">Signup </Button>
        </Form>

        
    );
}

export default FormExample;