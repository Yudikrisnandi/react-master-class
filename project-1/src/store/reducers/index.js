import { combineReducers } from "redux"
import auth from "./auth"
import task from "./task"

export default combineReducers({
  auth,
  task
})

