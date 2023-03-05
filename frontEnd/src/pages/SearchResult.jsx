import React, { useState } from 'react';
import CommonSection from "./../shared/CommonSection";
import { Container, Row, Col } from 'reactstrap';

import { useLocation } from 'react-router-dom';
import TourCard  from "../shared/TourCard";


const SearchResult= () => {

  const  location  = useLocation();
console.log(location)
  const [data] = useState(location?.state);
  console.log(data);

  return (
    <>
    <CommonSection title={"Resultado de la Busqueda"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className='text-center'>No encontrado</h4>
            ) : (
              data?.map(tour => (
                <Col lg="3" className='mb-4' key={tour._id}>
                  <TourCard tour={tour} />
                  </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default SearchResult