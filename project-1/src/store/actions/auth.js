export const loginAuth = user => {
  return{
    type: "LOGIN",
    payload: user
  }
}

export const registerAuth = user => {
  return{
    type: "REGISTER",
    payload: user
  }
}

