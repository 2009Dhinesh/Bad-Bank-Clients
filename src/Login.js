import { useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
// import Home from './Home';
import SubMain from './SubBadMain';
import Admin from './BadAdmin'

function Login() {
    const [validated, setValidated] = useState(false);
    const [ data , setData] = useState([]);
    const [ emails , setEmail ] = useState();
    const [ passwords , setPassword ] = useState();
    const [update , setUpdate] =useState(1);
    const [show , setShow] = useState();
    const [all , setAll] =useState();
    // const [flag , setFlag] = useState(0)


const handleSubmit = (event ,index) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }    
    setValidated(true);

    const updateItem = data.map((item)=> item.email )
    const updateItemTwo = data.map((item)=>  item.password)
    //     {
    //     let mail = item.email ;
    //     let pass=  item.password; 
    //     console.log(mail)
    //     console.log(pass)
    // }
// );
    // setUpdate(updateItem)
    // console.log(update)
    console.log(updateItem)
    console.log(updateItemTwo)
    axios.get(`http://localhost:3001/login`).then(() => {
        
        for(let i = 0 ;i < updateItem.length && updateItemTwo.length; i++){

            if(emails != '' && passwords !=''){

                if(updateItem[i] === emails && updateItemTwo[i] === passwords ) {
                    // setFlag(1)
                    setUpdate(1);  
                    if(emails ==="dhinesh@gmail.com" && passwords === "12345"){
                        setAll(<Admin />)
                        console.log("Admin" , emails,passwords);
                    }
                } else{
                    // setFlag(0)
                    setUpdate(0);
                }
                
                console.log("! email :" ,emails)
            }

            else{
                alert("enter data")
            }

        }
        if(update !==1){
            console.log("un")
        }
        else{
            if(emails ==="dhinesh@gmail.com" && passwords === "12345"){

                console.log("admin no allowed")
            }
            else{
                setShow(<SubMain />)
            }
        }
        console.log(update)
    })
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
    <title>Dhisha Bank | Login Page</title>
{/* { flag !==1 ? (<> */}
    <Form noValidate validated={validated} onSubmit={(index)=>{handleSubmit(index)}} style={{marginTop:'-10%' , marginLeft:'-13%' }} className='card-outer-cash'>
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
        <Button type="submit" >Login</Button>
        </Form>
        <p id="p"></p>
        <p id="pr"></p>
        {/* </>):console.log('login')        } */}
        { show }
        { all }
        
        </>
    );
}

export default Login;