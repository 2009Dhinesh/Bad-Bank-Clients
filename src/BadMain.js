import Container from 'react-bootstrap/Container';
import './badStyle.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter,Routes,Route} from 'react-router-dom'
import Register from './register';
import Deposit from './deposite';
import Cashback from './caseback';
import Alldata from './allData';
import UserContext from './context';
import logo from './images/logoBank.png';
import favicon from './images/favicon.png';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Bad from './BadBank'
import Favicon from "react-favicon";
import { useState } from 'react';
import Load from './BadLoading'


function App() {

  const [isLoading, setIsLoading] = useState(true);
  

    setTimeout(() => {
      setIsLoading(false);
  }, 2000);


  


return (
  <>

  <title>Dhisha Bank</title>
  <Favicon url={favicon}/>
  {isLoading ? (<div
                    style={{
                        width: "100px",
                        margin: "auto",
                    }}
                >
                    <Load />
                </div>) :
                (<>
                <Navbar expand="lg" className="bg-body-tertiary" >
  <p style={{width:'500px',marginLeft:'1%'}}><img src={logo} style={{width:'90px' ,marginTop:'2%'  , marginRight:'2%'}} alt='logo'></img> <h1 style={{position:'absolute' , top:'15%' , left:'8%'}}>Dhisha Bank</h1> </p>
      <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            
            
          </Nav>
          <Button style={{backgroundColor:'#1aba8a'}} ><Nav.Link href="#login">LogIn</Nav.Link></Button>
          <Button style={{backgroundColor:'#1aba8a'}}><Nav.Link href="#signup">SignUp</Nav.Link></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <HashRouter>
      <UserContext.Provider value={{"users":[{
                                            name:"Dhinesh Waran",
                                            email:"dwaranp@gmail.com",
                                            password:"Dhisha@143",
                                            amount:1000}

                                            ]}}>
    <UserContext.Provider value={{"user":[{
Balance:1000}

]}}></UserContext.Provider>
<Routes>
  <Route path='/' element={<Bad />}></Route>
  <Route path='/home' element={<Home />}></Route>
  <Route path='/register' element={<Register></Register>}></Route>
  <Route path='/deposit' element={<Deposit></Deposit>}></Route>
  <Route path='/cashback' element={<Cashback></Cashback>}></Route>
  <Route path='/alldata' element={<Alldata></Alldata>}></Route>
  <Route path='/login' element={<Login />}></Route>
  <Route path='/signup' element={<Signup />}></Route>
</Routes>
</UserContext.Provider>
    </HashRouter>
                </>)
              }


 
</>
);
}
export default App;
