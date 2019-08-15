import { Application } from "../../store/appInterfaces"
import { types } from "../actionsTypes"
import { Reducer } from "redux"
/**
 * Uygulama içi global değişkenler buradan kontrol edilir.
 */

const application: Reducer<Application> = (
  state: Application = {},
  action: any
): Application => {
  switch (action.type) {
    case types.UPDATE_APPLICATION:
      return { ...state, ...action.application }
    default:
      return state
  }
}

export default application
