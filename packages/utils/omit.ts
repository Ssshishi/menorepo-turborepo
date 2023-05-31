/**
 * @public
 */
export function omit<T = Record<string, any>>(
  data: Record<string, any>,
  fields: string[]
): T

/**
 * @public
 */
export function omit(data: Record<string, any>, fields: string[]) {
  const newData = Object.assign({}, data)
  fields.forEach(field => {
    delete newData[field]
  })
  return newData
}
