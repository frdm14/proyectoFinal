import React from 'react';
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logotipo.png";

const quick_links=[
  {
    path:"/home",
    display:"Home"
  },
  {
    path:"/about",
    display:"About"
  },
  {
    path:"/tours",
    display:"Tours"
  },
];

const quick_links2=[
  {
    path:"/gallery",
    display:"Galeria"
  },
  {
    path:"/login",
    display:"Login"
  },
  {
    path:"/register",
    display:"Registrarse"
  },
]

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="3">
          <div className='logo'>
          <img src={logo} alt='' />
          <p> “No viajamos para escapar de la vida, viajamos para que la vida no se nos escape.”</p>

            <div className='social_links d-flex align-items-center gap-5'>
              <span>
                <Link to="#"><i class="ri-facebook-circle-fill"></i></Link>
              </span>
              <span>
                <Link to="#"><i class="ri-instagram-fill"></i></Link>
              </span>
              <span>
                <Link to="#"><i class="ri-twitter-fill"></i></Link>
              </span>
            </div>
          </div>
          </Col>
          <Col lg="3">
            <h5 className='footer_link-title'>Descubrenos</h5>

            <ListGroup className='footer_quick-links'>
              {quick_links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className='footer_link-title'>Links Rapidos</h5>

              <ListGroup className='footer_quick-links'>
                {quick_links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
              </ListGroup>
          </Col>
          <Col lg="3">
                <h5 className='footer_link-title'>Contacto</h5>

                <ListGroup className='footer_quick-links'>
                
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                      <i class="ri-map-pin-fill"></i>
                      </span>
                      Direccion: 
                    </h6>
                    <p className='mb-0'>Av. Libertad </p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                      <i class="ri-mail-fill"></i>
                      </span>
                      Email:
                    </h6>
                    <p className='mb-0'>Viajando@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                      <i class="ri-phone-fill"></i>
                      </span>
                      Telefono:
                    </h6>
                    <p className='mb-0'>011 5897463414</p>
                </ListGroupItem>
                
                </ListGroup>
          </Col>
                  <Col lg="12" className='text-center pt-5'>
                    <p className='copyright'>Copyright {year}, hecho por Milenati Federico</p>
                  </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;