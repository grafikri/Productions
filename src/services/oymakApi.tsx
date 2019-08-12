interface Category {
  name: string
  id: string
}

export default class OymakApi {
  static base_url: string = "http://interviewapp.oymakyazilim.com/"
  static token: string = ""

  static getCategories(): Category[] {
    return [{ name: "Opel", id: "1" }]
  }

  static login() {}
}
