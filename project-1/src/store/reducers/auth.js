const initialState = {
  isAuthenticated: true,
  isLoading: false,
  errors: null
}

const auth = (state=initialState, action) => {
  switch(action.type){
    default:
      return state
      case "LOGIN":
      case "REGISTER":
      return{
        ...state,
        isLoading: true
      }
    case "AUTH_SUCCESS":
      return{
        isAuthenticated: true,
        isLoading: false,
        errors: null
      }
    case "AUTH_FAILED":
      return{
        isAuthenticated: false,
        isLoading: false,
        errors: action.payload
      }
    case "AUTH_REMOVE_ERRORS":
      return{
        isAuthenticated: false,
        isLoading: false,
        errors:null 
      }
  }
}

export default auth

