/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import {  Card, Col, Image, Row } from "react-bootstrap";


const Comment = () => {
    const [detailData, setDetailData] = useState({});
    const { id } = useParams(); 

   
    useEffect(() => {

        async function fetchData() {
            const url = import.meta.env.VITE_API_URL + "/pertunjukan/" + `${id}`;
            try {
                
              // You can use await to fetch data from your API
              const response = await axios.get(url);

              if (response.status !== 200) {
                throw new Error('Network response was not ok');
              }
              setDetailData(response.data.data);
            } catch (error) {
              console.error('Error:', error);
            }
        }
        fetchData();
      }, [id]);

      // ubah format waktu
      const getFormattedDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
        return new Intl.DateTimeFormat('id-ID', options).format(date);
      };

      // Make sure to check if detailData is not empty before rendering the content
      if (!Object.keys(detailData).length) {
        return <div className="mt-5"> 
                 Loading...
               
              </div>;
      }
      
    return (
        
        <div className="">
        <h4 className="mb-5 mt-5">Comments</h4>
        <div>
        {detailData.comments.length > 0 ? (
        <Card style={{ width: '35rem' }}>
        {detailData.comments.map((el, i) => (
                <div key={i} >
                  <div className="mt-4  ms-4 ">
                  <Row>
                    <Col xs={2} md={1}>
                        <Image src={el.users.imgprofile} roundedCircle style={{  width: '45px', height: '45px' }}  />
                    </Col>
                    <Col xs={12} md={10}>
                        <Card.Title className="ms-3 mt-2 text-orange">{el.users.fullname} <span className="coment-text"> {getFormattedDate(el.created_at)}</span>
                        </Card.Title>
                    </Col>
                  </Row>
                    <p className="text-base text-justify ms-6 mt-2">{el.comment}</p>
                  </div>
                </div>
              ))}
        </Card>
        ) : (
            <Card style={{ width: '35rem' }}>
                <p className="mt-5 mb-5  text-center">comment Kosong</p>
        </Card>
      )}
        </div>
        

      
        
      </div>
           
    );
}


export default Comment;