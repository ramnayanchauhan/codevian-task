import React from 'react';
import { Navbar,Container} from 'react-bootstrap';

const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" style={{margin:'10px'}}>
            <Container>
                <Navbar.Brand href="#home">Codevian</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Container>
        </Navbar>
    )
}
export default Header;