import OymakApi from "../services/oymakApi"
import { Dispatch } from "redux"
import {
  addNewCategory,
  updateLayoutLoading,
  updateLayoutErrorMessage,
  clearCategories,
  addNewProduct,
  clearProducts,
  updateCategoryCard,
  addBulkCategory
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
        const categories: Category[] = data.map(item => ({
          id: item.Id,
          name: item.Name,
          code: "",
          products: []
        }))

        dispatch(updateLayoutErrorMessage(""))
        dispatch(clearCategories())
        dispatch(addBulkCategory(categories))
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
 *
 * Yeni kategori kayıt ediliyor
 */
export const addCategory = (name: string) => {
  return (dispatch: Dispatch) => {
    console.log("thunk: ", name)

    // return OymakApi.addCategory(name, code)
    //   .then(data => {
    //     dispatch(addNewCategory(data.Message, name, code))
    //   })
    //   .catch(error => {
    //     // Sunucu hata mesajı bu alanda yorumlanacak
    //   })
    //   .finally(() => {})
  }
}

/**
 * Api'den ürünler çekilip redux'a gönderiliyor
 */
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
