import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary"   style={{paddingTop:'0', paddingBottom:'0'}}>
            <Container fluid style={{backgroundColor:'#d0d0d0',zIndex:'10000'}}>
                <Navbar.Brand href="#" style={{paddingTop:'0', paddingBottom:'0'}}><img width="80" height="80" src="https://img.icons8.com/clouds/100/administrator-male.png" alt="administrator-male"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" style={{paddingRight:'3rem', }}>
                    <Nav
                        className=" my-2 my-lg-0"
                        style={{ textAlign:'center', marginLeft:'auto', paddingRight:'1rem' , paddingTop:'0',paddingBottom:'0' ,fontSize:'18px', fontWeight:'650'}}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" style={{paddingRight:'2rem'}} ><Link to="/MyApp/Home" className='Link'>Home</Link></Nav.Link>
                        <Nav.Link href="#action2" style={{paddingRight:'2rem'}}><Link to="/MyApp/Products" className='Link'>Products</Link></Nav.Link>
                        <Nav.Link href="#" style={{paddingRight:'2rem'}} ><Link to="/MyApp/Cart" className='Link'>Cart</Link></Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;