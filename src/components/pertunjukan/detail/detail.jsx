/* eslint-disable no-unused-vars */
import { Container } from 'react-bootstrap';
import DetailKonten from './contentdetail';
import Posisi from './posisi';

function Detail() {
  return (
    <div >
        
        <Container>
        <Posisi />
        <DetailKonten />
      </Container>
   </div>
  );
}

export default Detail;