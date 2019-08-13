import { types } from "./actionsTypes"
import { Category } from "../store/appInterfaces"

export const addBulkCategory = (categories: Category[]) => ({
  type: types.ADD_BULK_CATEGORIES,
  categories: categories
})

export const addNewCategory = (id: string, name: string, code: string) => ({
  type: types.ADD_NEW_CATEGORY,
  id: id,
  name: name,
  code: code
})

export const clearCategories = () => ({
  type: types.CLEAR_CATEGORIES
})

export const clearProducts = () => ({
  type: types.CLEAR_PRODUCTS
})

export const addNewProduct = (name: string) => ({
  type: types.ADD_NEW_PRODUCT,
  name: name
})

export const updateCategoryCard = (card: Category) => ({
  type: types.SET_CATEGORY,
  card: card
})

export const updateLayoutLoading = (situation: boolean) => ({
  type: types.UPDATE_LAYOUT_LOADING,
  situation: situation
})

export const updateLayoutErrorMessage = (message: string) => ({
  type: types.UPDATE_LAYOUT_ERROR_MESSAGE,
  message: message
})
