/**
 * @public
 */
export function pick<T = Record<string, any>>(
  data: Record<string, any>,
  fields: string[]
): T

/**
 * @public
 */
export function pick(data: Record<string, any>, fields: string[]) {
  const newData: Record<string, any> = {}
  fields.forEach(field => {
    if (field in data) {
      newData[field] = data[field]
    }
  })
  return newData
}
