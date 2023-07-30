/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BsCaretRightFill } from "react-icons/bs";

const PosisiMusik = () => {
  
      
    return (
        <div className="mt-5 ">
            <div className="mt-4 mb-5"><br /></div>
            <div className="">
            <Link to={"/"} className="link-2 mt-5 me-2 ">Home</Link>
            <span className="text-orange"><BsCaretRightFill /></span>
            <Link to={"/Musik"} className="link-2  ms-2">Musik</Link>
            
            </div>
        </div>

    );
}


export default PosisiMusik;

