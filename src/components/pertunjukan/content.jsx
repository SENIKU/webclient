import { Col, Row,} from "react-bootstrap";
import { useEffect, useState } from "react";
import CardMap from "./cardmap";
import axios from "axios";

const Content = () => {
    const url = import.meta.env.VITE_API_URL + "/pertunjukan";
    const [data, setData] = useState([]);
    const getData = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data.data);
            
          } catch (error) {
            console.error("Error fetching data:", error);
          }
    };

    useEffect(() => {
        getData();
      }, );

      if (!Object.keys(data).length) {
        return <div className="mt-5">Loading...</div>;
      }
    return (
        
        <div >
            <h1 className="text-orange mb-2">Seni Pertunjukan</h1>
            <Row>
                <Col>
                <div className="edukasi-layout gap-4    g-4 content mt-lg-0 pt-5">
                    <CardMap cards={data} />
                </div>
                </Col>
            </Row>
        </div>

    );
}

export default Content;