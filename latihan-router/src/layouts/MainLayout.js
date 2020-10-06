import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const MainLayout = props => {
  return(
    <React.Fragment>
      <Navbar/>
        {props.children}
      <Footer/>
    </React.Fragment>
  )
}

export default MainLayout
