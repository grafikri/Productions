import axios from "axios"
import { AxiosError } from "axios"
import qs from "qs"
/**
 * Oymak Grup Api'si ile ilgili tüm bağlantılar buradan sağlanmaktadır
 */

export default class OymakApi {
  /**
   * Kullanıcı giriş yaptığında elde edilen token
   */
  static token: string = ""

  static instance = axios.create({
    baseURL: "http://interviewapp.oymakyazilim.com/",

    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Bearer jN_08svX81vkffPgFHkL0mNtvgQBo0-KrPupeZulQIZ1ParV0fWwgIw_FBt4v4Me8TlxJrNq1NNJvjXe1EwS8xwj7aibICQB7rEdCVB2q5zCCxqQswvDZqYZRxdikWdcKkt59aSGfmxNuZiOFybDW8sX1rWoTQd8qk_3NrWLyFmhUew0hKVEoPbVkPHqUKcU-j_InCToajWTm0wQy4P1Igvm9f6bIX0_4vqwgB3TSbKWsiKjo4FvAdoMZVFNk8dX2PL-PvtSXz6yc9eZFZFIQoUASarnRYfOzUQ1hYtL3m-Jfe5iz6eaT0SuaAOU-Aq5t_gtvj-9d8NBKbI1P5a9qVAZnX6R3e12FCe4DwkSRpwjmIs7VtpULujwoy9se64bMZUcMrZO5AR7bGE-SFel0WBuRy2OeFtQ8a7NsyYQYE7LqVwGw6tOvYO7dk3_PxerjXAUiLn88fFn9fneMKE18_ZsWvMW3-sM7Xey1kG7Q7StcudtRaDe_Frkdbvz03Chm8yg4i3DsqaQX6siLundPg"
    }
  })

  static login(userName: string, password: string): Promise<Login> {
    return new Promise((resolve, reject) => {
      return this.instance.post(
        "token",
        qs.stringify({
          username: userName,
          password: password,
          grant_type: "password"
        })
      )
    })
  }

  static getCategoryList(): Promise<CategoryList[]> {
    return new Promise((resolve, reject) => {
      return this.instance
        .get("api/Product/Category/Get/AutoCompleteList")
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

  static getProductList(): Promise<ProductList> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //reject("Beklenmedik bir hata")
        resolve({
          list: [
            {
              Id: "72b4be02-0e58-4a0f-8658-c231370d9c5c",
              Code: "C_13345",
              Name: "Corsa",
              ExpiredDate: "2020-08-13T10:07:55.237",
              Price: 2000.0,
              ProductCategoryId: "ef587afd-f937-4b73-b5cd-88d4f913249c",
              ProductCategoryCode: "O_12743",
              ProductCategoryName: "Opel"
            },
            {
              Id: "72b4be02-0e58-4a0f-8658-c231370d9c56",
              Code: "O_13345",
              Name: "Corsa",
              ExpiredDate: "2020-08-13T10:07:55.237",
              Price: 2000.0,
              ProductCategoryId: "ef587afd-f937-4b73-b5cd-88d4f913249c",
              ProductCategoryCode: "O_12743",
              ProductCategoryName: "Opel"
            }
          ]
        })
      }, 200)
    })
  }

  /**
   * Sunucudan bir şekilde yanıt alınamazsa burada hata detayı çıkartılıp gönderilir.
   * Bazen sunucu yanıt vermez, bazen yanıt verdiği halde 200 dışında bir hata döndürür.
   * Bu gibi durumların expection almadan anlaşılması için bu metodu kullanıyoruz
   *
   * @param error Request sonrası dönen hata nesnesidir
   */
  private static getErrorMessage(error: AxiosError): string {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      //return error.response.data.Message as string
      return (error.response.data as ErrorMessage).Message
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      //console.log("request: ",error.request)
      return "Bağlantı sağlanamadı. Lütfen hizmet aldığınız birim ile görüşün."
    } else {
      // Something happened in setting up the request that triggered an Error
      return error.message
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
}

/**
 * Ürünler
 */
interface ProductList {
  list: ProductListItem[]
}

/**
 * Ürün listesindeki her item değeri
 */
interface ProductListItem {
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
 * Sunucudan hata döndüğü zaman kullanılır
 */
interface ErrorMessage {
  Message: string
}
