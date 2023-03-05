import React, {useRef} from 'react';
import "./search-bar.css"
import { Col, Form, FormGroup } from "reactstrap";
import { BASE_URL } from '../utils/config';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


const SearchBar = ()=>{

  const countryRef = useRef("");
  const cityRef = useRef(0);
  const priceRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {
    const country = countryRef.current.value;
    const city = cityRef.current.value;
    const price = priceRef.current.value;

    try{
    const res =  await axios.get(`${BASE_URL}/tours/search/getTourBySearch?country=${country}&city=${city}&price=${price}`);
    if (res.status >= 200 && res.status < 300) {
      
      navigate(`/tours/search?country=${country}&city=${city}&price=${price}`, { state: res.data.data });
    } else {
      alert('Something went wrong.');
    }
  } catch (error) {
    alert('Something went wrong.');
  }
};


  
  return (
    <Col lg="12">
      <div className= "search_bar">
         <Form className= "d-flex align-items-center gap-2">
          <FormGroup className=" d-flex gap-3 form_group form_group-fast">
            <span>
            <i class="ri-flight-takeoff-line"></i>
               </span>
            <div>
              <h6>Country</h6>
               <input type= "text" placeholder= "Donde queres viajar?" ref={countryRef}/>
              </div>
            </FormGroup>
            <FormGroup className=" d-flex gap-3 form_group form_group-fast">
            <span>
            <i class="ri-map-pin-fill"></i>
               </span>
            <div>
              <h6>City</h6>
               <input type= "text" placeholder= "city" ref={cityRef}/>
              </div>
            </FormGroup>
            <FormGroup className=" d-flex gap-3 form_group form_group-last">
            <span>
            <i class="ri-group-fill"></i>
            </span>
            <div>
            <h6>Price</h6>
            <input type= "number" placeholder= "0" ref={priceRef}/>
            </div>
            </FormGroup>
            <span className='search_icon' type="submit" onClick={searchHandler}>
            <i class="ri-search-2-line"></i>
            </span>
        </Form>
        </div>
      </Col>
  );
};

export default SearchBar
