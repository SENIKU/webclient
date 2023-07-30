import { Nav, Container, Navbar, Button} from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="/" className='text-orange'><img
              src='https://i.ibb.co/4RQg7W7/seniku.png'
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /><span className='ms-1 text-orange'>Seniku</span>
             </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=" justify-content-end">
        <Nav className="" >
        <Nav.Item>
          <Nav.Link href="/" className='text-black btn-orange'>home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        
          <Nav.Link href="/pertunjukan" className='text-black btn-orange'>pertunjukan</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/musik" className='text-black btn-orange'>musik</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/event" className='text-black btn-orange'>event</Nav.Link>
        </Nav.Item>
        
      </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav" className=" justify-content-end">
        <Button variant="warning" className='text-white btn-white'>Login</Button>{' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;