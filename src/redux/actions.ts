import { types } from "./actionsTypes"
import {
  Category,
  Product,
  RProductFormProps,
  RLoginProps,
  Auth,
  Application
} from "../store/appInterfaces"

export const addBulkCategory = (categories: Category[]) => ({
  type: types.ADD_BULK_CATEGORIES,
  categories: categories
})

export const addBulkProduct = (products: Product[]) => ({
  type: types.ADD_BULK_PRODUCTS,
  products: products
})

export const addNewCategory = (category: Category) => ({
  type: types.ADD_NEW_CATEGORY,
  category: category
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

export const updateProduct = (product: Product) => ({
  type: types.SET_PRODUCT,
  product: product
})

export const updatePropductFormPage = (productForm: RProductFormProps) => ({
  type: types.UPDATE_PAGE_PRODUCT_FORM,
  productForm: productForm
})

export const updateLoginPage = (loginForm: RLoginProps) => ({
  type: types.UPDATE_PAGE_LOGIN,
  loginForm: loginForm
})

export const updateAuth = (auth: Auth) => ({
  type: types.UPDATE_AUTH,
  auth: auth
})

export const updateApplication = (application: Application) => ({
  type: types.UPDATE_APPLICATION,
  application: application
})
