import { Reducer, Action } from "redux"
import { Category } from "../../store/appInterfaces"
import { types } from "../actionsTypes"
import { randomRangeNumber, randomNumber } from "../../helpers"

const categories: Reducer<Category[]> = (state: Category[] = [], action) => {
  switch (action.type) {
    case types.CLEAR_CATEGORIES:
      return []
    case types.ADD_NEW_CATEGORY:
      const upperName = action.name as string
      const code =
        (action.name[0] as string).toUpperCase() +
        "_" +
        randomRangeNumber(1000, 9999)
      return (state = [
        {
          id: action.id,
          name: upperName,
          code: code,
          products: []
        },
        ...state
      ])
    default:
      return state
  }
}

export default categories
