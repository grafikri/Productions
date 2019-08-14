import { Application, ConnectionSituations } from "../../store/appInterfaces"
import { types } from "../actionsTypes"
import { Reducer } from "redux"
/**
 * Uygulama içi global değişkenler buradan kontrol edilir.
 */

const initialState = {
  layoutLoading: false,
  layoutErrorMessage: "",
  connectionStatus: ConnectionSituations.STABLE,
  connectionErrorMessage: ""
}

const application: Reducer<Application> = (
  state: Application = initialState,
  action: any
): Application => {
  switch (action.type) {
    case types.UPDATE_LAYOUT_LOADING:
      return { ...state, layoutLoading: action.situation }
    case types.UPDATE_LAYOUT_ERROR_MESSAGE:
      return { ...state, layoutErrorMessage: action.message }
    default:
      return state
  }
}

export default application
