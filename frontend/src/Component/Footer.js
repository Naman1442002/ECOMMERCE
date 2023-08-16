import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-light">
            <Container fluid className="footer-content py-5"  style={{paddingLeft:'2rem'}}>
                <Row>
                    <Col md={4} className="mb-4">
                        <h4>About Us</h4>
                        <p>Discover the best products from our store...</p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h4>Contact Us</h4>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h4 style={{padding:'0rem 0rem 0rem 1rem', fontSize:'2.4rem'}}>Follow Us</h4>
                        <div className="social-icons" style={{fontSize:'2rem'}}>
                            <a href="#" style={{ color: '#3b5998' , margin:'1rem' }}>
                                <FaFacebook />
                            </a>
                            <a href="#" style={{ color: '#1DA1F2' , margin:'1rem' }}>
                                <FaTwitter />
                            </a>
                            <a href="#" >
                                <FaInstagram style={{ backgroundImage: 'linear-gradient(45deg, #405DE6, #E1306C)',
                                    color: '#fff' , borderRadius:"28px", outerHeight:'30px', outerWidth:'28px' }}/>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="bg-secondary text-center py-3">
                <p>&copy; {new Date().getFullYear()} Your E-Commerce Store. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
