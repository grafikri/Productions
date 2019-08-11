import { ADD_NEW_CATEGORY } from "./actionsTypes"

export const addNewCategory = (name: string) => ({
  type: ADD_NEW_CATEGORY,
  name: name
})
