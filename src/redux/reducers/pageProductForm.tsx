import { RProductFormProps } from "../../store/appInterfaces"
import { types } from "..//actionsTypes"
import { Reducer } from "redux"

const initialState = {}

const productForm: Reducer<RProductFormProps> = (
  state: RProductFormProps = initialState,
  action: any
): RProductFormProps => {
  switch (action.type) {
    case types.UPDATE_PAGE_PRODUCT_FORM:
      return { ...state, ...action.productForm }
    default:
      return state
  }
}

export default productForm
