/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Badge } from "react-bootstrap";
import { BsFillCalendarEventFill } from "react-icons/bs";
// import Comment from "./comment";
import Spinner from 'react-bootstrap/Spinner';

const KontenDetail = () => {
    const [detailData, setDetailData] = useState({});
   
    const { id } = useParams(); 

    const detailDate = {
      created_at: new Date(), // Ubah nilai ini sesuai data Anda (harus berupa objek Date)
    };
    useEffect(() => {

        async function fetchData() {
            const url = import.meta.env.VITE_BACKEND_URL + "/musik/" + `${id}`;
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
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('id-ID', options).format(date);
      };

      // Make sure to check if detailData is not empty before rendering the content
      if (!Object.keys(detailData).length) {
        return <div className="mt-5"> 
                 
                 <Spinner animation="border"  role="status" variant="warning">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>;
      }
      

    return (
        
        <div >
       
        <h1 className="text-orange mb-4 mt-4">{detailData.judul}</h1>
        <h3 className="mb-3">
          <Badge pill bg="warning"  text="white" className="me-3 ">{detailData.provinsi}</Badge>
        <Badge pill bg="warning"  text="white" >{detailData.jenis}</Badge>
        </h3>
        <div className="mb-5 text-orange">
          <span className="me-2 text-orange fs-bold-2"><BsFillCalendarEventFill />
          </span>
          {getFormattedDate(detailDate.created_at)}

        </div>

        {detailData.content.split("\n").map((el, i) => (
                <p key={i} className="text-justify">
                  {el}
                </p>
        ))} 
        <h5 className="mt-5">Ciptaan:
        </h5>
        <p className="mt-3"> {detailData.ciptaan}</p>
        <h5 className="mt-5">referensi:
        </h5>
        <a className="mt-3" href={detailData.referensi}> {detailData.referensi}</a>
       
       
        <iframe width="100%" height="600px" allow="fullscreen" src={detailData.linkyt} className='mt-5 mb-5'/>
        <h5 className="mb-4">Lirik:</h5>
        {detailData.lyrics.split("\n").map((el, i) => (
                <p key={i} className="text-justify">
                  {el}
                </p>
              ))}
       
        <div>

        </div>
      </div>
    );
}


export default KontenDetail;