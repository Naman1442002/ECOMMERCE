import React, { useState } from 'react';
import { Form, Button,Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    password: ''
  });

  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://shivpalcommerce.onrender.com/login', formData);
      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate('/MyApp/Home'); // Redirect to the home page
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed');
      setError('An error occurred during registration. Please try again.'); // Set error message

    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="registration-container">
              {error && <Alert variant="danger">{error}</Alert>} {/* Display error message */}
        <h2 style={{padding:'1.5rem'}}>Register YourSelf</h2>
     <Form onSubmit={handleSubmit}>
      
      <Form.Group controlId="userName">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          required
        />
      </Form.Group>
      
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" style={{margin:'2rem ', padding:'0.5rem 1rem', width:''}}>
        Login 
      </Button>
      <Link to='/'>Click here to Register</Link>

    </Form>

    </div>

  );
};

export default Login;
