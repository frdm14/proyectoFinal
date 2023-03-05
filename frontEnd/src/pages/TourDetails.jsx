import React, { useState, useEffect, useRef } from 'react';
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup} from "reactstrap";
import {useParams} from "react-router-dom";

import { BASE_URL } from '../utils/config';
import avatar from "../assets/images/avatar.png";
import Booking from '../components/Booking/Booking';
import NewsLetter from '../shared/NewsLetter';



const TourDetails = () => {

  const {id} = useParams();
  const [tour, setTour] = useState(null);
  const reviewMsgRef = useRef("")
  const [tourRating, setTourRating] = useState(null)
  const [reviews, setReviews] = useState(null)

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await fetch(`${BASE_URL}/tours/${id}`);
        const data = await response.json();
        setTour(data);
        setReviews(data.reviews);
        console.log(data.reviews);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTour();
    window.scrollTo(0,0)

  }, [id]);

  if (!tour) {
    return <div>Loading...</div>;
  }

  const { title, city, country, img, desc, price } = tour;

  const options = {day:"numeric", month:"long", year:"numeric"};

  const submitHandler = async (e) =>{
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    const reviewData = {text: reviewText, rating: tourRating};

    try {
      const response = await fetch(`${BASE_URL}/review/${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json"},
          body: JSON.stringify(reviewData)
      });
      const data = await response.json();
      console.log(data);
      setReviews(data.reviews);
      console.log(setReviews);
      reviewMsgRef.current.value = "";


    } catch (error) {
      console.log(error);
    }
   
  }

   

  return <>
  <section>
    <Container>
      <Row>
      <Col lg="8">
              <div className="tour_content">
                <img src={img} alt="" />
                <div className="tour_info">
                  <h2>{title}</h2>

                  <div className='tour_extra-details'>
                  <span> <p>{desc}</p></span>
                 
                  <p><i class="ri-map-pin-line" style={{color: "var(--secondary-color)"}}></i>
                  {`${city}, ${country}`}</p>
                  <p><i class="ri-money-dollar-circle-line"></i>{` ${price}`} por persona</p>
                  <span><i class="ri-file-text-line"></i>{reviews?.length}</span>
                  </div>
                </div>
                <div className="tour_reviews mt-4">
                  <h4>Reviews({reviews?.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className='stars d-flex align-items-center gap-3'>
                      <span onClick={() => setTourRating (1)}>1 <i class="ri-star-fill"></i></span>
                      <span onClick={() => setTourRating (2)}>2 <i class="ri-star-fill"></i></span>
                      <span onClick={() => setTourRating (3)}>3 <i class="ri-star-fill"></i></span>
                      <span onClick={() => setTourRating (4)}>4 <i class="ri-star-fill"></i></span>
                      <span onClick={() => setTourRating (5)}>5 <i class="ri-star-fill"></i></span>
                    </div>
                    <div className="review_input">
                      <input type="text" ref={reviewMsgRef} 
                      placeholder='comparte tu experiencia'
                      required />
                      <button className='btn primary__btn text-white' type='submit'>
                        Agregar
                      </button>
                    </div>
                  </Form>
                  <ListGroup className='user_reviews'>
                  {
                    reviews?.map(reviews=>(
                      <div className="review_item">
                        <img src={avatar}/>

                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>fede</h5>
                              <p>{new Date().toLocaleDateString("en-US", options)}</p>
                            </div>
                            <span className='d-flex align-items-center'>
                              5 <i class="ri-star-line"></i>
                            </span>
                          </div>
                          <h6>hermoso tour</h6>
                        </div>
                      </div>
                    ))
                  }


                  </ListGroup>
                  
                </div>
              </div>
            </Col>
            <Col lg="4">
                    <Booking tour={tour}/>

            </Col>
      </Row>
    </Container>
  </section>
  <NewsLetter/>
  </>
};

export default TourDetails