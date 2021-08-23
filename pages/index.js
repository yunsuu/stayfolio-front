import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button, Alert, Container, Navbar, Nav } from 'react-bootstrap';
import { useState } from 'react';

export default function Home() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">AWESOME FOOD STORE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">STORE</Nav.Link>
            <Nav.Link href="#features">ABOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>

      <hr class="solid" />
      <Container color="#000000">
        <text>@ 2021 이윤수</text>
      </Container>
    </>
  );
}
