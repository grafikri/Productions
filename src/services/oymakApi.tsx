import * as Api from "../store/oymakApiInterfaces"

/**
 * Oymak Grup Api'si ile ilgili tüm bağlantılar buradan sağlanmaktadır
 */
export default class OymakApi {
  /**
   * Uygulama kök url
   */
  static base_url: string = "http://interviewapp.oymakyazilim.com/"

  /**
   * Kullanıcı giriş yaptığında elde edilen token
   */
  static token: string = ""

  static login(): Promise<Api.Login> {
    return new Promise<Api.Login>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          access_token: "string",
          token_type: "string",
          expires_in: 1234,
          userName: "string",
          ".issued": "string",
          ".expires": "string"
        })
      }, 1000)
    })
  }
}
