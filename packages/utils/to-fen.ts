import currency from 'currency.js'
import type { Any } from 'currency.js'

/**
 * @public
 */
export function toFen(value: Any): number {
  return currency(value).multiply(100).value
}
