import UserContext from './context';
import { useContext, useState } from 'react';
import {Button } from "react-bootstrap";
import deps from './cash.jpg';


export default function Cashback(){
    let users=useContext(UserContext);
    let n = users.users.length;
    let [bal,setBal]=useState(users.users[n-1].amount)
    let [dep,setDep]=useState(0)
    function handleSubmit(e){
        e.preventDefault()
        let deposit=Number(dep)
        if(bal-deposit < 0){
            alert("Invalid amount")
        }
        else{
            setBal(bal-deposit)
        }
    }
    users.users[n-1].amount=bal


    return(<>
    <div className='depImg' style={{marginTop:'-2%'}}>
        <img src={deps} alt=""/>
    </div>
    <h1 style={{marginTop:'5%' ,marginLeft:'5%'}}>Cashback</h1>
    <form action="" onSubmit={handleSubmit} className='card-outer-cash' >
        <input type="text" onChange={(e)=>setDep(e.target.value)} placeholder='Enter your amount'/>
        <Button type='submit' >Submit</Button>
    </form>
    <h2 style={{marginTop:'2%'}}>Balance : {bal} </h2>
    </>)
}