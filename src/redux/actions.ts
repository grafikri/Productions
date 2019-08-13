import { types } from "./actionsTypes"

export const addNewCategory = (name: string, id: string) => ({
  type: types.ADD_NEW_CATEGORY,
  name: name,
  id: id
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

export const updateLayoutLoading = (situation: boolean) => ({
  type: types.UPDATE_LAYOUT_LOADING,
  situation: situation
})

export const updateLayoutErrorMessage = (message: string) => ({
  type: types.UPDATE_LAYOUT_ERROR_MESSAGE,
  message: message
})
