import { Auth } from "../../store/appInterfaces"
import { Reducer } from "redux"
import { types } from "../actionsTypes"

const auth: Reducer<Auth> = (state: Auth = {}, action) => {
  switch (action.type) {
    case types.UPDATE_AUTH:
      return { ...state, ...action.auth }
    default:
      return state
  }
}

export default auth
