import axios from "axios"
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
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Headers": "*"
    }
  })

  static login(userName: string, password: string): Promise<Login> {
    return new Promise((resolve, reject) => {
      return this.instance.post("login", {
        username: userName,
        password: password,
        grant_type: "password"
      })

      // setTimeout(() => {
      //   resolve({
      //     access_token: "string",
      //     token_type: "string",
      //     expires_in: 1234,
      //     userName: "string",
      //     ".issued": "string",
      //     ".expires": "string"
      //   })
      // }, 1000)
    })
  }

  static getCategoryList(): Promise<CategoryList> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          list: [
            {
              Id: "ee33aa62-8986-45b0-b46d-17c019c50e27",
              Name: "Mazda"
            },
            {
              Id: "ef587afd-f937-4b73-b5cd-88d4f913249c",
              Name: "Opel"
            },
            {
              Id: "c1dcb2f1-6870-4fb1-aacf-c90aa92fc136",
              Name: "Opel"
            }
          ]
        })
      }, 1000)
    })
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
  list: CategoryListItem[]
}

/**
 * Kategoriler listesindeki her item değeri
 */
interface CategoryListItem {
  Id: string
  Name: string
}
