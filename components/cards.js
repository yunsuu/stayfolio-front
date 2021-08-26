import { useState, useEffect } from 'react';
import { Button, Container, Col, Image, Row, Modal } from 'react-bootstrap';
export default function Cards() {
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
      })
      .catch((err) => alert(err));
  }, []);
  return (
    <>
      {items === null ? null : (
        <>
          <Container>
            <Row md={4}>
              {items.map((item, idx) => {
                return (
                  <Col
                    onClick={(e) => {
                      setPopUpItem(idx);
                      handlePopUpShow();
                    }}
                    key={item.id}
                  >
                    <Image src={item.thumb} thumbnail />
                  </Col>
                );
              })}
            </Row>
          </Container>

          {/* 팝업창 */}
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
        </>
      )}
    </>
  );
}
