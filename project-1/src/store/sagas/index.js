import { all } from "redux-saga/effects"
import { watchLogin, watchRegister } from "./auth"
import {  watchGet, watchDel, watchAdd } from "./task"

export default function* rootSaga(){
  yield all([
    watchLogin(),
    watchRegister(),
    watchGet(),
    watchDel(),
    watchAdd()
  ])
}

