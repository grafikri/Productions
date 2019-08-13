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
   * Birden fazla kategoriy bir kerede eklemek için kullanılır
   */
  ADD_BULK_CATEGORIES,
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
   * Layout'un yüklenme durumunu güncellemek için kullanılır
   */
  UPDATE_LAYOUT_LOADING,
  /**
   * Layout yüklenirken bir hata meydana gelirse hata mesajını belirtmek için kullanılır
   */
  UPDATE_LAYOUT_ERROR_MESSAGE
}
