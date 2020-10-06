import React from "react"

const Input = ({ placeholder, value, change }) => {
  return(
    <input
      style={myInput} 
      type="text" 
      placeholder={placeholder} 
      value={value} 
      onChange={change}
    />
  )
}

export default Input

const myInput = {
  width: "80%",
  border: "none",
  borderBottom: "1px solid #57ae4f",
  marginBottom: "2rem",
  marginLeft: "2rem"
}


