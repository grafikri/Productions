import { types } from "./actionsTypes"

export const addNewCategory = (name: string) => ({
  type: types.ADD_NEW_CATEGORY,
  name: name
})

export const addNewProduct = (name: string) => ({
  type: types.ADD_NEW_PRODUCT,
  name: name
})
