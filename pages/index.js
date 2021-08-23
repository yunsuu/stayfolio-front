import {
  Button,
  Alert,
  Container,
  Navbar,
  Nav,
  Card,
  Col,
  Image,
  Row,
} from 'react-bootstrap';
import { useState } from 'react';

export default function Home() {
  const [show, setShow] = useState(true);

  const myFun = () => {
    fetch('http://localhost:9000/stores')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

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
      {myFun()}
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Image
              src="https://s3.ap-northeast-2.amazonaws.com/images.brandsites/common-ground/uploads/00000000354.png"
              thumbnail
            />
          </Col>{' '}
          <Col>
            <Image
              src="https://s3.ap-northeast-2.amazonaws.com/images.brandsites/common-ground/uploads/00000000354.png"
              thumbnail
            />
          </Col>{' '}
          <Col>
            <Image
              src="https://s3.ap-northeast-2.amazonaws.com/images.brandsites/common-ground/uploads/00000000354.png"
              thumbnail
            />
          </Col>
          <Col>
            <Image
              src="https://s3.ap-northeast-2.amazonaws.com/images.brandsites/common-ground/uploads/00000000354.png"
              thumbnail
            />
          </Col>
        </Row>
      </Container>

      <hr class="solid" />
      <Container color="#000000">
        <text>@ 2021 이윤수</text>
      </Container>
    </>
  );
}
