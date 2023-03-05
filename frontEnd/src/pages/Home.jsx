import React from 'react';
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";

import image01 from "../assets/images/imagen01.jpg";
import image02 from "../assets/images/imagen03.jpg";
import video from "../assets/images/Amanecer.mp4";
import mundoImg from"../assets/images/mundo.png";
import experienceImg from "../assets/images/experiencia.png";
import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from "../services/ServiceList";
import FeaturedTourList from '../components/Featured-Tour/FeaturedTourList';
import MasonryImages from '../components/image-gallery/MasonryImages';
import Testimonial from '../components/Testimonial/Testimonial';
import NewsLetter from '../shared/NewsLetter';

const Home = () => {
  return <>
  
  <section>
    <Container>
      <Row>
        <Col lg="6">
          <div className="hero_content">
            <div className="hero_subtitle d-flex align-items-center">
              <Subtitle subtitle={"Tu Lugar en el Mundo"}/>
              <img src={mundoImg} alt="" />
            </div>
            <h1>Viajar te permite vivir <span className='highlight'>Sin Tiempo</span>
            </h1>
            <p>
            Somos cómplices de tu aventura, disfruta de la vida viviendo unas buenas vacaciones.
            Nuestro plan siempre sera que estés feliz!!
            </p>
          </div>
        </Col>
        <Col lg="2">
          <div className="hero_img-box">
            <img src={image01} alt="" />
          </div>
          </Col>
          <Col lg="2">
          <div className="hero_img-box mt-4">
            <img src={image02} alt="" />
          </div>
          </Col>
          <Col lg="2">
          <div className="hero_img-box hero_video-box mt-5">
            <video src={video} alt="" controls />
          </div>
          </Col>
          <SearchBar/>
      </Row>
    </Container>
  </section>
  <section>
    <Container>
      <Row>
        <Col lg="3">
          <h5 className='service_subtitle'>
            Que te ofrecemos?
          </h5>
          <h2 className='service_title'>
            Todo nuestro 
            mejor servicio.
          </h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>
  <section>
    <Container>
      <Row>
        <Col lg="12" className='mb-4'>
          <Subtitle subtitle={"Explora"}/>
          <h2 className='featured_tour-title'>Nuestros mejores tours</h2>
        </Col>
        <FeaturedTourList />
      </Row>
    </Container>
  </section>

  <section>
    <Container>
      <Row>
        <Col lg="6">
        <div className="experience_content">
          <Subtitle subtitle={"Experiencias"}/>
          <h2>
            Contanos tu Experiencia <br /> nos servira de ayuda
          </h2>
          <p>De esta manera podremos brindarte un mejor servicio para que tus dias sean inolvidables</p>
        </div>
        <div className="counter_wrapper d-flex align-items-center gap-4">
          <div className="counter_box">
            <span>14k+</span>
            <h6>Viajes Realizados</h6>
          </div>
          <div className="counter_box">
            <span>2k+</span>
            <h6>Clientes  Regulares</h6>
          </div>
          <div className="counter_box">
            <span>14</span>
            <h6>Años de Experiencia</h6>
          </div>
        </div>
        </Col>
        <Col lg="6">
        <div className="experience_img">
          <img src={experienceImg} alt="" />
        </div>
        </Col>
      </Row>
    </Container>
  </section>
  <section>
    <Container>
      <Row>
        <Col lg="12">
          <Subtitle subtitle={"Galeria"}/>
          <h2 className='gallery_title'>Visita nuestra Galeria</h2>
        </Col>
        <Col lg="12">
          <MasonryImages/>
        </Col>
      </Row>
    </Container>
  </section>
  <section>
    <Container>
      <Row>
        <Col>
        <Subtitle subtitle={"Clientes"}/>
        <h2 className='testimonial_title'>La opinion de nuestros clientes</h2>
        </Col>
        <Col lg="12">
        <Testimonial/>
        </Col>

      </Row>
    </Container>
  </section>
  <NewsLetter/>
  </>
}

export default Home