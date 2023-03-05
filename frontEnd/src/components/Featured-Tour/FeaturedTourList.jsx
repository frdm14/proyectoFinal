import React, { useState, useEffect } from "react";
import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";
import axios from "axios";
import { BASE_URL } from "../../utils/config";

const FeaturedTourList = () => {
  const [featuredTours, setFeaturedTours] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/tours/search/getFeaturedTours`)
      .then((response) => {
        setFeaturedTours(response.data.tours);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {featuredTours?.map((tour) => (
        <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;