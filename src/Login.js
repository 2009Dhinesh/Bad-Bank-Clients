import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // 👈 Import icons
import SubMain from './SubBadMain';
import Admin from './BadAdmin';

function Login() {
    const [validated, setValidated] = useState(false);
    const [data, setData] = useState([]);
    const [emails, setEmail] = useState('');
    const [passwords, setPassword] = useState('');
    const [update, setUpdate] = useState(1);
    const [show, setShow] = useState();
    const [all, setAll] = useState();
    const [showPassword, setShowPassword] = useState(false); // 👈 Toggle state

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);

        const updateItem = data.map((item) => item.email);
        const updateItemTwo = data.map((item) => item.password);

        axios.post(`https://server-90ct.onrender.com/login`).then(() => {
            for (let i = 0; i < updateItem.length && updateItemTwo.length; i++) {
                if (emails !== '' && passwords !== '') {
                    if (updateItem[i] === emails && updateItemTwo[i] === passwords) {
                        setUpdate(1);
                        if (emails === "dhinesh@gmail.com" && passwords === "12345") {
                            setAll(<Admin />);
                        }
                    } else {
                        setUpdate(0);
                    }
                } else {
                    alert("enter data");
                }
            }

            if (update !== 1) {
                console.log("un");
            } else {
                if (emails === "dhinesh@gmail.com" && passwords === "12345") {
                    console.log("admin no allowed");
                } else {
                    setShow(<SubMain />);
                }
            }
        });
    };

    useEffect(() => {
        async function axiosProd() {
            let response = await axios.get('https://server-90ct.onrender.com/login');
            let result = response.data;
            setData(result);
        }
        axiosProd();
    }, []);

    return (
        <>
            <title>Dhisha Bank | Login Page</title>

            <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ marginTop: '-10%', marginLeft: '-13%' }} className='card-outer-cash'>
                <Row className="mb-3">
                    <Form.Group as={Col} md="13" controlId="validationCustom01">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="13" controlId="validationCustom02">
                        <Form.Label>Password</Form.Label>
                        <div style={{ position: 'relative' }}>
                            <Form.Control
                                required
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',
                                    color: 'gray'
                                }}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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

                <Button type="submit">Login</Button>
            </Form>

            <p id="p"></p>
            <p id="pr"></p>

            {show}
            {all}
        </>
    );
}

export default Login;

