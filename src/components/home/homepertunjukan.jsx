import {  Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeContent from './contentpertunjukan/homecontent';


function HomePertunjukan() {
  return (
    <div >
        
        <Container>
        <Row>
            <Col md={11}>
                <h2 className='text-orange'>Seni Pertunjukan</h2>
            </Col>
            <Col md={1}>
                <Link to={`/pertunjukan`} className='link-2 '><span className='justify-content-end ms-3'>Lainnya </span></Link>
            </Col>
        </Row>

        <div>
            <HomeContent />
        </div>
        
      </Container>
   </div>
  );
}

export default HomePertunjukan;