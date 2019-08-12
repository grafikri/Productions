import { Reducer, Action } from "redux"
import { Category } from "../../store/appInterfaces"
import { types } from "../actionsTypes"

const initialState = {
  id: "",
  name: "",
  code: ""
}

const category: Reducer<Category> = (
  state: Category = initialState,
  action
): Category => {
  switch (action.type) {
    case types.SET_CATEGORY:
      return state
    default:
      return state
  }
}

export default category
