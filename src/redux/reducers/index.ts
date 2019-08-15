import { combineReducers } from "redux"

import auth from "./auth"
import categories from "./categories"
import category from "./category"
import product from "./product"
import products from "./products"
import application from "./application"
import pageProductForm from "./pageProductForm"
import pageLogin from "./pageLogin"

import { ApplicationState } from "../../store/appInterfaces"

export default combineReducers<ApplicationState>({
  auth,
  categories,
  category,
  products,
  product,
  application,
  pageProductForm,
  pageLogin
})
