import axios from "axios"
import qs from 'qs'
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

  static getCategoryList(): Promise<CategoryList[]> {
    return new Promise((resolve, reject) => {
      return this.instance.get("api/Product/Category/Get/AutoCompleteList").then(data => {
        resolve(data.data as CategoryList[])
      })
    })
  }

  static getCategoryCard(id: string): Promise<CategoryCard> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //reject("Beklenmedik bir hata")
        resolve({
          Id: "ef587afd-f937-4b73-b5cd-88d4f913249c",
          Code: "O_12743",
          Name: "Opel",
          Products: [
            {
              Id: "72b4be02-0e58-4a0f-8658-c231370d9c5c",
              Code: "C_13345",
              Name: "Corsa",
              ExpiredDate: "2020-08-13T10:07:55.237",
              Price: 2000.0
            },
            {
              Id: "72b4be02-0e58-4a0f-8658-c231370d9c55",
              Code: "C_13345",
              Name: "Corsa",
              ExpiredDate: "2020-08-13T10:07:55.237",
              Price: 2000.0
            }
          ]
        })
      }, 200)
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
