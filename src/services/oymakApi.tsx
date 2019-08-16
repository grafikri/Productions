import axios, { AxiosInstance } from "axios"
import { AxiosError } from "axios"
import qs from "qs"

/**
 * Oymak Grup Api'si ile ilgili tüm bağlantılar buradan sağlanmaktadır
 */
export default class OymakApi {
  /**
   * Axios nesnesini içinde barındırır
   * Sınıf kurulduğunda bu nesneye axios nesnesinin örneğini atayıp
   * static methodlar üzerinden erişiyoruz
   */
  static instance: AxiosInstance

  constructor() {
    OymakApi.instance = axios.create({
      baseURL: "http://interviewapp.oymakyazilim.com/",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
  }

  /**
   * Kullanıcı giriş yaptığında elde edilen token
   */
  static setToken(token: string) {
    return (this.instance.defaults.headers.common["Authorization"] =
      "Bearer " + token)
  }

  static login(userName: string, password: string): Promise<Login> {
    return new Promise((resolve, reject) => {
      return this.instance
        .post(
          "token",
          qs.stringify({
            username: userName,
            password: password,
            grant_type: "password"
          })
        )
        .then(data => {
          resolve(data.data as Login)
        })
        .catch((error: AxiosError) => {
          reject(this.getErrorMessage(error))
        })
    })
  }

  static getCategoryList(
    name?: string,
    code?: string
  ): Promise<CategoryList[]> {
    return new Promise((resolve, reject) => {
      return this.instance
        .get("api/Product/Category/Get", {
          params: {
            name: name,
            code: code
          }
        })
        .then(data => {
          resolve(data.data as CategoryList[])
        })
        .catch((error: AxiosError) => {
          reject(this.getErrorMessage(error))
        })
    })
  }

  static getCategoryCard(id: string): Promise<CategoryCard> {
    return new Promise((resolve, reject) => {
      return this.instance
        .get("api/Product/Category/Get/Card?id=" + id)
        .then(data => {
          resolve(data.data as CategoryCard)
        })
        .catch((error: AxiosError) => {
          reject(this.getErrorMessage(error))
        })
    })
  }

  static getProductCard(id: string): Promise<Product> {
    return new Promise((resolve, reject) => {
      return this.instance
        .get("api/product/get/card?id=" + id)
        .then(data => {
          resolve(data.data as Product)
        })
        .catch((error: AxiosError) => {
          reject(this.getErrorMessage(error))
        })
    })
  }

  static getProductList(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      return this.instance
        .get("api/Product/Get")
        .then(data => {
          resolve(data.data as Product[])
        })
        .catch((error: AxiosError) => {
          reject(this.getErrorMessage(error))
        })
    })
  }

  static addCategory(name: string, code: string): Promise<AddCategory> {
    return new Promise((resolve, reject) => {
      return this.instance
        .post(
          "api/Product/Category/Add",
          qs.stringify({
            Name: name,
            Code: code
          })
        )
        .then(data => {
          resolve(data.data as AddCategory)
        })
        .catch((error: AxiosError) => {
          reject(this.getErrorMessage(error))
        })
    })
  }

  static addProduct(
    name: string,
    code: string,
    date: string,
    price: string,
    categoryId: string
  ): Promise<AddCategory> {
    return new Promise((resolve, reject) => {
      return this.instance
        .post(
          "api/Product/Add",
          qs.stringify({
            Name: name,
            Code: code,
            ExpiredDate: date,
            Price: price,
            ProductCategoryId: categoryId
          })
        )
        .then(data => {
          resolve(data.data as AddedNewItem)
        })
        .catch((error: AxiosError) => {
          reject(this.getErrorMessage(error))
        })
    })
  }

  /**
   * Sunucudan bir şekilde yanıt alınamazsa burada hata detayı çıkartılıp gönderilir.
   * Bazen sunucu yanıt vermez, bazen yanıt verdiği halde 200 dışında bir hata döndürür.
   * Bu gibi durumların expection almadan anlaşılması için bu metodu kullanıyoruz
   *
   * @param error Request sonrası dönen hata nesnesidir
   */
  private static getErrorMessage(error: AxiosError): RequestErrorResponse {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      //return error.response.data.Message as string
      return {
        message: (error.response.data as ErrorMessage).Message,
        statusCode: error.response.status
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      //console.log("request: ",error.request)
      return {
        message:
          "Bağlantı sağlanamadı. Lütfen hizmet aldığınız birim ile görüşün."
      }
    } else {
      // Something happened in setting up the request that triggered an Error
      return { message: error.message }
      //console.log('Error', error.message)
    }
  }
}

/**
 * Api'den alınan response'ları temsil eden interface'lerdir
 */

/**
 * Login response
 */
interface Login {
  access_token: string
  token_type: string
  expires_in: number
  userName: string
  ".issued": string
  ".expires": string
}

/**
 * Kategori bilgileri
 */
interface CategoryCard {
  Id: string
  Code: string
  Name: string
  Products: CategoryCardProduct[]
}

/**
 * Kategori altındaki ürünler
 */
interface CategoryCardProduct {
  Id: string
  Code: string
  Name: string
  ExpiredDate: string
  Price: number
}

/**
 * Kategoriler
 */
interface CategoryList {
  Id: string
  Name: string
  Code: string
}

/**
 * Ürünler
 */
interface Product {
  Id: string
  Code: string
  Name: string
  ExpiredDate: string
  Price: number
  ProductCategoryId: string
  ProductCategoryCode: string
  ProductCategoryName: string
}

/**
 * Yeni kategori ekledikten sonra sunucudan dönen değerdir
 */
interface AddCategory {
  Data: string
  Message: string
}

/**
 * Yeni ürün veya kategori ekledikten sonra sunucudan dönen değerdir
 */
interface AddedNewItem {
  Data: string
  Message: string
}

/**
 * Sunucudan hata döndüğü zaman kullanılır
 */
interface ErrorMessage {
  Message: string
}

/**
 * Axios üzerinden error handling yönetimi yapılırken kullanılır
 * Her request sonucu error çıkması sonucu bu interface kullanılır
 */
export interface RequestErrorResponse {
  /**
   * Response'un çözümlenmesi sonucu karar verilen hata mesajıdır
   */
  message: string
  /**
   * Sunucunun döndürdüğü hata mesajıdır
   */
  statusCode?: number
}
