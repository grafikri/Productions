import { Reducer, Action } from "redux"
import { Product } from "../../store/appInterfaces"
import { types } from "../actionsTypes"

const initialState = {
  id: "",
  name: "",
  code: "",
  price: ""
}

const product: Reducer<Product> = (
  state: Product = initialState,
  action
): Product => {
  switch (action.type) {
    case types.SET_PRODUCT:
      return { ...state, ...action.product }
    default:
      return state
  }
}

export default product
