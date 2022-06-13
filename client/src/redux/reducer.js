import { LOGIN, LOGIN_FAIL, LOG_OUT, SIGN_IN } from "./ActionTypes";
const initialState = {
  userSession: {},
  isLogged: false,
  userRegister: {
    email: "",
    password: "",
    name: "",
    surname: "",
    phone: "",
    address: "",
    age: "",
    document: "",
    phone2: "",
    state: "",
    city: "",
    country: "",
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userSession: action.payload,
        isLogged: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        userSession: null,
      };

    case SIGN_IN:
      return {
        ...state,
        userRegister: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
