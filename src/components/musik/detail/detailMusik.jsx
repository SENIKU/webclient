/* eslint-disable no-unused-vars */
import { Container } from 'react-bootstrap';
import KontenDetail from './detail';
import PosisiMusik from './posisiMusik';

function DetailMusik() {
  return (
    <div className="">
        
        <Container className='bg-color-four '>
        <PosisiMusik />
        <KontenDetail />
      </Container>
   </div>
  );
}

export default DetailMusik;