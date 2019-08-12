/**
 * Action işlemleri ile ilgili type tanımlarının yapıldığı bölümdür
 */
export enum types {
  ADD_NEW_CATEGORY,
  ADD_NEW_PRODUCT,
  SET_CATEGORY,
  SET_PRODUCT
  /**
   * Layout'un yüklenme durumunu güncellemek için kullanılır
   */
  UPDATE_LAYOUT_LOADING,
  /**
   * Layout yüklenirken bir hata meydana gelirse hata mesajını belirtmek için kullanılır
   */
  UPDATE_LAYOUT_ERROR_MESSAGE
}
