import { Carousel, } from "react-bootstrap";


const Caraousel = () =>{
    return(
        <div className="mb-5">
        <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/XbhZpPt/mak-yong.jpg" alt="mak-yong"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/1T0CmMg/burokan.jpg" alt="burokan"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/4RQg7W7/seniku.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    
        </div>
    )
}

export default Caraousel;