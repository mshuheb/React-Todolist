import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClipboardList } from '@fortawesome/free-solid-svg-icons'


export default function Header(props) {
  return (
    <>
      <Navbar className='navb'>
        <Container>
        <FontAwesomeIcon icon={faClipboardList} size="2xl" style={{color: "#f1f4f8",}} />
        <Navbar.Brand className='title' style={{ color: '#EEEEEE' }}>{props.title}</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='Nav-Link' to="/">Home</Link>
            <Link className='Nav-Link' to="/about">About us</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
