import React from "react"
import { Route } from "react-router-dom"
import Home from "./views/Home"
import Auth from "./views/Auth"
import PrivateRoute from "./routes/PrivateRoutes"

const Routes = () => {
  return(
    <React.Fragment>
      <Route path="/" exact component={Auth}/>
      <PrivateRoute path="/task" exact component={Home}/>
    </React.Fragment>
  )
}

export default Routes

