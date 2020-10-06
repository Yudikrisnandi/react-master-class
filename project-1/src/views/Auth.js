import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Redirect} from "react-router-dom"
import { loginAuth, registerAuth } from "../store/actions/auth"
import Input from "../components/Input"
import Button from "../components/Button"


const Auth = () => {
  const { isAuthenticated, isLoading, errors } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [isLogin, setLogin] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const regis = () => setLogin(!isLogin)

  const login = () => {
    const user = { email, password }
    dispatch(loginAuth(user))
    setEmail("")
    setPassword("")
  }

  const register = async () => {
    const user = { name, email, password }
    dispatch(registerAuth(user))
    setName("")
    setEmail("")
    setPassword("")
  }

  if(isAuthenticated){
    return <Redirect to="/task" />
  }

  return(
    <div style={box}>
      <h3 style={head}>{isLogin ? "Login" : "Daftar"}</h3>
      <div>
        {!isLogin && <Input
          placeholder="name"
          value={name}
          type="text"
          change={(e) => setName(e.target.value)}
        />}
        <Input
          placeholder="email"
          value={email}
          type="email"
          change={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="password"
          value={password}
          type="password"
          change={(e) => setPassword(e.target.value)}
        />
      </div>
      <div style={{ textAlign:"center", marginTop: "0.8rem" }}>
          <div>
            {errors && errors.map((item, idx)=> <p key={idx} style={{ color: "red", margin: "0.2rem 0"}}>{item.msg}</p>)}
          </div>
        <Button 
          variant="primary" 
          text={isLogin ? "Login": "Daftar"} 
          load={isLoading} 
          action={isLogin ? login : register}
        />
      </div>
      {isLogin ?(
        <div style={para}>
          <p>Belum punya akun? Silahkan</p><span onClick={regis} style={isReg}>Daftar</span>
        </div>
      ):(
        <div style={para}>
          <p>Sudah punya akun? Silahkan </p><span onClick={regis} style={isReg}>Login</span>
        </div>
      )}
    </div>
  )
}

export default Auth

const isReg = {
  fontSize: "15px",
  color: "#57ae4f",
  cursor: "pointer"
}

const para = {
  textAlign: "center",
  marginTop: "1rem",
  fontSize: "14px"
}

const head = {
  textAlign: "center",
  margin: "1rem  0"
}

const box = {
  background: "#fff",
  width: "25%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  paddingBottom: "0.7rem"
}



