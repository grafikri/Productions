import { types } from "./actionsTypes"

export const addNewCategory = (name: string) => ({
  type: types.ADD_NEW_CATEGORY,
  name: name
})
