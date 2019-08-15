import { types } from "./actionsTypes"
import {
  Category,
  Product,
  RProductFormProps,
  RLoginProps,
  Auth
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

export const updateLayoutLoading = (situation: boolean) => ({
  type: types.UPDATE_LAYOUT_LOADING,
  situation: situation
})

export const updateLayoutErrorMessage = (message: string) => ({
  type: types.UPDATE_LAYOUT_ERROR_MESSAGE,
  message: message
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
