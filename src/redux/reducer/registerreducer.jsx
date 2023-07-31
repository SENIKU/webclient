const initialState = {
    isLoading: false,
    error: null,
  };
  
  const registerReducer = (state = initialState, action) => {
    switch (action.type) {
      case "REGISTER_START":
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case "REGISTER_SUCCESS":
        return {
          ...state,
          isLoading: false,
          // handle success action
        };
      case "REGISTER_FAILURE":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case "SET_EMAIL":
        return {
          ...state,
          // handle setEmail action
        };
      case "SET_MESSAGE":
        return {
          ...state,
          // handle setMessage action
        };
      case "SET_NAME":
        return {
          ...state,
          // handle setName action
        };
      default:
        return state;
    }
  };
  
  export default registerReducer;
  