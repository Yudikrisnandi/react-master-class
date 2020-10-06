import React from "react"

const Footer = () => {
  return(
    <div style={footer}>
      <h1>Oh my footer</h1>
    </div>
  )
}

export default Footer 

const footer = {
  display: "flex",
  background: "#fe024e",
  justifyContent: "center",
  color: "#fff",
  alignItems: "center",
  position: "absolute",
  bottom: "0",
  width: "100%"
}



