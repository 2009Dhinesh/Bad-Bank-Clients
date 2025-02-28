import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Routes , Route} from 'react-router-dom';
// import Home from './Home';
// import Register from './register';
// import Deposit from './deposite';
// import Cashback from './caseback';
// import Bad from './BadBank'


function BasicExample() {
  return (<>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container style={{position:"absolute" , top:'-500%' , left :'35%' ,fontSize:'20px'}}>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
            <Nav.Link href="#deposit">Deposit</Nav.Link>
            <Nav.Link href="#cashback">CashBack</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* <Routes>
        <Route path='/' element={<Bad />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/deposit' element={<Deposit />}></Route>
        <Route path='/cashback' element={<Cashback />}></Route>
    </Routes> */}
</>);
}

export default BasicExample;