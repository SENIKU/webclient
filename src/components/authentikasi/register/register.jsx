
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { regis } from "../../../redux/register/actionregis";
import { Link, useNavigate } from "react-router-dom";
import {Form, Card, Button, Row, Col} from 'react-bootstrap';

function Center() {
   
    const { isLoading, error } = useSelector((state) => state.registerReducer);
  const [inputEmail, setInputEmail] = useState("");
  const [inputFullName, setInputFullName] = useState("");
  const [inputUserName, setInputUserName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfPassword, setInputConfPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setInputEmail(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setInputFullName(e.target.value);
  };
  const handleUserNameChange = (e) => {
    setInputUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setInputPassword(e.target.value);
  };
  const handleConfPasswordChange = (e) => {
    setInputConfPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(regis(inputFullName,inputUserName, inputEmail, inputPassword , inputConfPassword));

    setInputFullName("");
    setInputUserName("");
    setInputEmail("");
    setInputPassword("");
    setInputConfPassword("");

    // Arahkan pengguna ke halaman login setelah registrasi berhasil
    navigate("/login");
  };

  return (
    <>
    <div className="position-center ">
    <Card  className="col-md-5 mx-auto  center border-red p-5 mb-5" style={{ width: '35rem' }}>
    <section className="login">
            <div className="container">
            <div className="">
                <div className="">
                <div className="col form text">
                    <div className="box-login d-flex justify-content-center flex-column">
                    <img
                        src="https://i.ibb.co/4RQg7W7/seniku.png"
                        alt="logo-primary"
                        width="20%"
                        className="mb-lg-5 mt-5 mb-4 mx-auto"
                    />
                    <Form onSubmit={handleSubmit} action="add-data" className="">
                        <Form.Group className="mb-3" controlId="Form.ControlInput1" width='80px'>
                          <Form.Label>Fullname</Form.Label>
                          <Form.Control type="text" placeholder="alex bhizier" id="fullname"
                        value={inputFullName}
                        onChange={handleFullNameChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Form.ControlInput2">
                          <Form.Label>username</Form.Label>
                          <Form.Control type="text" placeholder="alexbhizer"  id="username"
                        value={inputUserName}
                        onChange={handleUserNameChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Form.ControlInput3">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="name@example.com"  id="email"
                        value={inputEmail}
                        onChange={handleEmailChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Form.ControlInput4">
                        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                        <Form.Control
                          type="password"
                          aria-describedby="passwordHelpBlock"
                          id="password"
                        value={inputPassword}
                        onChange={handlePasswordChange}
                        />
                        
                        </Form.Group>
                  
                        <Form.Group className="mb-3" controlId="Form.ControlInput4">
                        <Form.Label htmlFor="inputPassword5">Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          aria-describedby="passwordHelpBlock" id="confpassword"
                        value={inputConfPassword}
                        onChange={handleConfPasswordChange}
                        />
                         
                        </Form.Group>
                        <Row className="mt-4">
                            <Col>
                            <Button variant="outline-primary" className="mt-3" type="submit" disabled={isLoading}>{isLoading ? "Loading..." : "Submit"}</Button>{' '}
                            </Col>
                            <Col>
                            <p>sudah punya akun? <Link to={"/login"} className="link-2">Login</Link></p>
                            </Col>
                        </Row>
                       
                        {error && <p>{error}</p>}
                      </Form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </Card>
       
    </div>
    </>
    
  );
}


export default Center;
