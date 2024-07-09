import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'; // Import Bootstrap components
import { useSelector } from 'react-redux';
import ProductList from './components/ProductList';
import CartIcon from './components/CartIcon';
import Cart from './components/Cart';
import Logo from './assets/logo.png'; // Import file gambar logo
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import LoginAPI from './components/LoginAPI';
import Register from './components/Register';
import Logout from './components/Logout';

const App = () => {
  const user = useSelector((state) => state.auth ? state.auth.user : null);

  return (
    <Router>
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
            <img
              src={Logo}
              alt="Logo"
              className="logo-img"
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <span className="brand-purple">LeoRan</span>
            <span className="brand-white">Store</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-link-custom">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className="nav-link-custom">
                <CartIcon />
              </Nav.Link>
              {user ? (
                <>
                  <span className="welcome-message">Welcome, {user.email}!</span>
                  <Logout />
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login" className="nav-link-custom">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login-api" className="nav-link-custom">
                    Login with API
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register" className="nav-link-custom">
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="content">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={user ? <Cart /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-api" element={<LoginAPI />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
