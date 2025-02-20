import UserContext from './context';
import { useContext, useState } from 'react';
import {Button } from "react-bootstrap"
import deps from './deposit.jpg'


export default function Deposit(){

    let users=useContext(UserContext)
    let n = users.users.length;
    let [bal,setBal]=useState(users.users[n-1].amount)
    let [dep,setDep]=useState(0)
    function handleSubmit(e){
        e.preventDefault()
        let deposit=Number(dep)
        setBal(bal+deposit)
    }
    users.users[n-1].amount=bal
    return(<>
    <div className='depImg'>
        <img src={deps} alt=""/>
    </div>

    <div className='containers'>
        <h1 className='depositH'>Deposit</h1>
        <form action="" onSubmit={handleSubmit} className='card-outer-deposit'>
            <input type="text" onChange={(e)=>setDep(e.target.value)} placeholder='Enter your amount'/>
            <Button type='submit' className='btn' >Submit</Button>
        </form>
        <h2 style={{marginTop:'2%'}}>Balance : {bal} </h2>
    </div>
    </>)
}