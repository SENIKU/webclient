import {  Container,Row, Col, Image, Stack, Nav } from 'react-bootstrap';



function Footer() {
  return (
    <footer >
        <hr className='bg-orange mb-5 mt-5' />
        <Container>
        <Row>
        <Col xs={6} md={3}>
        <Image src='https://i.ibb.co/4RQg7W7/seniku.png'  roundedCircle width='80%'/>
        
        </Col>
        <Col xs={6} md={3}>
         <h2 className='text-orange fs-bold'>SENIKU</h2>
            <p className='text-orange'>seniku platform seputar 
                tentang seni yang ada di indonesia</p>
        </Col>
        <Col xs={6} md={3}>
        <h2 className='text-orange fs-bold'>About</h2>
            <Stack gap={3}>
            <div className="">
                <Nav.Item>
                    <Nav.Link href="/about-us" className='text-orange'>About us</Nav.Link>
                </Nav.Item>
            </div>
            <div className="">
                <Nav.Item>
                    <Nav.Link href="/about-us" className='text-orange'>Pertunjukan</Nav.Link>
                </Nav.Item>
            </div>
            <div className="">
                <Nav.Item>
                    <Nav.Link href="/about-us" className='text-orange'>Musik</Nav.Link>
                </Nav.Item>
            </div>
            </Stack>
        </Col>
        <Col xs={6} md={3}>
        <h2 className='text-orange fs-bold'>Lainnya</h2>
            <Stack gap={2}>
            <div className="">
                <Nav.Item>
                    <Nav.Link href="/about-us" className='text-orange'>contact Us</Nav.Link>
                </Nav.Item>
            </div>
            <div className="">
                <Nav.Item>
                    <Nav.Link href="/about-us" className='text-orange'>FAQs</Nav.Link>
                </Nav.Item>
            </div>
            </Stack>
        </Col>
      </Row>
      </Container>
   </footer>
  );
}

export default Footer;