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
