import { useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
// import Home from './Home'

function Login() {
    const [validated, setValidated] = useState(false);
    const [ data , setData] = useState([]);
    const [ emails , setEmail ] = useState();
    const [ passwords , setPassword ] = useState();
    const [flag,setFlag]=useState(0)

const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }

    console.log(data)
    for(let i = 0 ; i< data.length; i++){
        if(data[i].email === emails && data[i].password === passwords){
            
           // document.getElementById('p').innerHTML = "login successfully..."
            // console.log("login successfully")
            console.log("data email",data[i].email)
            console.log("data password",data[i].password)
            setFlag(1)
        }
        else{
            // document.getElementById('pr').innerHTML = "login Unsuccessfully...";
            // console.log("login Unsuccessfully")
            // setFlag(false)
            console.log("data email",data[i].email)
            console.log("data password",data[i].password)
            setFlag(0)
        }
        (flag) ? document.getElementById('p').innerHTML="succ" : document.getElementById('pr').innerHTML="Unsucc";
        console.log(flag)
    }

    
    setValidated(true);
};

console.log(data)
useEffect(() => {

    async function axiosProd(){
        let response =await axios.get('http://localhost:3001/login');
        let result = response.data;
        setData(result)
    };
    axiosProd();
}, []);

return (<>

    <Form noValidate validated={validated} onSubmit={handleSubmit} style={{marginTop:'-10%' , marginLeft:'-13%' }} className='card-outer-cash'>
        <Row className="mb-3">
            <Form.Group as={Col} md="13" controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group> 
            </Row>
        <Row className="mb-3">

            <Form.Group as={Col} md="13" controlId="validationCustom02">
            <Form.Label>Password</Form.Label>
            <Form.Control
                required
                type="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}

            />
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
        
        
        </>
    );
}

export default Login;