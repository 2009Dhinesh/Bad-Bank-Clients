// import UserContext from './context';
// import { useContext } from 'react';
import { useState ,useEffect} from 'react';
import axios from 'axios';
// import { Button } from 'react-bootstrap';
import { FaWindowClose } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import SubMain from './SubBadMain';
// import Admin from './BadAdmin';


export default function Alldata(){
    // let users = useContext(UserContext)
// console.log("hi",users.users[0].amount)
    const [products, setProducts] = useState([]);    
    let [editId, setEditId] = useState(null);
    let [formData, setFormData] = useState({ userid : "" ,name: "", email: "", password: "", amount: "" });
    // const [dep,setDep]=useState(0)
    // const [userId,setUserId]=useState();
    // const [result , setResult] = useState() 

    // useEffect(()=>{
    //     const fetchdata=async()=>{
    //         await axios.get('http://localhost:3002/data').then((item)=>{setData(item.data)})
    //     };fetchdata()
    //     },[]);

    
useEffect(() => {

    async function axiosProd(){
        const response = await axios('http://localhost:3002/data');
        setProducts(response.data)
    };
    axiosProd();
}, []);

    const handleClick = (index)=>{
        const deleteItem = products[index];
        axios.delete(`http://localhost:3002/delete/${deleteItem._id}`).then(() => {
        const updatedData = [...products];
        updatedData.splice(index, 1);
        setProducts(updatedData);
    })
}

function handleEdit(item) {
    setEditId(item._id);
    setFormData({userid : item.userid, name: item.name, email: item.email, password: item.password, amount: item.amount });
}

    async function handleUpdate() {
        try {
        await axios.put(`http://localhost:3002/update/${editId}`, formData);
        setProducts(products.map((item) => (item._id === editId ? { ...item, ...formData } : item)));
        setEditId(null);
        alert("Updated successfully!");
        } catch (error) {
        console.error("Error updating:", error);
        }
    }


console.log(products)
    
    
    return(<>
    <SubMain />
    {/* <Admin /> */}
    <title>Dhisha Bank | All data</title>

    <h1 style={{marginTop:'-3%'}}>All data</h1>


    <table class="table" style={{marginTop:'10%'}}>
    <thead>
        <tr>
        <th scope="col">User ID</th>
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
    {products.map((item , index)=><tr>
        <td>{item.userid}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{item.amount}

        </td>
        <button style={{border:"none" , fontSize:'30px' }}><FaUserEdit style={{marginRight:'.0003%', color:'#1aba8a'}} title='Edit User' onClick={() => handleEdit(item)}/> <FaWindowClose style={{color:"red"}} onClick={ ()=>{handleClick(index) }} title='Delete User'/></button>
    </tr>
    )
    }

    {

    }

    
    </tbody>
</table>

    {editId && (
            <div>
            <h2>Edit Data</h2>
            <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            <input type="number" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
            <Button onClick={handleUpdate}>Update</Button>
            </div>
        )}


    </>)
}