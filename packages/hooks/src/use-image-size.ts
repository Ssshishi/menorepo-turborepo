import { useState, useEffect } from 'react'

/**
 * @public
 */
export function useImageSize(url: string): {
  width: number
  height: number
}

export function useImageSize(url: string) {
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (url) {
      const img = document.createElement('img')
      img.addEventListener('load', (e: Event) => {
        const target = e.target as HTMLImageElement
        if (target.complete) {
          setSize({
            width: target.naturalWidth,
            height: target.naturalHeight
          })
        }
      })
      img.src = url
    }
  }, [url])

  return size
}
