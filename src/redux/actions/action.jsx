// actions.js for login
export const setLoginStatus = (isLoggedIn) => ({
    type: "SET_LOGIN_STATUS",
    payload: isLoggedIn,
  });
  
  export const logout = () => ({
    type: "LOGOUT",
  });
  
  // actions.js for registration
  export const registerStart = () => ({
    type: "REGISTER_START",
  });
  
  export const registerSuccess = () => ({
    type: "REGISTER_SUCCESS",
  });
  
  export const registerFailure = (error) => ({
    type: "REGISTER_FAILURE",
    payload: error,
  });
  
  export const setEmail = (email) => ({
    type: "SET_EMAIL",
    payload: email,
  });
  
  export const setMessage = (message) => ({
    type: "SET_MESSAGE",
    payload: message,
  });
  
  export const setName = (name) => ({
    type: "SET_NAME",
    payload: name,
  });
  