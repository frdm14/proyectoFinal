import React, {useState} from 'react';
import "../styles/login.css";
import {Container, Row, Button, Col, Form, FormGroup} from "reactstrap";
import {Link, useNavigate} from "react-router-dom";

import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";


const Login = () => {

  const [credentials, setCredentials] = useState({
    email:"",
    password:""
});

const handleChange = e =>{
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value}));
};
const navigate = useNavigate();


const loginUser = async e => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:8000/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    const data = await response.json();
    console.log(data);
    navigate("/") 
  } catch (error) {
    console.error(error);
  }
};
      

    

  return <section>
    <Container>
      <Row>
        <Col lg="8" className='m-auto'>
          <div className="login_container d-flex justify-content-between" >
            <div className="login_img">
              <img src={loginImg} alt="login" />
            </div>

            <div className="login_form">
              <div className="user">
                <img src={userIcon} alt="user" />
              </div>
              <h2>Login</h2>
              <Form onSubmit={loginUser}>
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
                  Login
                </Button>
              </Form>
              <p>No tenes una cuenta?<Link to="/register">Registrate</Link></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Login;