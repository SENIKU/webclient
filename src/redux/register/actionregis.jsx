import axios from "axios";
import { registerStart, registerFailure, registerSuccess } from "../actions/action";

export const regis = (fullname,username, email, password, confPassword) => {
  return async (dispatch) => {
    try {
    const url = import.meta.env.VITE_BACKEND_URL + "/register";
      dispatch(registerStart());
      const response = await axios.post(
        url,
        {
          fullname,
          username,
          email,
          password,
          confPassword,
        }
      );
        console.log(response);
      // Handle success response
      dispatch(registerSuccess());
    } catch (error) {
      // Handle error response
      dispatch(registerFailure(error.message));
    }
  };
};
