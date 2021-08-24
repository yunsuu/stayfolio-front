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
  Modal,
} from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Home() {
  const [items, setItems] = useState(null);
  const [popUpItems, setPopUpItems] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const handlePopUpClose = () => setShowPopup(false);
  const handlePopUpShow = () => setShowPopup(true);

  useEffect(() => {
    fetch('http://localhost:9000/stores')
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
      });
    // 에러처리
  }, []);

  const myFun = () => {
    console.log(items);
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

      <Container>
        <Row Row md={4}>
          {items === null ? (
            <div> 로딩중</div>
          ) : (
            items.map((item, idx) => {
              return (
                <Col
                  onClick={(idx) => {
                    setPopUpItems(idx);
                    handlePopUpShow();
                  }}
                  key={item.id}
                >
                  <Image src={item.thumb} thumbnail />
                </Col>
              );
            })
          )}
        </Row>
      </Container>
      {items === undefined ? null : (
        <Modal show={showPopup} onHide={handlePopUpClose}>
          <Modal.Header>
            <Modal.Title>{items[popUpItems].name}</Modal.Title>
            <Button onClick={handlePopUpClose} variant="light">
              X
            </Button>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handlePopUpClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handlePopUpClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        // <Modal show={showPopup} onHide={handlePopUpClose}>
        //     <Modal.Header>
        //       <Modal.Title>{items[popUpItems].name}</Modal.Title>
        //       <Button onClick={handlePopUpClose} variant="light">
        //         X
        //       </Button>
        //     </Modal.Header>
        //     <Image src={items[popUpItems].image} />
        //     <Modal.Body>{items[popUpItems].description}</Modal.Body>
        //     <Modal.Footer>
        //       <Button variant="primary">홈페이지 바로가기</Button>
        //     </Modal.Footer>
        //   </Modal>
      )}
      <Container color="#000000">
        <span>@ 2021 이윤수</span>
      </Container>
      {/* 팝업 */}
    </>
  );
}
