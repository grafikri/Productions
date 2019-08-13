import { Reducer, Action } from "redux"
import { Product } from "../../store/appInterfaces"
import { types } from "../actionsTypes"
import { randomRangeNumber, randomNumber } from "../../helpers"

const products: Reducer<Product[]> = (
  state: Product[] = [
    { id: "123", name: "Arçelik", code: "12345", price: "10" }
  ],
  action
) => {
const products: Reducer<Product[]> = (state: Product[] = [], action) => {
  switch (action.type) {
    case types.ADD_BULK_PRODUCTS:
      return [...state, ...action.products]
    case types.CLEAR_PRODUCTS:
      return []
    case types.ADD_NEW_PRODUCT:
      const upperName = action.name as string
      const id = randomRangeNumber(1000, 9999).toString()
      const code =
        (action.name[0] as string).toUpperCase() +
        "_" +
        randomRangeNumber(1000, 9999)
      return (state = [
        {
          id: id,
          name: upperName,
          code: code,
          price: action.price
        },
        ...state
      ])
    default:
      return state
  }
}

export default products
