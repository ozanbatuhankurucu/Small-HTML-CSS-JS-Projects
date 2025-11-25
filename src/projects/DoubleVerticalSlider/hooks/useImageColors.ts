import { useState, useEffect } from 'react'
import ColorThief from 'colorthief'

interface ImageColors {
  [key: string]: string
}

export const useImageColors = (imageUrls: string[]): ImageColors => {
  const [colors, setColors] = useState<ImageColors>({})

  useEffect(() => {
    const colorThief = new ColorThief()
    const extractedColors: ImageColors = {}

    const loadImage = (url: string): Promise<void> =>
      new Promise((resolve) => {
        const img = new Image()
        img.crossOrigin = 'Anonymous'

        img.onload = () => {
          try {
            const color = colorThief.getColor(img)
            extractedColors[url] = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
            resolve()
          } catch (error) {
            console.error('Error extracting color:', error)
            // Fallback color
            extractedColors[url] = '#333333'
            resolve()
          }
        }

        img.onerror = () => {
          console.error('Error loading image:', url)
          // Fallback color
          extractedColors[url] = '#333333'
          resolve()
        }

        img.src = url
      })

    const loadAllImages = async () => {
      await Promise.all(imageUrls.map((url) => loadImage(url)))
      setColors(extractedColors)
    }

    loadAllImages()
  }, [imageUrls])

  return colors
}
