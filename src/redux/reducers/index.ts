import { combineReducers } from "redux"

import auth from "./auth"
import categories from "./categories"

import { ApplicationState } from "../../store/appInterfaces"

export default combineReducers<ApplicationState>({
  auth,
  categories
})
