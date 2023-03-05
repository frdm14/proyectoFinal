import React, {useState, useEffect} from 'react';
import CommonSection from '../shared/CommonSection';

import "../styles/tour.css";
import FeaturedTourList from "../components/Featured-Tour/FeaturedTourList";
import SearchBar from "../shared/SearchBar";
import NewsLetter from "../shared/NewsLetter";
import { Container, Row, Col } from 'reactstrap';


const Tours = () => {

  const [pageCount, setPageCount] = useState(0);
  const [page,setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5/4);
    setPageCount(pages);
  },[page]);

  return (
    <>
    <CommonSection title={"Todos nuestros Tours"}/>
    <section>
      <Container>
        <Row>
          <SearchBar/>
        </Row>
      </Container>
    </section>
    <section className='pt-0'>
      <Container>
        <Row>
          <FeaturedTourList />
          <Col lg="12">
            <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
              {[...Array(pageCount).keys()].map(number => (
                <span key={number} onClick={() => setPage(number)} className={page === number ? "active_page"
              : ""}>
                {number + 1}
                </span>
              )
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <NewsLetter/>
    </>
  )
}

export default Tours