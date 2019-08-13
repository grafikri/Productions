/**
 * Projenin çeşitli yerlerinde kullanılan helper metodları
 */

/**
 * Rastgele bir numara üretir
 * @param max Random üretilen numara en fazla bu değişkenin değeri kadar olur
 */
export const randomNumber = (max: number = 20): number => {
  return Math.floor(Math.random() * max) + 1
}

/**
 * İki değer arasında bir numara üretir
 * @param min Üretilecek min number
 * @param max Üretilecek max number
 */
export const randomRangeNumber = (
  min: number = 0,
  max: number = 1000
): number => {
  return randomNumber(max - min) + min
}

/**
 * Yeni kategori oluşturuken kategori adına göre code oluşturur
 * Örneğin: Mazda kategori adı şu şekilde oluşturulabilir -> M_43256
 *
 * @param name Kategori adı
 */
export const generateCategoryCode = (name: string): string => {
  return name[0].toUpperCase() + "_" + randomRangeNumber(10000, 99999)
}
