/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {Card, Button, Row, Col} from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const CardMap = ({ cards }) => {
  
  return (
    <>
      {cards.map((item) => (
        <div className="col-12 mb-3 col-lg card-wrapper" key={item._id}>
          <Card className="card" style={{  height: '100%' }}>
            <div className="img-wrapper">
              <Card.Img className="card-image" src={item.image} style={{  height: '200px' }} />
            </div>
            <Card.Body className="text">
              <Row >
                <Col>
                  <Button variant="warning" className="text-white mb-2 text-center">{item.provinsi}</Button>
                </Col>
                <Col >
                  <Button variant="warning" className="text-white mb-2">{item.jenis}</Button>
                </Col>
              </Row>

              <Card.Title className="card-title mt-2 mb-3 fs-bold">{item.judul}</Card.Title>
              <Card.Text className="card-deskripsi mb-4" >
                {item.content }
              </Card.Text>
              <div className="link">
                <Link to={`/pertunjukan/${item._id}`}>
                  <Button variant="warning" className="bg-orange text-white">Read More <span className="ms-1"><BsFillArrowRightCircleFill /></span></Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};

export default CardMap;
