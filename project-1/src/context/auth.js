import React, { createContext, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = props => {
  const [isAuthenticate, setAuth] = useState(false)
  const loginSuccess = () => setAuth(true)
  const loginFailed = () => {
    localStorage.removeItem("token")
    setAuth(false)
  }
  return(
    <AuthContext.Provider value={{ isAuthenticate, loginSuccess, loginFailed }}>
      {props.children}
    </AuthContext.Provider>
  )
}

