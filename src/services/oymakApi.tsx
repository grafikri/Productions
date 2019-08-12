import * as Api from "../store/oymakApiInterfaces"
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

  static login(userName: string, password: string): Promise<Api.Login> {
    return new Promise<Api.Login>((resolve, reject) => {
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
}
