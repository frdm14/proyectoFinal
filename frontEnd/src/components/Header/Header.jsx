import React, { useRef, useEffect, useState} from 'react';
import {Container, Row, Button} from "reactstrap";
import {NavLink, Link, useNavigate} from "react-router-dom";

import logo from "../../assets/images/Logotipo.png";
import "./header.css";



const nav_links=[
  {
    path:"/home",
    display:"Home"
  },
  {
    path:"about",
    display:"About"
  },
  {
    path:"/tours",
    display:"Tours"
  },
]

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate =  useNavigate();


 
  const stickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (headerRef.current) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          headerRef.current.classList.add('sticky_header')
        } else {
          headerRef.current.classList.remove('sticky_header')
        }
      }
    })
  }

  useEffect(() =>{
    stickyHeader();
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setCurrentUser(user);
    }

    return () => window.removeEventListener("scroll", stickyHeader);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate('/home');
  };

    const toggleMenu = () => menuRef.current.classList.toggle("show_menu")

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) => (navClass.isActive ? 'active_link' : '')}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav_right d-flex align-items-center gap-4">
  
    <div className="nav_btns d-flex align-items-center gap-4">
      {currentUser? (<>
      <h5 className='mb-0'>{currentUser.username}</h5>
      <Button className="btn btn-dark" onClick={handleLogout}>
        Logout
      </Button>
      </> 
      ) : (
    
      <>
      <Button className="btn secondary__btn">
        <Link to="/login">Login</Link>
      </Button>
      <Button className="btn primary__btn">
        <Link to="/register">Register</Link>
      </Button>
      </>
    )}
    </div>
  <span className="mobile_menu" onClick={toggleMenu}>
    <i class="ri-menu-5-fill"></i>
  </span>
</div>
          </div>
        </Row>
      </Container>
    </header>
    
  )
};

export default Header