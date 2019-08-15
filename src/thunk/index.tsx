import OymakApi from "../services/oymakApi"
import { Dispatch } from "redux"
import {
  updateLayoutLoading,
  updateLayoutErrorMessage,
  clearCategories,
  addNewProduct,
  clearProducts,
  updateCategoryCard,
  addBulkCategory,
  addNewCategory,
  addBulkProduct,
  updateProduct,
  updatePropductFormPage,
  updateLoginPage,
  updateAuth
} from "../redux/actions"
import { Category, Product } from "../store/appInterfaces"
import { generateCategoryCode } from "../helpers"
import { RouteComponentProps } from "react-router"

/**
 * Kullanıcı adı şifre login kontrolü
 */
export const doLogin = (
  userName: string,
  password: string,
  router: RouteComponentProps
) => {
  return function(dispatch: Dispatch) {
    dispatch(updateLoginPage({ formDisabled: true, loginSuccess: false }))

    return OymakApi.login(userName, password)
      .then(data => {
        dispatch(updateLoginPage({ formDisabled: false, loginSuccess: true }))
        dispatch(updateAuth({ token: data.access_token, name: data.userName }))
        OymakApi.setToken(data.access_token)
        router.history.push("/categories")
      })
      .catch(error => {
        dispatch(
          updateLoginPage({
            formDisabled: false,
            dialogOpen: true,
            dialogTitle: "Giriş başarısız",
            dialogDesc: "Girdiğiniz kullanıcı adı şifre eşleşmiyor.",
            loginSuccess: false
          })
        )
      })
      .finally(() => {})
  }
}

/**
 * Api'den kategoriler çekilip redux'a gönderiliyor
 */
export const fetchCategories = () => {
  return function(dispatch: Dispatch) {
    dispatch(updateLayoutLoading(true))

    return OymakApi.getCategoryList()
      .then(data => {
        const categories: Category[] = data.map(item => ({
          id: item.Id,
          name: item.Name,
          code: "",
          products: []
        }))

        dispatch(updateLayoutErrorMessage(""))
        dispatch(clearCategories())
        dispatch(addBulkCategory(categories))
      })
      .catch(error => {
        dispatch(updateLayoutErrorMessage(error))
      })
      .finally(() => {
        dispatch(updateLayoutLoading(false))
      })
  }
}

/**
 *
 * Yeni kategori kayıt ediliyor
 */
export const addCategory = (name: string) => {
  return (dispatch: Dispatch) => {
    const code = generateCategoryCode(name)

    return OymakApi.addCategory(name, code)
      .then(data => {
        dispatch(
          addNewCategory({
            id: data.Data,
            name: name,
            code: code,
            products: []
          })
        )
      })
      .catch(error => {
        // Sunucu hata mesajı bu alanda yorumlanacak
      })
      .finally(() => {})
  }
}

export const addProduct = (
  name: string,
  date: string,
  time: string,
  price: string,
  categoryId: string
) => {
  return (dispatch: Dispatch) => {
    const code = generateCategoryCode(name)
    /**
     * Sunucunun istediği time formatı
     */
    const dateTime = date + "T" + time

    dispatch(
      updatePropductFormPage({
        formSaving: true,
        dialogOpen: false,
        dialogTitle: "",
        dialogDesc: ""
      })
    )

    return OymakApi.addProduct(name, code, dateTime, price, categoryId)
      .then(data => {
        dispatch(
          updatePropductFormPage({
            formSaving: false,
            dialogOpen: true,
            dialogTitle: "Kayıt başarılı",
            dialogDesc:
              "Ürün sunucuya kayıt edildi. Aşağıdaki butona dokunduğunuzda ürün detay sayfasına yönlendirileceksiniz",
            productSaved: true,
            productId: data.Data
          })
        )
      })
      .catch(error => {
        dispatch(
          updatePropductFormPage({
            formSaving: false,
            dialogOpen: true,
            dialogTitle: "Kayıt başarısız",
            dialogDesc: "Ürün sunucuya kayıt edilemedi. Hata mesaj: " + error,
            productSaved: false
          })
        )
      })
      .finally(() => {})
  }
}

/**
 * Api'den ürünler çekilip redux'a gönderiliyor
 */
export const fetchProducts = () => {
  return (dispatch: Dispatch) => {
    dispatch(updateLayoutLoading(true))

    return OymakApi.getProductList()
      .then(data => {
        dispatch(clearProducts())
        dispatch(updateLayoutErrorMessage(""))

        const products: Product[] = data.map(item => ({
          id: item.Id,
          name: item.Name,
          code: item.Code,
          price: item.Price.toString(),
          categoryName: item.ProductCategoryName,
          categoryCode: item.ProductCategoryCode
        }))
        dispatch(addBulkProduct(products))
      })
      .catch(error => {
        dispatch(updateLayoutErrorMessage(error))
      })
      .finally(() => {
        dispatch(updateLayoutLoading(false))
      })
  }
}

/**
 * Api'den ürün çekilip redux'a gönderiliyor
 */
export const fetchProductCard = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(updateLayoutLoading(true))

    return OymakApi.getProductCard(id)
      .then(data => {
        dispatch(updateLayoutErrorMessage(""))

        const product: Product = {
          id: data.Id,
          name: data.Name,
          code: data.Code,
          price: data.Price.toString(),
          categoryName: data.ProductCategoryName,
          categoryCode: data.ProductCategoryCode
        }

        dispatch(updateProduct(product))
      })
      .catch(error => {
        dispatch(updateLayoutErrorMessage(error))
      })
      .finally(() => {
        dispatch(updateLayoutLoading(false))
      })
  }
}

/**
 * Api'den kategori çekilip redux'a gönderiliyor
 */
export const fetchCategoryCard = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(updateLayoutLoading(true))

    return OymakApi.getCategoryCard(id)
      .then(data => {
        dispatch(updateLayoutErrorMessage(""))

        const products: Product[] = data.Products.map(item => ({
          id: item.Id,
          name: item.Name,
          code: item.Code,
          price: item.Price.toString(),
          categoryName: "",
          categoryCode: ""
        }))

        const card: Category = {
          id: data.Id,
          name: data.Name,
          code: data.Code,
          products: products
        }
        dispatch(updateCategoryCard(card))
      })
      .catch(error => {
        dispatch(updateLayoutErrorMessage(error))
      })
      .finally(() => {
        dispatch(updateLayoutLoading(false))
      })
  }
}
