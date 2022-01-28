import React, {Component} from 'react';
import {
    Button,
    Navbar,
    Container,
    Nav,
    Form,
    FormControl
} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import logo from './pinguin.png';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';
import Registration from '../Pages/Registration';

class Header extends Component {
    render() {
        return (
            <>
                <Router>
                    <Navbar sticky="top"  collapseOnSelect expand="md" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="/">
                                <img
                                    src={logo}
                                    height="30%"
                                    width="70%"
                                    className="d-line-block align-top"
                                    alt="Logo"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href = "/"> Home </Nav.Link>
                                    <Nav.Link href = "/about"> About Us </Nav.Link>
                                    <Nav.Link href = "/contacts"> Contacts </Nav.Link>
                                    <Nav.Link href = "/blog"> Blog </Nav.Link>
                                    <Nav.Link href = "/registration"> Registration </Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type = "text"
                                        placeholder="Search"
                                        classNme="mr-sm-2"
                                    />
                                    <Button variant = "outline-info"> Search </Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    {/*<Body>*/}

                    {/*</Body>*/}

                    <Routes>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/registration" component={Registration} />
                    </Routes>
                </Router>
            </>
        );
    }
}

export default Header;