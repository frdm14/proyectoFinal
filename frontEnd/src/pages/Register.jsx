import React, {useState} from 'react';
import "../styles/register.css";
import {Container, Row, Button, Col, Form, FormGroup} from "reactstrap";
import {Link, useNavigate} from "react-router-dom";

import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user1.png";



const Register = () => {

  const [credentials, setCredentials] = useState({
    username:"",
    email:"",
    password:""
});



  const handleChange = e =>{
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
};
const navigate = useNavigate();


const registerUser = async e => {
  e.preventDefault();
  ;
  try {
    const response = await fetch('http://localhost:8000/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    const data = await response.json();
    console.log(data);
    navigate("/login") 
  } catch (error) {
    console.error(error);
  }
};


  return <section>
    <Container>
      <Row>
        <Col lg="8" className='m-auto'>
          <div className="register_container d-flex justify-content-between" >
            <div className="register_img">
              <img src={registerImg} alt="register" />
            </div>

            <div className="register_form">
              <div className="user">
                <img src={userIcon} alt="user" />
              </div>
              <h2>Registrarse</h2>
              <Form onSubmit={registerUser}>
  <FormGroup>
    <input
      type="text"
      placeholder='Usuario'
      required
      id='username'
      value={credentials.username}
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <input
      type="email"
      placeholder='Email'
      required
      id='email'
      value={credentials.email}
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <input
      type="password"
      placeholder='Password'
      required
      id='password'
      value={credentials.password}
      onChange={handleChange}
    />
  </FormGroup>
  <Button className='btn secondary__btn auth_btn' type='submit'>
    Crear Cuenta
  </Button>
</Form>
              <p>Ya tenes una cuenta?<Link to="/login">Login</Link></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Register;