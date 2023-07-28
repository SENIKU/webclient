/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BsCaretRightFill } from "react-icons/bs";

const Posisi = () => {
  
      
    return (
        <div className="mt-6 mb-1">
            <Link to={"/"} className="link-2 me-2">Home</Link>
            <span className="text-orange"><BsCaretRightFill /></span>
            <Link to={"/pertunjukan"} className="link-2 ms-2">Pertunjukan</Link>
            
        </div>
       
           
    );
}


export default Posisi;

