import { useRouter } from 'next/router';
import { Container, Navbar, Nav } from 'react-bootstrap';
export default function Header() {
  const router = useRouter();
  const redirectMain = () => {
    router.push('/');
  };
  const redirectAbout = () => {
    router.push('/about');
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={redirectMain}>AWESOME FOOD STORE</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={redirectMain}>STORE</Nav.Link>
          <Nav.Link onClick={redirectAbout}>ABOUT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
