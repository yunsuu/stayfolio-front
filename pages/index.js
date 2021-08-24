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
  const [popUpItem, setPopUpItem] = useState(0);
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

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">AWESOME FOOD STORE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {}}>STORE</Nav.Link>
            <Nav.Link href="#features">ABOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Row md={4}>
          {items === null ? (
            <div> 로딩중</div>
          ) : (
            items.map((item, idx) => {
              return (
                <Col
                  onClick={(e) => {
                    console.log(idx);
                    setPopUpItem(idx);
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
      {items === null ? null : (
        <Modal
          style={{ innerWidth: '500px' }}
          show={showPopup}
          onHide={handlePopUpClose}
        >
          <Modal.Header>
            <Modal.Title>{items[popUpItem].name}</Modal.Title>
            <Button onClick={handlePopUpClose} variant="light">
              X
            </Button>
          </Modal.Header>
          <Container style={{ textAlign: 'center' }}>
            <Image width={300} src={items[popUpItem].image} thumbnail />
          </Container>
          <Modal.Body>{items[popUpItem].description}</Modal.Body>
          <Modal.Footer>
            {items[popUpItem].url === undefined ? null : (
              <Button
                variant="primary"
                onClick={() => {
                  window.open(items[popUpItem].url, '_blank');
                }}
              >
                홈페이지 바로가기
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      )}
      <Container color="#000000">
        <span>@ 2021 이윤수</span>
      </Container>
      {/* 팝업 */}
    </>
  );
}
