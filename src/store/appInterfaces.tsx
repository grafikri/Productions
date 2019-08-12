/**
 * Burada uygulama içinde kullanılan data'ların interface'leri bulunmaktadır
 */

/**
 * Tüm uygulamanın data şeması
 */
export interface ApplicationState {
  auth: Auth
  category: Category
  product: Product
  categories: Category[]
  products: Product[]
}

/**
 * Bir ürünün detayı
 */
export interface Product {
  id: string
  name: string
  code: string
  price: string
}

/**
 * Bir kategorinin içeriği
 */
export interface Category {
  id: string
  name: string
  code: string
}

/**
 * Giriş yapan kullanıcı bilgileri
 */
export interface Auth {
  id: string
  name: string
}
