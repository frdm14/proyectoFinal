import React, { useState } from 'react';
import "../Booking/booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { BASE_URL } from '../../utils/config';

import { useNavigate } from 'react-router-dom';

const Booking = ({tour}) => {

        const {price, reviews, title} = tour;
        const navigate = useNavigate();



        const [booking, setBooking] = useState({
            /*userId: user && user._id,
            userEmail: user && user.email,*/
            tourName: title,
            fullName:"",
            phone:"",
            amount:1,
            bookAt:""
        });

        const handleChange = e =>{
            setBooking(prev=>({...prev, [e.target.id]:e.target.value}))
        };

        const serviceFee = 150
        const totalAmount = Number(price) * Number(booking.amount) + Number(serviceFee)

        const handleClick = async e =>{
            e.preventDefault();
                console.log(booking)
            try {
                /*if(!user || user === undefined || user === null){
                    return alert("Please login")}*/

                    const res = await fetch(`${BASE_URL}/booking`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                    },
                credentials: "include",
                body: JSON.stringify(booking)
                })

                    const result = await res.json();
                    if(!res.ok){
                        return alert(result.message)
                    }
                    navigate("/thank-you");

            } catch (err) {
                alert(err.message);
            }

            
        };

        
  return <div className="booking">
    <div className='booking_top d-flex align-items-center justify-content-between'>
        <h3>${price} <span>/ por persona</span></h3>
        
    </div>
    <div className="booking_form">
        <h5>INFORMACION</h5>
        <Form className='booking_info-form' onSubmit={handleClick}>
            <FormGroup>
                <input type="text" placeholder='Nombre Completo' id='fullName' 
                required onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <input type="number" placeholder='Telefono' id='phone' 
                required onChange={handleChange}/>
            </FormGroup>
            <FormGroup className='d-flex align-items-center gap-3'>
                <input type="date" placeholder='' id='bookAt' 
                required onChange={handleChange}/>
                <input type="number" placeholder='Pasajeros' id='amount' 
                required onChange={handleChange}/>
            </FormGroup>
        </Form>
    </div>
    <div className="booking_bottom">
        <ListGroup>
            <ListGroupItem className='border-0 px-0'>
                <h5 className='d-flex align-items-center gap-1'>
                    ${price}<i class="ri-close-fill"></i> 1 persona</h5>
                <span> ${price}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0'>
                <h5>Cargo del servicio</h5>
                <span> ${serviceFee} </span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total'>
                <h5>Total</h5>
                <span> ${totalAmount}</span>
            </ListGroupItem>
        </ListGroup>
        <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Reserva Ya</Button>
    </div>
  </div>
  
}

export default Booking