import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    };

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">All Products</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link as={Link} to="/add">Add Product</Nav.Link>
                        <Nav.Link as={Link} to="/update">Update Product</Nav.Link>
                        {
                            user ?
                                (<button onClick={handleSignOut} className="btn btn-link text-white text-decoration-none" >
                                    Sign out
                                </button>) : (<Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                                )

                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;