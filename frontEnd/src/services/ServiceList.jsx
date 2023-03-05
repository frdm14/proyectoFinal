import React from 'react';
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from  "../assets/images/weather.png";
import guideImg from "../assets/images/guia.png";
import customImg from "../assets/images/custom.png";


const serviceData = [
    {
        imgUrl: weatherImg,
        title: "Observa el clima",
        desc: "El clima en tiempo real en el destino elegido."
    },
    {
        imgUrl: guideImg,
        title: "Los Mejores Tours",
        desc: "Tenemos una gran variedad de tours en los diferentes destinos"
    },
    {
        imgUrl: customImg,
        title: "Organizate",
        desc: "Arma el viaje y los tours segun tus posibilidades."
    },
]

const ServiceList = () => {
    return (
        <>
        {serviceData.map((item, index) => (
            <Col lg="3" md="6" sm="12" className='mb-4' key={index}>
                <ServiceCard item={item} />
            </Col>
    ))}
    </>
    );
    };
    
export default ServiceList;