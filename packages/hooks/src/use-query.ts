import { useState } from 'react'
import queryString from 'query-string'
import type { ParseOptions } from 'query-string'

const transfer = (
  params: queryString.ParsedQuery<string>,
  options?: ParseOptions
) => {
  if (options?.parseNumbers) {
    const parsed = queryString.parse(queryString.stringify(params), options)
    return Object.keys(parsed).reduce<queryString.ParsedQuery<string>>(
      (prev, cur) =>
        parsed[cur]?.toString() !== params[cur]
          ? { ...prev, [cur]: params[cur] }
          : prev,
      parsed
    )
  } else {
    return queryString.parse(queryString.stringify(params, options))
  }
}

/**
 * @public
 */
export const useQuery = <T = {}>(options?: ParseOptions): T => {
  const params = queryString.parse(window.location.search)

  const [query] = useState<T>(transfer(params, options) as T)

  return query
}
