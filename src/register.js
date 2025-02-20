import { Button } from 'react-bootstrap';
// import { useContext} from 'react';
import { useState } from 'react';
// import UserContext  from './context';
import deps from './register.jpg'
import axios from 'axios'

export default function Register(){

    // const users = useContext(UserContext);

    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
const handleSubmit=(e)=>{
    e.preventDefault();
    // users.users.push({name:name,email:email,password:password,amount:1000})

    // connect to front to back end

    let item = {name:name,email:email,password:password,amount:1000};
    axios.post('http://localhost:3001/create' , item)
    // console.log(users)
}

    return(<>
    <div className='depImg' style={{marginTop:'-2%'}}>
        <img src={deps} alt=""/>
    </div>
    <h1 style={{marginTop:'-2%' ,marginLeft:'5%'}}>Register</h1>
    <form  onSubmit={ handleSubmit} style={{marginTop:'-8%'}} className='card-outer'>
        <label htmlFor="">Enter Name :</label> <br />
        <input type="text" onChange={(e)=>setName(e.target.value)}/> <br /><br />
        <label htmlFor="">Enter Email :</label><br />
        <input type="email" onChange={(e)=>setEmail(e.target.value)} /> <br /><br />
        <label htmlFor="">Enter Password :</label><br />
        <input type="password" onChange={(e)=>setPassword(e.target.value)}/> <br /><br />
        
        <Button type='submit' >Submit</Button>
        {/* onClick={()=>alert('register successfully.... and You pay inizial amount is 1000')}  */}
    </form>
    {/* {name}
    {email}
    {password} */}
    </>)
}