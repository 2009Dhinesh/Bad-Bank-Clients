// import UserContext from './context';
// import { useContext, useState } from 'react';
import {Button } from "react-bootstrap";
import deps from './cash.jpg';
import { useState , useEffect} from 'react'
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Load from "./BadMoney";
import SubMain from './SubBadMain'

export default function Cashback(){
    // let users=useContext(UserContext);
    // let n = users.users.length;
    // let [bal,setBal]=useState(users.users[n-1].amount)
    // let [dep,setDep]=useState(0)
    // function handleSubmit(e){
    //     e.preventDefault()
    //     let deposit=Number(dep)
    //     if(bal-deposit < 0){
    //         alert("Invalid amount")
    //     }
    //     else{
    //         setBal(bal-deposit)
    //     }
    // }
    // users.users[n-1].amount=bal


    const [dep,setDep]=useState(0)
    const [userId,setUserId]=useState();
    const [data,setData]=useState([])
    const [password,setPassword]=useState([])
    const [result , setResult] = useState();
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 3000);
    
    
        useEffect(()=>{
        const fetchdata=async()=>{
            await axios.get('http://localhost:3002/data').then((item)=>{setData(item.data)})
        };fetchdata()
        },[]);
    
        function handleSubmit(e) {
            e.preventDefault();
            const user = data.find(item => item.userid === Number(userId) && item.password === password);
            if (user) {
                const updatedAmount = Number(user.amount) - Number(dep);
                axios.put(`http://localhost:3002/update/${user._id}`, { amount: updatedAmount })
                    .then(() => {
                    setResult(`Rs.${dep} Amount Credited to Your Account`);
                    });
                } else {
                setResult("User or password not found with the provided ID.");
                }
                document.getElementById('display').style.display = "block";

            }


    return(<>
    <SubMain />
    <title>Dhisha Bank | Cash back</title>

    {isLoading ? (<div
                        style={{
                            width: "100px",
                            margin: "auto",
                        }}
                    >
                        <Load />
                    </div>) : (<>
                    
    <div className='depImg' style={{marginTop:'-6%'}}>
        <img src={deps} alt=""/>
    </div>
    <div className="display" id="display">
        { result } <br />
        {(!data.find(item => item.userid === Number(userId) && item.password === password)) ? <div className="display-inner-span">y</div> : <div className="display-inner-span-two">y</div>}
    </div>
    <h1 style={{marginTop:'-2%' ,marginLeft:'5%'}}>Cashback</h1>
    {/* <form action="" className='card-outer-cash' >
        <input type="text"  placeholder='Enter your amount'/>
        <Button type='submit' >Submit</Button>
    </form> */}
    {/* <h2 style={{marginTop:'2%'}}>Balance : {bal} </h2> */}


    <div className='containers'>
        {/* <h2 style={{marginTop:'2%'}}>Balance : {bal} </h2> */}
        <Form noValidate    className='card-outer-cash' onSubmit={handleSubmit} id='form'>
        <Row className="mb-3">
            <Form.Group as={Col} md="13" controlId="validationCustom01">
            <Form.Label>User Id</Form.Label>
            <Form.Control
                required
                type="number"
                placeholder="Enter your user id"
                onChange={(e)=>setUserId(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group> 
            </Row>

        <Row className="mb-3">
            <Form.Group as={Col} md="13" controlId="validationCustom01">
            <Form.Label>Password</Form.Label>
            <Form.Control
                required
                type="password"
                placeholder="Enter your Password"
                onChange={(e)=>setPassword(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group> 
            </Row>
        <Row className="mb-3">

            <Form.Group as={Col} md="13" controlId="validationCustom02">
            <Form.Label>Enter your Amount</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Enter your amount"
                onChange={(e)=>setDep(e.target.value)}

            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Button type="submit"   className='btn'>Enter</Button>
        </Form>
        </div>
                    
                    
                    </>)}

    </>)
} 