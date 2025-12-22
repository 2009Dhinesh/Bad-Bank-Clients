import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import './badStyle.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';

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
import Bad from './BadBank';
import Admin from './BadAdmin';
import SubMain from './SubBadMain';
import Favicon from "react-favicon";
import Load from './BadLoading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // ✅ FIX loading issue
  useEffect(() => {
    document.title = "Dhisha Bank";
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Favicon url={favicon} />

      {isLoading ? (
        <div style={{ width: "100px", margin: "auto", marginTop: "20%" }}>
          <Load />
        </div>
      ) : (
        <HashRouter>
          {/* ✅ CONTEXT FIX */}
          <UserContext.Provider
            value={{
              users: [
                {
                  name: "Dhinesh Waran",
                  email: "dwaranp@gmail.com",
                  password: "Dhisha@143",
                  amount: 1000
                }
              ],
              balance: 1000
            }}
          >

            {/* ✅ NAVBAR */}
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Brand>
                  <img src={logo} alt="logo" width="70" />{" "}
                  <span style={{ fontSize: "22px", fontWeight: "bold" }}>
                    Dhisha Bank
                  </span>
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Nav>
                    <Button className="me-2" style={{ backgroundColor: '#1aba8a' }}>
                      <NavLink to="/login" className="nav-link text-white">
                        Login
                      </NavLink>
                    </Button>

                    <Button style={{ backgroundColor: '#1aba8a' }}>
                      <NavLink to="/signup" className="nav-link text-white">
                        Signup
                      </NavLink>
                    </Button>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            {/* ✅ ROUTES */}
            <Routes>
              <Route path="/" element={<Bad />} />
              <Route path="/home" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/cashback" element={<Cashback />} />
              <Route path="/alldata" element={<Alldata />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* ✅ LOGIN REDIRECT ROUTES */}
              <Route path="/admin" element={<Admin />} />
              <Route path="/dashboard" element={<SubMain />} />
            </Routes>

          </UserContext.Provider>
        </HashRouter>
      )}
    </>
  );
}

export default App;
