/**
 * Api'den alınan response'ları temsil eden interface'lerdir
 */

/**
 * Login olduktan sonra dönen yanıt tipi
 */
export interface Login {
  access_token: string
  token_type: string
  expires_in: number
  userName: string
  ".issued": string
  ".expires": string
}
