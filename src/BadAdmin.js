import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
return (<> <Navbar expand="lg" className="bg-body-tertiary">
\<Container style={{position:"absolute" , top:'-500%' , left :'35%' ,fontSize:'20px'}}>
\<Navbar.Collapse id="basic-navbar-nav"> <Nav className="me-auto">
\<Nav.Link href="#home">Home\</Nav.Link>
\<Nav.Link href="#register">Register\</Nav.Link>
\<Nav.Link href="#deposit">Deposit\</Nav.Link>
\<Nav.Link href="#cashback">Withdrawal\</Nav.Link>
\<Nav.Link href="#allData">All Data\</Nav.Link> </Nav>
\</Navbar.Collapse> </Container> </Navbar>

\</>);
}

export default BasicExample;   
