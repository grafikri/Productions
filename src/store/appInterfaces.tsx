import products from "../redux/reducers/products"

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
  application: Application
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
  products: Product[]
}

/**
 * Giriş yapan kullanıcı bilgileri
 */
export interface Auth {
  id: string
  name: string
}

/**
 * Application bilgileri
 */
export interface Application {
  /**
   * Sunucu bağlantısı aktif ise bu alan true olur
   * ve layout'lar loading modune geçer
   *
   */
  layoutLoading: boolean
  /**
   * Sunucu'dan hata döner ise layout içinde bu mesaj gösterilir
   */
  layoutErrorMessage: string
}

/**
 * Layout için gerekli değerler
 */
export interface LayoutErrorProps {
  loading?: boolean
  errorMessage?: string
}
