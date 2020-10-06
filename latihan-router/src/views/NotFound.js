import React from "react"
import MainLayout from "../layouts/MainLayout"

const NotFound = () => {
  return(
    <MainLayout>
      <div style={container}>
      <h1>404 not found page</h1>
     </div>
    </MainLayout>
  )
}

export default NotFound 

const container = {
  padding: "0 6rem"
}
