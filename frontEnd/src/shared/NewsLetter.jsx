import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import tourist from "../assets/images/tourist.png";

const Newsletter = () =>{
    return (
        <section className="newsletter">
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="newsletter__content">
                            <h2>Suscribite para recibir nuestras novedades.</h2>
                            <div className="newsletter__input">
                                <input type="email" placeholder="Ingresa tu email" />
                                <button className="btn newsletter__btn">Suscribirse</button>
                            </div>
                            <p>"No te pierdas ninguna de nuestras ofertas especiales, 
                                ¡suscríbete para recibir notificaciones!"</p>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="newsletter__img">
                            <img src={tourist} alt="" />
                            </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Newsletter;