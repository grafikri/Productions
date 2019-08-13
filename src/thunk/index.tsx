import OymakApi from "../services/oymakApi"
import { Dispatch } from "redux"
import {
  addNewCategory,
  updateLayoutLoading,
  updateLayoutErrorMessage,
  clearCategories,
  addNewProduct,
  clearProducts
} from "../redux/actions"

/**
 * Api'den kategoriler çekilip redux'a gönderiliyor
 */
export const fetchCategories = () => {
  return function(dispatch: Dispatch) {
    dispatch(updateLayoutLoading(true))

    return OymakApi.getCategoryList()
      .then(data => {
        dispatch(clearCategories())
        data.list.map(item => {
          dispatch(updateLayoutErrorMessage(""))
          dispatch(addNewCategory(item.Name))
        })
      })
      .catch(error => {
        dispatch(updateLayoutErrorMessage(error))
      })
      .finally(() => {
        dispatch(updateLayoutLoading(false))
      })
  }
}

export const fetchProducts = () => {
  return (dispatch: Dispatch) => {
    dispatch(updateLayoutLoading(true))

    return OymakApi.getProductList()
      .then(data => {
        dispatch(clearProducts())
        dispatch(updateLayoutErrorMessage(""))
        data.list.map(item => {
          dispatch(addNewProduct(item.Name))
        })
      })
      .catch(error => {
        dispatch(updateLayoutErrorMessage(error))
      })
      .finally(() => {
        dispatch(updateLayoutLoading(false))
      })
  }
}
