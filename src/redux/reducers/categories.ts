import { Reducer } from "redux"
import { Category } from "../../store/appInterfaces"

const initialState = [
  { id: "0001", name: "Mazda", code: "M1" },
  { id: "0002", name: "Opel", code: "O1" }
]

const categories: Reducer<Category[]> = (
  state: Category[] = initialState,
  action
) => state

export default categories
