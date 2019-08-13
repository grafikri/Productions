import { Reducer, Action } from "redux"
import { Category } from "../../store/appInterfaces"
import { types } from "../actionsTypes"

const categories: Reducer<Category[]> = (state: Category[] = [], action) => {
  switch (action.type) {
    case types.ADD_BULK_CATEGORIES:
      return action.categories
    case types.CLEAR_CATEGORIES:
      return []
    case types.ADD_NEW_CATEGORY:
      return [action.category, ...state]
    default:
      return state
  }
}

export default categories
