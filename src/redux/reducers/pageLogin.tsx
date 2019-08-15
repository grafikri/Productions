import { RLoginProps } from "../../store/appInterfaces"
import { types } from "../actionsTypes"
import { Reducer } from "redux"

const initialState = {}

const loginForm: Reducer<RLoginProps> = (
  state: RLoginProps = initialState,
  action: any
): RLoginProps => {
  switch (action.type) {
    case types.UPDATE_PAGE_LOGIN:
      return { ...state, ...action.loginForm }
    default:
      return state
  }
}

export default loginForm
