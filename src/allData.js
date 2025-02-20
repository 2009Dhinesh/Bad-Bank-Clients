// import UserContext from './context';
// import { useContext } from 'react';
import { useState ,useEffect} from 'react';
import axios from 'axios';
// import { Button } from 'react-bootstrap';
import { FaWindowClose } from "react-icons/fa";


export default function Alldata(){
    // let users = useContext(UserContext)
// console.log("hi",users.users[0].amount)
const [products, setProducts] = useState([{}])
    
useEffect(() => {

    async function axiosProd(){
        const response = await axios('http://localhost:3002/data');
        setProducts(response.data)
    };
    axiosProd();
}, []);

    const handleClick = (e)=>{
        e.preventDefault();
        axios.delete('http://localhost:3002/delete', (req , res)=>{
            res.send.body();
        })
    }
    
    return(<>
    <h1 style={{marginTop:'-3%'}}>All data</h1>

    <table class="table" style={{marginTop:'10%'}}>
    <thead>
        <tr>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
        <th scope="col">Amount</th>
        </tr>
    </thead>
    <tbody>
    {/* {users.users.map((item)=><tr>
        <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.password}</td>
    <td>{item.amount}</td>
    </tr>)} */}
    {products.map((item)=><tr>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{item.amount}</td>
        <button onClick={ handleClick } style={{border:"none" , fontSize:'30px' }}><FaWindowClose style={{color:"red"}}/></button>
    </tr>
    )
    }

    
    </tbody>
</table>
    </>)
}