import React from 'react'
import { Nav, Button } from 'react-bootstrap';
import Link from 'next/link'
import Image from 'next/image'
import logo from "../public/favicon-32x32.png"
export default function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark back">
  <div className="container-xl">
    
    <Image
        src={logo}
        alt="Logo" class="d-inline-block align-text-top"/>
    <Link href="/">
    <a  className="nav-link text-light">Todo</a>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample07XL">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link href="/">
            <a className="nav-link">Home </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <a className="nav-link">Contact</a>
          </Link>
        </li>
      </ul>
      {/* <ul className="navbar-nav px-3 ">
        <li className="nav-item text-nowrap ">
          <Button className="nav-link" >
              Signup
          </Button>
        </li>
      </ul> */}
    </div>
  </div>
</Nav>
  )
}