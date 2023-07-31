import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoginStatus } from "../../../redux/store";
import {  NavLink,  useNavigate } from "react-router-dom";
import { Button, Card, Form} from "react-bootstrap";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setError("");

    try {
        const url = import.meta.env.VITE_BACKEND_URL + "/login";
      const response = await axios.post(
       url,
        {
          email,
          password,
        }
      );

      const token = response.data.token;
      const users = [response.data.users.id, response.data.users.name, response.data.users.username, response.data.users.imgprofile];
      // Store the token in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("users", users);

      // Fetch user data to check role
      let user;
      try {
        const url = import.meta.env.VITE_BACKEND_URL + "/users";
        const userResponse = await axios.get(
          url,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        user = userResponse.data.data.find((user) => user.email === email);
      } catch (error) {
        console.error(error);
      }

      if (user && user.role === "admin") {
        dispatch(setLoginStatus(true));
        navigate("/admin");
      } else {
        dispatch(setLoginStatus(true));
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setLoginStatus(true));
      navigate("/");
    }
  }, []);

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
                    <Form.Group className="mb-3" controlId="Form.ControlInput3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com"  id="email"
                    value={email}
                    onChange={handleEmailChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Form.ControlInput4">
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                      type="password"
                      aria-describedby="passwordHelpBlock"
                      id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    />
                    
                    </Form.Group>
              <Button
               variant="outline-primary"
                type="submit"
                onClick={handleLogin}
                disabled={isLoading}
              >
               {isLoading ? "Loading..." : "Submit"}
              </Button>
              {error && <span className="error-message">{error}</span>}
              <div className="register-wrapper">
                <p className="mt-2">Belum Punya Akun?</p>
                <NavLink to="/register" className="signup">
                  Register
                </NavLink>
              </div>
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

export default Login;
