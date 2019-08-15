/**
 * Action işlemleri ile ilgili type tanımlarının yapıldığı bölümdür
 */
export enum types {
  /**
   * Tüm kategorileri kaldırır
   */
  CLEAR_CATEGORIES,
  /**
   * Tüm ürünleri kaldırır
   */
  CLEAR_PRODUCTS,
  /**
   * Birden fazla kategoriyi bir kerede eklemek için kullanılır
   */
  ADD_BULK_CATEGORIES,
  /**
   * Birden fazla ürünü bir kerede eklemek için kullanılır
   */
  ADD_BULK_PRODUCTS,
  /**
   * Yeni kategori eklerken kullanılır
   */
  ADD_NEW_CATEGORY,
  /**
   * Yeni ürün eklerken kullanılır
   */
  ADD_NEW_PRODUCT,
  /**
   * Kategori bilgilerini güncellemek için kullanılır
   */
  SET_CATEGORY,
  /**
   * Ürün bilgilerini güncellemek için kullanılır
   */
  SET_PRODUCT,
  /**
   * Ürün ekleme sayfasını yönetmek için kullanılır
   */
  UPDATE_PAGE_PRODUCT_FORM,
  /**
   * Login sayfasını yönetmek için kullanılır
   */
  UPDATE_PAGE_LOGIN,
  /**
   * Giriş yapmış kullanıcının bilgilerini yönetmek için kullanılır
   */
  UPDATE_AUTH,
  /**
   * Global uygulama değişkenlerini yönetmek için kullanılır
   */
  UPDATE_APPLICATION
}
