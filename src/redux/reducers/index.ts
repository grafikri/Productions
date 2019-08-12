import { combineReducers } from "redux"

import auth from "./auth"
import categories from "./categories"
import category from "./category"

import { ApplicationState } from "../../store/appInterfaces"

export default combineReducers<ApplicationState>({
  auth,
  categories,
  category
})
