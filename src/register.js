import { Button } from 'react-bootstrap';
// import { useContext} from 'react';
import { useState } from 'react';
// import UserContext  from './context';
import deps from './register.jpg'
import axios from 'axios';
import { FaBuildingColumns } from "react-icons/fa6";
import SubMain from './SubBadMain'


export default function Register(){

    // const users = useContext(UserContext);

    const [userId , setUserid] = useState('');
    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [result , setResult] = useState()

const handleSubmit=(e)=>{
    e.preventDefault();
    // users.users.push({name:name,email:email,password:password,amount:1000})

    // connect to front to back end

    let item = {userid:userId,name:name,email:email,password:password,amount:1000};
    axios.post('http://localhost:3002/create' , item);
    // async function duplicate(){
    //     let response = await (axios.post('http://localhost:3002/create'));
    // let result =response.data;
    // console.log(response)
    // console.log(result)
    // }
    // duplicate();
    
    // (item === result.userid) ? console.log("duplicate") : console.log("succ")
    document.getElementById('display').style.display = "block";
    setResult(` Your Account create in Successfully....`);
    console.log(item.userid)



    // console.log(users)
}

    return(<>
    <SubMain />
        <title>Dhisha Bank | Register</title>

    <div className='depImg' style={{marginTop:'-7%'}}>
        <img src={deps} alt=""/>
    </div>
    <div className="display" id="display">
        { result } <br />
        <div className="display-inner-span-two">y</div>
    </div>
    <h1 style={{marginTop:'-3%' ,marginLeft:'5%'}}>Register</h1>
    <form  onSubmit={ handleSubmit} style={{marginTop:'-30%',marginLeft:'55%'}} className='card-outer'>
        <label htmlFor="">User Id :</label> <br />
        <input type="text" onChange={(e)=>setUserid(e.target.value)}/> <br /><br />
        <label htmlFor="">Enter Name :</label> <br />
        <input type="text" onChange={(e)=>setName(e.target.value)}/> <br /><br />
        <label htmlFor="">Enter Email :</label><br />
        <input type="email" onChange={(e)=>setEmail(e.target.value)} /> <br /><br />
        <label htmlFor="">Enter Password :</label><br />
        <input type="password" onChange={(e)=>setPassword(e.target.value)}/> <br /><br />
        
        <Button type='submit' >Submit</Button>
        {/* onClick={()=>alert('register successfully.... and You pay inizial amount is 1000')}  */}
    </form>

    <p className='inizial-amount'><FaBuildingColumns style={{marginRight:'2%'}}/>You are pay inizial amount is 1000</p>
    </>)
}