import OymakApi from "../services/oymakApi"
import { Dispatch } from "redux"
import {
  addNewCategory,
  updateLayoutLoading,
  updateLayoutErrorMessage,
  clearCategories,
  addNewProduct,
  clearProducts,
  updateCategoryCard
} from "../redux/actions"
import { Category, Product } from "../store/appInterfaces"

/**
 * Api'den kategoriler çekilip redux'a gönderiliyor
 */
export const fetchCategories = () => {
  return function(dispatch: Dispatch) {
    dispatch(updateLayoutLoading(true))

    return OymakApi.getCategoryList()
      .then(data => {
        dispatch(clearCategories())
        data.map(item => {
          dispatch(updateLayoutErrorMessage(""))
          dispatch(addNewCategory(item.Name, item.Id))
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
        data.map(item => {
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

/**
 * Api'den kategori çekilip redux'a gönderiliyor
 */
export const fetchCategoryCard = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(updateLayoutLoading(true))

    return OymakApi.getCategoryCard(id)
      .then(data => {
        dispatch(updateLayoutErrorMessage(""))

        const products: Product[] = data.Products.map(item => ({
          id: item.Id,
          name: item.Name,
          code: item.Code,
          price: item.Price.toString()
        }))

        const card: Category = {
          id: data.Id,
          name: data.Name,
          code: data.Code,
          products: products
        }
        dispatch(updateCategoryCard(card))
      })
      .catch(error => {
        dispatch(updateLayoutErrorMessage(error))
      })
      .finally(() => {
        dispatch(updateLayoutLoading(false))
      })
  }
}
